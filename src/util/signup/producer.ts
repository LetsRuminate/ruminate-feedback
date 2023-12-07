import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "@components/api/firebase";

import { Producer } from "@customTypes/users";

// XXX
// These are just mockups for testing purposes - need real info from forms

// Need a real interface from sign-up forms
interface ProducerForm {
  yearsInIndustry: string;
  companyStructure: string;
  region: string;
  certificationTypes: string[];
  website: string;
  certificationFile: null | File;
  pronouns: null | string;
  companyEstablished: number;
  underrepresentedGroup: null | string;
  referralInfo: null | string;
  referredBy: null | string[];
  address: {
    zip: number;
    street: string;
    unit: null | string;
    state: string;
    city: string;
  };
  name: string;
  typesOfProducts: string[];
  otherPractices: string;
  email: string;
  password: string;
  businessName: string;
  whyInterested: string;
}

// XXX
// formInfo parameter needs annotation from actual interface, TBD
export default async function addNewProducer(formInfo: ProducerForm) {
  // first create the new auth user
  const newProducer = await createUserWithEmailAndPassword(
    auth,
    formInfo.email,
    formInfo.password,
  );

  const certFile = formInfo.certificationFile;
  let certPath = null;
  let certURL = null;

  if (certFile) {
    // now upload their cert documents (will need the path & download URL for db)
    certPath = `certDocs/${newProducer.user.uid}/${certFile.name}`;
    const certRef = ref(storage, certPath);
    await uploadBytes(certRef, certFile);
    certURL = await getDownloadURL(certRef)
  }

  // create the db entry
  const userDatabaseEntry: Producer = {
    adminConfirmed: false,
    approved: true,
    deactivated: false,
    deactivationReason: null,
    uid: newProducer.user.uid,
    role: "producer",
    info: {
      name: formInfo.name,
      email: formInfo.email,
      pronouns: formInfo.pronouns,
      address: formInfo.address,
      region: formInfo.region,
      products: null,
      signupDate: new Date(),
      lastLogin: new Date(),
      yearsInIndustry: formInfo.yearsInIndustry,
      businessName: formInfo.businessName,
      companyEstablished: formInfo.companyEstablished,
      typesOfProducts: formInfo.typesOfProducts,
      website: formInfo.website,
      companyStructure: formInfo.companyStructure,
      certificationTypes: formInfo.certificationTypes,
      certificationDocument: certPath,
      otherPractices: formInfo.otherPractices,
      underrepresentedGroup: formInfo.underrepresentedGroup,
      referredBy: formInfo.referredBy,
      referralInfo: formInfo.referralInfo,
      whyInterested: formInfo.whyInterested,
      certification: "thirdParty",
      certificationURL: certURL,
      paymentInfo: null,
      paymentReceived: false,
      plan: null,
      reapplyDate: null,
      selfCertificaionInfo: null,
    },
  };

  // upload info to db
  await setDoc(
    doc(db, "users", newProducer.user.uid),
    userDatabaseEntry,
  );
}

import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "@components/api/firebase";

import { Evaluator } from "@customTypes/users";
import { EvaluatorForm } from "@customTypes/forms";

// XXX
// EvaluatorForm interface will be tweaked with actual form data, TBD
export default async function addNewEvaluator(formInfo: EvaluatorForm) {
  // first create the new auth user
  const newEvaluator = await createUserWithEmailAndPassword(
    auth,
    formInfo.email,
    formInfo.password,
  );

  const docuFile = formInfo.qualificationFile;
  let docuPath = null;
  let docuURL = null;

  if (docuFile) {
    // now upload their document (will need the path & download URL for db)
    docuPath = `certDocs/${newEvaluator.user.uid}/${docuFile.name}`;
    const docuRef = ref(storage, docuPath);
    await uploadBytes(docuRef, docuFile);
    docuURL = await getDownloadURL(docuRef);
  }

  // create the db entry
  const userDatabaseEntry: Evaluator = {
    adminConfirmed: false,
    approved: true,
    deactivated: false,
    deactivationReason: null,
    uid: newEvaluator.user.uid,
    role: "evaluator",
    name: formInfo.name,
    email: formInfo.email,
    pronouns: formInfo.pronouns,
    address: formInfo.address,
    region: formInfo.region,
    products: null,
    signupDate: new Date(),
    lastLogin: new Date(),
    yearsInIndustry: formInfo.yearsInIndustry,
    industrySectors: formInfo.industrySectors,
    qualification: formInfo.qualification,
    qualificationDocument: docuPath,
    qualificationURL: docuURL,
    unavailableDates: formInfo.unavailableDates,
    shippingInstructions: formInfo.shippingInstructions,
    programCommitment: formInfo.programCommitment,
    availability: null,
    paymentInfo: null,
    paymentReceived: false,
    paymentRequested: false,
  };

  // upload info to db
  await setDoc(doc(db, "users", newEvaluator.user.uid), userDatabaseEntry);
}

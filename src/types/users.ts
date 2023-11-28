// XXX
// for firestore security rules, the following permissions apply to all fields
// in the ways indicated, unless otherwise noted (marked next to the field)

/* READ: */
// only for the specific user + admin

/* WRITE: */

// CREATE only for current user (only applies at sign up, once we've got
// an auth). we need to specify only those fields that can be CREATed,
// in order to prevent potential malicious actors from filling the database
// with junk info

// UPDATE only for specific user + admin

// DELETE nobody has delete permissions for now

interface UserInfo {
  /* These are common to both producers and evaluators */

  name: string;
  email: string;
  pronouns: null | string;
  address: Address;
  region: string;
  products: null | string[];
  signupDate: Date; // XXX nobody should have UPDATE access to this
  lastLogin: Date; // XXX only user should have UPDATE access
}

interface Address {
  // XXX
  // some producers need READ access to an evaluator's address for
  // shipping purposes (only those evaluators who are working on their products)
  city: string;
  state: string;
  street: string;
  unit: null | string;
  zip: number;
}

interface ProducerInfo extends UserInfo {
  /* These are taken directly from the forms */

  // ABOUT YOU
  yearsInIndustry: string;

  // YOUR BUSINESS
  businessName: string;
  companyEstablished: number;
  typesOfProducts: string[];
  website: null | string;

  // YOUR VALUES
  companyStructure: string;
  certificationTypes: null | string[];
  certificationDocument: null | string;
  otherPractices: string;
  underrepresentedGroup: null | string;

  // HOW YOU FOUND US
  referredBy: null | string[];
  referralInfo: null | string;
  whyInterested: string;

  /* Not explicity from forms, needed by admin, additional info, etc */

  certification: "self" | "thirdParty";
  deactivated: boolean; // XXX only admin can UPDATE
  deactivationReason: null | string; // XXX only admin can UPDATE
  paymentInfo: null;
  paymentReceived: boolean;
  plan: null | string;
  reapplyDate: null | Date; // XXX only admin can UPDATE
  selfCertificaionInfo: null;
}

interface EvaluatorInfo extends UserInfo {
  /* These are taken directly from the forms */

  // PROFESSIONAL INFO
  yearsInIndustry: number;
  industrySectors: null | string[];

  // QUALIFICAIONS
  qualification: string;
  qualificationDocument: string;
  unavailableDates: null | Date[];

  // CONTACT AND SHIPPING INFO
  shippingInstructions: null | string;
  programCommitment: boolean;

  /* Not explicity from forms, needed by admin, additional info, etc */

  availability: null | Date[];
  paymentInfo: null;
  paymentReceived: boolean;
  paymentRequested: boolean;
}

interface User {
  adminConfirmed: boolean; // XXX only admin can UPDATE
  uid: string; // XXX nobody should be able to UPDATE
  role: "admin" | "evaluator" | "producer"; // XXX only admin can UPDATE
}

// can't think of any info unique to admin yet...
export interface Admin extends User {
  info: {
    name: string;
    email: string;
  };
}

export interface Evaluator extends User {
  approved: boolean; // XXX only admin can UPDATE
  info: EvaluatorInfo;
}

export interface Producer extends User {
  approved: boolean; // XXX only admin can UPDATE
  info: ProducerInfo;
}

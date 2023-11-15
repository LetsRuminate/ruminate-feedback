interface UserInfo {
  /* These are common to both producers and evaluators */

  // From both forms:

  name: string;
  email: string;
  pronouns: null | string;
  address: Address;
  // region will be used for matching
  region: string;

  // Not from forms, but needed for admin:

  // null if no product yet, ids of product documents if so
  products: null | string[];

  signupDate: Date;
  lastLogin: Date;
}

interface Address {
  city: string;
  state: string;
  street: string;
  unit: null | string;
  zip: number;
}

interface ProducerInfo extends UserInfo {
  /* These are taken directly from the forms */

  // ABOUT YOU
  // form designs have these as ranges, so they're essentially strings
  yearsInIndustry: string;

  // YOUR BUSINESS
  businessName: string;
  companyEstablished: number;
  typesOfProducts: string[];
  website: null | string;

  // YOUR VALUES
  companyStructure: string;
  certificationTypes: null | string[];
  // 3rd party certified producers will have a doc (string = docRef)
  certificationDocument: null | string;
  otherPractices: string;
  underrepresentedGroup: null | string;

  // HOW YOU FOUND US
  referredBy: null | string[];
  referralInfo: null | string;
  whyInterested: string;

  /* Not explicity from forms, needed by admin, additional info, etc */

  // for now we're only supporting producers with third party certs
  certification: "self" | "thirdParty";
  deactivated: boolean;
  deactivationReason: null | string;
  // don't need payment info in this phase - for future devs
  paymentInfo: null;
  paymentReceived: boolean;
  // this will name the type of plan they have, which affects # of evaluators
  plan: null | string;
  // if not approvied, date will be 1 year from initial application
  reapplyDate: null | Date;
  // not dealing with self-certified producers in this phase
  selfCertificaionInfo: null;
}

interface EvaluatorInfo extends UserInfo {
  /* These are taken directly from the forms */

  // PROFESSIONAL INFO
  yearsInIndustry: number;
  industrySectors: null | string[];

  // QUALIFICAIONS
  qualification: string;
  // will be a docref to what they've uploaded in the form
  qualificationDocument: string;
  // old forms ask for when they're NOT available
  unavailableDates: Date[] | null;

  // CONTACT AND SHIPPING INFO
  shippingInstructions: null | string;
  programCommitment: boolean;

  /* Not explicity from forms, needed by admin, additional info, etc */

  // null if they haven't selected any dates yet
  availability: null | Date[];
  // don't need it in this phase - for future devs
  paymentInfo: null;
  // evaluators have option to work bro bono
  paymentReceived: boolean;
  paymentRequested: boolean;
}

interface User {
  // looks like all users need to be confirmed by an admin to access platform?
  adminConfirmed: boolean;
  // user document id = uid we get from auth
  uid: string;
  role: "admin" | "evaluator" | "producer";
}

// can't think of any info unique to admin yet...
export interface Admin extends User {
  info: {
    name: string;
    email: string;
  };
}

export interface Evaluator extends User {
  approved: boolean;
  info: EvaluatorInfo;
}

export interface Producer extends User {
  approved: boolean;
  info: ProducerInfo;
}

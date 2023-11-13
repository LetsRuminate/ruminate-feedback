interface UserInfo {
  name: string;
  email: string;
}

interface Address {
  city: string;
  state: string;
  street: string;
  unit: null | string;
  zip: number;
}

interface ProducerInfo extends UserInfo {
  address: Address;
  // automatic approval by system still needs admin to confirm documents
  adminConfirmed: boolean;
  businessName: string;
  // for now we're only supporting producers with third party certs
  certification: "self" | "thirdParty";
  // 3rd party certified producers will have a doc (string = docRef)
  // but self-certified producers will not (null)
  certificationDocument: null | string;
  certificationTypes: null | string[];
  companyEstablished: number;
  companyStructure: string;
  deactivated: boolean;
  deactivationReason: null | string;
  otherPractices: string;
  // don't need payment info in this phase - for future devs
  paymentInfo: null;
  paymentReceived: boolean;
  // this will name the type of plan they have, which affects # of evaluators
  plan: null | string;
  // null if no product yet, id of product document if so
  product: null | string;
  pronouns: null | string;
  // if not approvied, date will be 1 year from initial application
  reapplyDate: null | Date;
  referredBy: null | string[];
  // this will match to the same regional evaluators
  region: string;
  selfCertificaionInfo: null;
  typesOfProducts: string[];
  underrepresentedGroup: null | string;
  website: null | string;
  whyInterested: string;
  // prior forms have these as ranges, so they're essentially strings
  yearsInIndustry: string;
}

interface EvaluatorInfo extends UserInfo {
  address: Address;
  // null if they haven't selected any dates yet
  availability: null | Date[];
  industrySectors: null | string[];
  // don't need it in this phase - for future devs
  paymentInfo: null;
  // evaluators have option to work bro bono
  paymentReceived: boolean;
  paymentRequested: boolean;
  // once admin matches up, will change from null to a product id
  product: null | string;
  programCommitment: boolean;
  pronouns: null | string;
  qualification: string;
  // will be a docref to what they've uploaded in the form
  qualificationDocument: string;
  // this will match to the same regional producers
  region: string;
  shippingInstructions: null | string;
  // old forms ask for when they're NOT available
  unavailableDates: Date[] | null;
  yearsInIndustry: number;
}

// cant think of any information unique to admin...?
interface AdminInfo extends UserInfo {
  adminConfirmed: boolean;
}

interface User {
  // user document id = uid we get from auth
  uid: string;
  role: "admin" | "evaluator" | "producer";
  approved: boolean;
}

export interface Admin extends User {
  info: AdminInfo;
}

export interface Evaluator extends User {
  info: EvaluatorInfo;
}

export interface Producer extends User {
  info: ProducerInfo;
}

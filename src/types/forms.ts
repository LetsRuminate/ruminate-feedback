export interface AdminForm {
  name: string;
  email: string;
  password: string;
}

export interface ProducerForm {
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

export interface EvaluatorForm {
  name: string;
  email: string;
  password: string;
  pronouns: null | string;
  address: {
    zip: number;
    street: string;
    unit: null | string;
    state: string;
    city: string;
  };
  region: string;
  yearsInIndustry: number;
  industrySectors: null | string[];
  qualification: string;
  qualificationFile: null | File;
  unavailableDates: null | Date[];
  shippingInstructions: null | string;
  programCommitment: boolean;
}

export interface ProductIntakeForm {
  name: string;
  goal: string;
}

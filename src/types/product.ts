import Evaluation from "./evaluation";

export default interface Product {
  // this is just the document id, for reference
  productId?: string;
  // uid of the product's producer
  producerId: string;
  // uids of evaluators that are evaluating the product
  evaluatorIds: null | string[];
  evaluations: null | Evaluation[];
  // rudimentary info for experimenting - not fully developed in this phase
  goal: string;
  productName: string;
}

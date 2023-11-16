export default interface Evaluation {
  // this is just the document id, for reference (optional, since we're letting
  // firestore create a document id and won't have it until that happens)
  evaluationId?: string;
  // uid of the user providing this evaluation
  evaluatorId: string;
  // document id of the product being evaluated
  productId: string;
  // rudimentary info for experimenting - not fully developed in this phase
  info: {
    immediateThoughts: string;
    distinguishingFeatures: string;
    describeToCustomer: string;
  };
}

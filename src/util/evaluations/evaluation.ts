import { addDoc, collection, updateDoc } from "firebase/firestore";
import { db } from "@components/api/firebase";
import { EvaluationForm } from "@customTypes/forms";

import Evaluation from "@customTypes/evaluation";

export default async function addNewEvaluation(
  evaluatorId: string,
  productId: string,
  formInfo: EvaluationForm,
) {
  const newEvaluation: Evaluation = {
    evaluatorId,
    productId,
    describeToCustomer: formInfo.describeToCustomer,
  };
  const docRef = await addDoc(collection(db, 'evaluations'), newEvaluation);
  await updateDoc(docRef, {
    evaluationId: docRef.id,
  });
  return docRef.id;
}

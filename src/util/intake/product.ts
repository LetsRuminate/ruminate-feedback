import { addDoc, collection, updateDoc } from "firebase/firestore";
import { db } from "@components/api/firebase";
import { ProductIntakeForm } from "@customTypes/forms";
import Product from "@customTypes/product";

export default async function addNewProduct(
  producerId: string,
  formInfo: ProductIntakeForm,
) {
  const newProduct: Product = {
    goal: formInfo.goal,
    producerId,
    productName: formInfo.name,
    evaluatorIds: null,
    evaluations: null,
  };
  const docRef = await addDoc(collection(db, 'products'), newProduct);
  await updateDoc(docRef, {
    productId: docRef.id,
  });
  return docRef.id;
}

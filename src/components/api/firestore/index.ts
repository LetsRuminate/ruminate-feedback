import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

import { Admin, Evaluator, Producer } from "src/types/users";

export default async function getUserInfo(
  uid: string,
): Promise<Admin | Evaluator | Producer | null> {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    // need to cast to the correct user interface from firestore's DocumentData
    switch (docSnap.data().role) {
      case "admin":
        return docSnap.data() as Admin;
      case "evaluator":
        return docSnap.data() as Evaluator;
      case "producer":
        return docSnap.data() as Producer;
      default:
        return null;
    }
  }
  return null;
}

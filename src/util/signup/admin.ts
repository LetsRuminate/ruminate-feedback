import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@components/api/firebase";

import { Admin } from "@customTypes/users";
import { AdminForm } from "@customTypes/forms";

// XXX
// just a placeholder for now, admin doesn't even have a public-facing form
export default async function addNewAdmin(formInfo: AdminForm) {
  // first create the new auth user
  const newAdmin = await createUserWithEmailAndPassword(
    auth,
    formInfo.email,
    formInfo.password,
  );

  // create the db entry
  const userDatabaseEntry: Admin = {
    adminConfirmed: false,
    approved: true,
    deactivated: false,
    deactivationReason: null,
    uid: newAdmin.user.uid,
    role: "admin",
    name: formInfo.name,
    email: formInfo.email,
  };

  // upload info to db
  await setDoc(doc(db, "users", newAdmin.user.uid), userDatabaseEntry);
}

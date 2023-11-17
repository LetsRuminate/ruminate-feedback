import { createContext, useEffect, useState } from "react";
import { auth, db } from "@components/api/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, DocumentData, onSnapshot } from "firebase/firestore";

import { Admin, Evaluator, Producer } from "src/types/users";

function getUserInfo(
  documentData: DocumentData | undefined,
): Admin | Evaluator | Producer | null {
  // need to cast to the correct user interface from firestore's DocumentData
  if (documentData) {
    // XXX
    console.log(documentData);
    switch (documentData.role) {
      case "admin":
        return documentData as Admin;
      case "evaluator":
        return documentData as Evaluator;
      case "producer":
        return documentData as Producer;
      default:
        return null;
    }
  }
  return null;
}

interface ContextProps {
  children: React.ReactNode;
}

export const UserContext = createContext<Admin | Evaluator | Producer | null>(
  null,
);

export default function UserContextProvider({ children }: ContextProps) {
  const [user, setUser] = useState<Admin | Evaluator | Producer | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        onSnapshot(doc(db, "users", authUser.uid), (docu) => {
          // keeps the current user's state info up-to-date with database
          setUser(getUserInfo(docu.data()));
          // XXX
          // we'll also need to track any products associated with the user, &
          // admin will need even more info to facilitate the whole shebang
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

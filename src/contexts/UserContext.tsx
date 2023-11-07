import { createContext, useEffect, useState } from "react";
import { auth } from "@components/api/firebase";
import { onAuthStateChanged } from "firebase/auth";
import getUserRole from "@components/api/firestore";

interface ContextProps {
  children: React.ReactNode;
}

interface User {
  displayName: string | null;
  email: string | null;
  // when user first signs up, we'll create a db entry for them with their role
  role: "admin" | "producer" | "evaluator" | null;
  uid: string;
}

export const UserContext = createContext<User | null>(null);

export default function UserContextProvider({ children }: ContextProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const role = await getUserRole(authUser.uid);
        setUser({
          displayName: authUser.displayName,
          email: authUser.email,
          role,
          uid: authUser.uid,
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

import { createContext, useEffect, useState } from "react";
import { auth } from "@components/api/firebase";
import { onAuthStateChanged } from "firebase/auth";
import getUserInfo from "@components/api/firestore";

import { Admin, Evaluator, Producer } from "src/types/users";

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
        const userInfo = await getUserInfo(authUser.uid);
        console.log(userInfo);
        setUser(userInfo);
      } else {
        setUser(null);
      }
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

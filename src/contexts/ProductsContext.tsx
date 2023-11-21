import { createContext, useContext, useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "@components/api/firebase";
import { UserContext } from "./UserContext";
import Product from "src/types/product";
import { Producer } from "src/types/users";

interface ContextProps {
  children: React.ReactNode;
}

function checkProducer(user: Producer | unknown): user is Producer {
  return (user as Producer).role === "producer";
}

export const ProductsContext = createContext<Product[] | null>(null);

export default function ProductsContextProvider({ children }: ContextProps) {
  const user = useContext(UserContext);

  const [usersProducts, setUsersProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, "products"),
        where(
          "producerId",
          "==",
          // XXX
          // needs more granularity - different user roles = differnt queries
          // so far, only working for producers
          user && checkProducer(user) ? user.uid : null,
        ),
      );
      onSnapshot(q, (querySnapshot) => {
        const products: Product[] = [];
        querySnapshot.forEach((docu) => {
          const data = docu.data() as Product;
          products.push(data);
        });
        if (products.length) {
          setUsersProducts(products);
        } else {
          setUsersProducts(null);
        }
      });
    } else {
      setUsersProducts(null);
    }
    // XXX
    // typescript yelling about an empty dependency array...don't want to just
    // use "user" since any trivial change to user info will trigger a rerender
    // (ex. address), which is not the intention here.

    // need to make this dependent on authUser directly, not on our user context
  }, []);

  return (
    <ProductsContext.Provider value={usersProducts}>
      {children}
    </ProductsContext.Provider>
  );
}

import { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  WhereFilterOp,
} from "firebase/firestore";
import { db } from "@components/api/firebase";
import { UserContext } from "./UserContext";
import Product from "src/types/product";
import { Admin, Evaluator, Producer } from "src/types/users";

interface ContextProps {
  children: React.ReactNode;
}

function checkAdmin(user: Admin | unknown): user is Admin {
  return (user as Admin).role === "admin";
}

function checkEvaluator(user: Evaluator | unknown): user is Evaluator {
  return (user as Evaluator).role === "evaluator";
}

function checkProducer(user: Producer | unknown): user is Producer {
  return (user as Producer).role === "producer";
}

function getQueryParameters(user: Admin | Evaluator | Producer) {
  const { uid } = user;

  if (checkEvaluator(user)) {
    return {
      operandOne: "evaluatorIds",
      operator: "array-contains" as WhereFilterOp,
      operandTwo: uid,
    };
  }
  if (checkProducer(user)) {
    return {
      operandOne: "producerId",
      operator: "==" as WhereFilterOp,
      operandTwo: uid,
    };
  }
  // if for some reason we don't have a good user, give it a junk query
  return {
    operandOne: "nothing",
    operator: "==" as WhereFilterOp,
    operandTwo: "nonexistant",
  };
}

export const ProductsContext = createContext<Product[] | null>(null);

export default function ProductsContextProvider({ children }: ContextProps) {
  const user = useContext(UserContext);

  const [usersProducts, setUsersProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    if (user) {
      const queryParameters = getQueryParameters(user);
      // if admin, get all products
      const q = checkAdmin(user)
        ? query(collection(db, "products"))
        : // otherwise just those that are needed
          query(
            collection(db, "products"),
            where(
              queryParameters.operandOne,
              queryParameters.operator,
              queryParameters.operandTwo,
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

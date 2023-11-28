import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "@components/api/firebase";
import { UserContext } from "@contexts/UserContext";
import { ProductsContext } from "@contexts/ProductsContext";

import { Admin, Evaluator, Producer } from "src/types/users";

function checkAdmin(user: Admin | unknown): user is Admin {
  return (user as Admin).role === "admin";
}

// XXX
// this is a mock-up, ad-hoc dashboard just for experimenting with
// database interactions - not for realsies. this will all change, as
// front-end create dashboards from mid-fi designs
export default function AdminDashboard() {
  const user = useContext(UserContext);
  const userProducts = useContext(ProductsContext);
  console.log(userProducts);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const [allUsers, setAllUsers] = useState<
    (Admin | Evaluator | Producer)[] | null
  >(null);

  useEffect(() => {
    if (user && checkAdmin(user)) {
      const q = query(collection(db, "users"));
      onSnapshot(q, (querySnapshot) => {
        const users: (Admin | Evaluator | Producer)[] = [];
        querySnapshot.forEach((docu) => {
          const data = docu.data() as Admin | Evaluator | Producer;
          users.push(data);
        });
        if (users.length) {
          setAllUsers(users);
        } else {
          setAllUsers(null);
        }
      });
    } else {
      setAllUsers(null);
    }
  }, []);

  const displayAdminConfirmation = () => {
    if (user && checkAdmin(user) && user.adminConfirmed) {
      return <p className="bg-green-500 p-1">Admin confirmed</p>;
    }
    return <p className="bg-orange-400 p-1">Awaiting admin confirmation</p>;
  };

  const displayProducts = () => {
    if (user && checkAdmin(user)) {
      return (
        <div className="bg-neutral-100 p-1">
          <h2>All Products:</h2>
          {userProducts ? (
            userProducts.map((product) => {
              return (
                <div key={product.productId}>{product.info.productName}</div>
              );
            })
          ) : (
            <div>No Products =(</div>
          )}
        </div>
      );
    }
    return null;
  };

  const displayUsers = () => {
    if (user && checkAdmin(user)) {
      return (
        <div className="bg-neutral-100 p-1">
          <h2>All Users:</h2>
          {allUsers ? (
            allUsers.map((singleUser) => {
              return (
                <div
                  key={singleUser.uid}
                >{`${singleUser.info.name} (${singleUser.info.email})`}</div>
              );
            })
          ) : (
            <div>No Users =(</div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-blue-300 text-brand-black p-8 min-h-[400px]">
      <div className="flex flex-wrap gap-2">
        <div>
          <h1 className="text-3xl">
            Welcome {user && user.info.name ? user.info.name : "Producer"}!
          </h1>
          <p>{user ? user.info.email : null}</p>
          {displayAdminConfirmation()}
        </div>
        {displayUsers()}
        {displayProducts()}
      </div>
    </div>
  );
}

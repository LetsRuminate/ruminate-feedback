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

interface AllUsers {
  [key: string]: Admin | Evaluator | Producer;
}

// XXX
// this is a mock-up, ad-hoc dashboard just for experimenting with
// database interactions - not for realsies. this will all change, as
// front-end create dashboards from mid-fi designs
export default function AdminDashboard() {
  const user = useContext(UserContext);
  const userProducts = useContext(ProductsContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const [allUsers, setAllUsers] = useState<null | AllUsers>(null);
  const [userDetailId, setUserDetailId] = useState<null | string>(null);

  useEffect(() => {
    if (user && checkAdmin(user)) {
      const q = query(collection(db, "users"));
      onSnapshot(q, (querySnapshot) => {
        const users: AllUsers = {};
        querySnapshot.forEach((docu) => {
          const data = docu.data() as Admin | Evaluator | Producer;
          users[data.uid] = data;
        });
        if (Object.keys(users).length) {
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

  const getDetailUser = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLButtonElement;
    const { uid } = target.dataset;
    if (uid) {
      setUserDetailId(uid);
    }
  };

  const displayUsers = () => {
    if (user && checkAdmin(user)) {
      return (
        <div className="bg-neutral-100 p-1 flex flex-col items-start">
          <h2>All Users:</h2>
          {allUsers ? (
            Object.keys(allUsers).map((singleId) => {
              const currentUser = allUsers[singleId];
              return (
                <button
                  data-uid={currentUser.uid}
                  key={currentUser.uid}
                  onClick={getDetailUser}
                  type="button"
                >
                  {`${currentUser.info.name} (${currentUser.info.email})`}
                </button>
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

  const displayAddress = (currentUser: Evaluator | Producer) => {
    const { address } = currentUser.info;
    return (
      <div>
        <div>{address.street}</div>
        {address.unit ? <div>{`Unit ${address.unit}`}</div> : null}
        <div>{`${address.city}, ${address.state}`}</div>
        <div>{address.zip}</div>
      </div>
    );
  };

  const displayUserDetail = () => {
    if (allUsers && userDetailId) {
      const currentUser = allUsers[userDetailId];
      console.log(currentUser);
      return (
        <div className="bg-neutral-50 flex gap-2">
          <div className="p-1 flex flex-col gap-1">
            <h2>Selected User Detail:</h2>
            <div>{currentUser.info.name}</div>
            <div>{currentUser.info.email}</div>
            <div>role: {currentUser.role}</div>
            <div
              className={currentUser.approved ? "bg-green-400" : "bg-red-400"}
            >
              {currentUser.approved ? "Approved" : "Not Approved"}
            </div>
            <div
              className={
                currentUser.adminConfirmed ? "bg-green-400" : "bg-red-400"
              }
            >
              {currentUser.adminConfirmed
                ? "Admin Confirmed"
                : "Not Admin Confirmed"}
            </div>
          </div>
          <div className="mt-6 p-1 flex flex-col gap-1">
            {!checkAdmin(currentUser) ? displayAddress(currentUser) : null}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-blue-300 text-brand-black p-8 min-h-[400px] flex flex-col items-start gap-2">
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
      {displayUserDetail()}
    </div>
  );
}

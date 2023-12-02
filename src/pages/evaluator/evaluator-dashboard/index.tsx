import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "@contexts/UserContext";
import { ProductsContext } from "@contexts/ProductsContext";
import { Evaluator } from "src/types/users";
// import Profile from "@components/user-profile";

function checkEvaluator(user: Evaluator | unknown): user is Evaluator {
  return (user as Evaluator).role === "evaluator";
}

// XXX
// this is a mock-up, ad-hoc dashboard just for experimenting with
// database interactions - not for realsies. this will all change, as
// front-end create dashboards from mid-fi designs
export default function EvaluatorDashboard() {
  const user = useContext(UserContext);
  const userProducts = useContext(ProductsContext);
  console.log(userProducts);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const displayApprovalStatus = () => {
    if (user && checkEvaluator(user) && user.approved) {
      return <p className="bg-green-500 p-1">Approved</p>;
    }
    return <p className="bg-rose-500 p-1">Not approved</p>;
  };

  const displayAddress = () => {
    if (user && checkEvaluator(user)) {
      return (
        <div className="bg-neutral-100 text-black p-1">
          <p>Shipping Address:</p>
          <p>{user.info.address.street}</p>
          <p>{`${user.info.address.city}, ${user.info.address.state}`}</p>
          {user.info.address.unit ? (
            <p>{`unit ${user.info.address.unit}`}</p>
          ) : null}
          <p>{user.info.address.zip}</p>
        </div>
      );
    }
    return null;
  };

  const displayProducts = () => {
    if (user && checkEvaluator(user)) {
      return (
        <div className="bg-neutral-100 p-1">
          <h2>Evaluating:</h2>
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

  return (
    <div className="bg-blue-300 text-brand-black p-8 min-h-[400px]">
      <div className="flex flex-wrap gap-2">
        <div>
          <h1 className="text-3xl">
            Welcome {user && user.info.name ? user.info.name : "Evaluator"}!
          </h1>
          <p>{user ? user.info.email : null}</p>
          {displayApprovalStatus()}
        </div>
        {displayAddress()}
        {displayProducts()}
      </div>
      <button className="bg-white text-blue-500 py-5 px-10 my-3 rounded-3xl">
        <Link to="/evaluation-default">Review Products</Link>
      </button>
      <div>
        <button className="bg-white text-blue-500 py-5 px-10 my-3 rounded-3xl">
          <Link to="">Calendar</Link>
        </button>
      </div>
    </div>
  );
}

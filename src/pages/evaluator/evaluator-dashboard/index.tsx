import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@contexts/UserContext";
import { Evaluator } from "src/types/users";

function checkEvaluator(user: Evaluator | unknown): user is Evaluator {
  return (user as Evaluator).role === "evaluator";
}

export default function EvaluatorDashboard() {
  const user = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const displayApprovalStatus = () => {
    if (user && user.approved) {
      return <p className="bg-green-500 p-1">Approved</p>;
    }
    return <p className="bg-rose-500 p-1">Not approved</p>;
  };

  const displayAddress = () => {
    if (user && checkEvaluator(user)) {
      return (
        <div className="bg-neutral-100 text-brand-black p-1">
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

  return (
    <div className="bg-brand-blue text-neutral-50 p-8 min-h-[400px]">
      <div className="flex flex-wrap gap-2">
        <div>
          <h1 className="text-3xl">
            Welcome {user && user.info.name ? user.info.name : "Evaluator"}!
          </h1>
          <p>{user ? user.info.email : null}</p>
          {displayApprovalStatus()}
        </div>
        {displayAddress()}
      </div>
    </div>
  );
}

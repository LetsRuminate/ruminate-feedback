import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "@contexts/UserContext";
import { ProductsContext } from "@contexts/ProductsContext";

import { Producer } from "src/types/users";

// React Icons
import { FaListUl } from "react-icons/fa";
import Grid from "@assets/producer-dashboard/main-page/grid.svg";

function checkProducer(user: Producer | unknown): user is Producer {
  return (user as Producer).role === "producer";
}

// XXX
// this is a mock-up, ad-hoc dashboard just for experimenting with
// database interactions - not for releases. this will all change, as
// front-end create dashboards from mid-fi designs
export default function ProducerDashboard() {
  const user = useContext(UserContext);
  const userProducts = useContext(ProductsContext);
  console.log(userProducts);

  const displayAddress = () => {
    if (user && checkProducer(user)) {
      return (
        <>
          <p>{user.address.street}</p>
          <p>{`${user.address.city}, ${user.address.state}`}</p>
          {user.address.unit ? <p>{`unit ${user.address.unit}`}</p> : null}
          <p>{user.address.zip}</p>
        </>
      );
    }
    return null;
  };

  const displayAdminConfirmation = () => {
    if (user && checkProducer(user) && user.adminConfirmed) {
      return <p className="bg-green-500 p-1">Admin confirmed</p>;
    }
    return <p className="bg-orange-400 p-1">Awaiting admin confirmation</p>;
  };

  const displayBusinessInfo = () => {
    return (
      <div className="bg-neutral-100 p-1">
        <p>
          {user && checkProducer(user) && user.businessName
            ? user.businessName
            : null}
        </p>
        <p>
          {user && checkProducer(user) && user.website ? user.website : null}
        </p>
        {user && checkProducer(user) && user.address ? displayAddress() : null}
      </div>
    );
  };

  const displayPlanInfo = () => {
    if (user && checkProducer(user)) {
      return (
        <div className="bg-neutral-100 text-black p-1">
          <p>{`Plan: ${user.plan ? user.plan : "N/A"}`}</p>
          <p>Plan info here?</p>
          <p>
            {"Payment: "}
            <span
              className={`p-1 ${
                user.paymentReceived ? "bg-green-300" : "bg-rose-300"
              }`}
            >
              {user.paymentReceived ? "Received" : "Not Received"}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  const displayApprovalStatus = () => {
    if (user && checkProducer(user) && user.approved) {
      return <p className="bg-green-500 p-1">Approved</p>;
    }
    return <p className="bg-rose-500 p-1">Not approved</p>;
  };

  // const displayProducts = () => {
  //   if (user && checkProducer(user)) {
  //     return (
  //       <div className="bg-neutral-100 p-1">
  //         <h2>Products:</h2>
  //         {userProducts ? (
  //           userProducts.map((product) => {
  //             return (
  //               <div key={product.productId}>{product.info.productName}</div>
  //             );
  //           })
  //         ) : (
  //           <div>No Products =(</div>
  //         )}
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  return (
    <div className="text-brand-black pb-8 h-full flex-1 px-10">
      <div>
        <p className="text-5xl my-5 text-center">
          Phase 5 team will continue build from here.
        </p>
      </div>
      <div className="border-t border-[#D9D9D9]">
        <div className="pt-6 flex justify-between items-center">
          <h1 className="text-3xl">
            Welcome {user && user.name ? user.name : "Producer"}!
          </h1>
          <Link to="/product-default">
            <button className="p-5 rounded-xl bg-gray-200">
              START PRODUCT INTAKE
            </button>
          </Link>
        </div>
        <div className="flex gap-2 items-center justify-end mt-10 mb-7">
          <img src={Grid} alt="grid" />
          <div className="bg-gray-200 p-2 w-fit rounded-lg">
            <FaListUl />
          </div>
        </div>
        <div className="bg-gray-200 px-10 py-5 mb-20 rounded-lg">
          <h1 className="text-3xl font-manrope font-medium mb-9">
            Your Current Product Evaluations
          </h1>
          <button>In Progress {/* how many? */}</button>
          <button className="ml-20">Completed {/* how many? */}</button>
          <p className="my-20 text-center text-base font-manrope font-medium">
            Please note: you will see more activities as you fill out the
            product intake form.
            <br /> You can find the form both on the left menu (Evaluations) or
            on the right top corner ("START PRODUCT INTAKE" button).
          </p>
        </div>
        <div className="bg-gray-200 px-10 py-5 rounded-lg">
          <h1 className="text-3xl font-manrope font-medium mb-4">
            Your Products
          </h1>
          <p className="text-base font-manrope font-medium mb-9">
            Here is a list of products you've specified in your sign-up form.
            Some are ready for evaluation, while others will be accepted later.
            Join the waitlist to be notified when the Product Intake form is
            available.
          </p>
          <button>Product Type {/* how many? */}</button>
          <button className="ml-20">Status {/* how many? */}</button>
          <p className="my-20 text-center text-base font-manrope font-medium">
            Your filled out product applications will show up here.
          </p>
        </div>
        <div className="mt-56">
          <p>{user ? user.email : null}</p>
          {displayApprovalStatus()}
          {displayAdminConfirmation()}
          {displayBusinessInfo()}
          {displayPlanInfo()}
          {/* {displayProducts()} */}
        </div>
      </div>
    </div>
  );
}

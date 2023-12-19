import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import UserContextProvider from "./contexts/UserContext.tsx";
import ProductsContextProvider from "@contexts/ProductsContext.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// List of pages
import NotFound from "@pages/404/index.tsx";
import Home from "@pages/home/index.tsx";
import Login from "@pages/login/index.tsx";
import AboutUs from "@pages/home/about-us/index.tsx";
import HowItWorks from "@pages/home/how-it-works/index.tsx";

// Detail page for Members
import AdminDashboard from "@pages/users-related/admin/admin-dashboard/index.tsx";
// ============= if producer is approved but unpaid ====================
import ProducerApproved from "@pages/users-related/producer/approved/index.tsx";
// ============= if producer is approved and paid ====================
import ProducerDashboard from "@pages/users-related/producer/producer-dashboard/index.tsx";
import EvaluatorDashboard from "@pages/users-related/evaluator/evaluator-dashboard/index.tsx";

// ===== Registration for Producer =====
import Registration from "@pages/registration/registration-begin/index.tsx";
import DefaultPage from "@pages/users-related/producer/sign-up-form/default-page/index.tsx";
import ProducerPage1 from "@pages/users-related/producer/sign-up-form/page-1/index.tsx";
import ProducerPage2 from "@pages/users-related/producer/sign-up-form/page-2/index.tsx";
import ProducerPage3 from "@pages/users-related/producer/sign-up-form/page-3/index.tsx";
import ProducerPage4 from "@pages/users-related/producer/sign-up-form/page-4/index.tsx";
import ProducerCompleted from "@pages/users-related/producer/sign-up-form/page-completed/index.tsx";

// ====== Registration for Product ======
import IntakeDefault from "@pages/users-related/producer/product-intake/default-page/index.tsx";
import ProductPage1 from "@pages/users-related/producer/product-intake/page-1/index.tsx";
import ProductPage2 from "@pages/users-related/producer/product-intake/page-2/index.tsx";
import ProductPage3 from "@pages/users-related/producer/product-intake/page-3/index.tsx";
import ProductPage4 from "@pages/users-related/producer/product-intake/page-4/index.tsx";
import ProductCompleted from "@pages/users-related/producer/product-intake/page-completed/index.tsx";

// ====== Registration for Evaluator =====
import EvaluatorDefault from "@pages/users-related/evaluator/sign-up-form/default-page/index.tsx";
import EvaluatorPage1 from "@pages/users-related/evaluator/sign-up-form/page-1/index.tsx";
import EvaluatorPage2 from "@pages/users-related/evaluator/sign-up-form/page-2/index.tsx";
import EvaluatorPage3 from "@pages/users-related/evaluator/sign-up-form/page-3/index.tsx";
import EvaluatorPage4 from "@pages/users-related/evaluator/sign-up-form/page-4/index.tsx";
import EvaluatorCompleted from "@pages/users-related/evaluator/sign-up-form/page-completed/index.tsx";

// ====== Product Evaluation ======
import EvaluationDefault from "@pages/users-related/evaluator/product-evaluation/default-page/index.tsx";
import EvaluationPage1 from "@pages/users-related/evaluator/product-evaluation/page-1/index.tsx";
import EvaluationPage2 from "@pages/users-related/evaluator/product-evaluation/page-2/index.tsx";
import EvaluationPage3 from "@pages/users-related/evaluator/product-evaluation/page-3/index.tsx";
import EvaluationPage4 from "@pages/users-related/evaluator/product-evaluation/page-4/index.tsx";
import EvaluationCompleted from "@pages/users-related/evaluator/product-evaluation/page-completed/index.tsx";

// import Navigation menu for Administrator Dashboard
import AdministratorNav from "@components/navbar/administrator-dashboard/index.tsx";

// import Navigation menu for Producer Dashboard
// ================ if the producer is not paid =================
import ProducerUnpaid from "@components/navbar/producer-approved/index.tsx";
// ================ if the producer has been paid ===============
import ProducerNav from "@components/navbar/producer-dashboard/index.tsx";
import ProducerPricing from "@pages/users-related/producer/pricing/producer/index.tsx";
import PricingOverview from "@pages/users-related/producer/pricing/overview/index.tsx";
import ProducerMessages from "@pages/dashboard-common/messages/producer/index.tsx";
import ProducerSupport from "@pages/dashboard-common/help/FAQ/producer/index.tsx";
import ProducerProfile from "@pages/dashboard-common/profile/producer-profile/index.tsx";

// import Navigation menu for Evaluator Dashboard
import EvaluatorNav from "@components/navbar/evaluator-dashboard/index.tsx";
import Calendar from "@pages/users-related/evaluator/calendar/index.tsx";
import PaidEvaluator from "@pages/users-related/evaluator/payment-history/index.tsx";
import EvaluatorMessage from "@pages/dashboard-common/messages/evaluator/index.tsx";
import EvaluatorSupport from "@pages/dashboard-common/help/FAQ/evaluator/index.tsx";
import EvaluatorProfile from "@pages/dashboard-common/profile/evaluator-profile/index.tsx";
import EvaluatorNotification from "@pages/users-related/evaluator/notification/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContextProvider>
        <App />
      </UserContextProvider>
    ),
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/how-it-works", element: <HowItWorks /> },
      { path: "/pricing", element: <PricingOverview /> },
      // Registration
      { path: "/registration", element: <Registration /> },
      {
        path: "/admin",
        element: (
          <ProductsContextProvider>
            <div className="flex h-screen">
              <AdministratorNav />
              <div className="flex-1">
                <AdminDashboard />
              </div>
            </div>
          </ProductsContextProvider>
        ),
      },
      // ================================
      // Producer Dashboard from this point
      {
        path: "/producer-approved",
        element: (
          <ProductsContextProvider>
            <div className="flex h-screen">
              <UserContextProvider>
                <ProducerUnpaid />
              </UserContextProvider>
              <div className="flex-1 overflow-y-scroll">
                <ProducerApproved />
              </div>
            </div>
          </ProductsContextProvider>
        ),
      },
      {
        path: "/producer",
        element: (
          <ProductsContextProvider>
            <div className="flex h-screen">
              <UserContextProvider>
                <ProducerNav />
              </UserContextProvider>
              <div className="flex-1 overflow-y-scroll">
                <ProducerDashboard />
              </div>
            </div>
          </ProductsContextProvider>
        ),
      },
      {
        path: "/product-default",
        element: (
          <div className="flex h-screen">
            <ProducerNav />
            <div className="flex-1 overflow-y-scroll">
              <IntakeDefault />
            </div>
          </div>
        ),
      },
      {
        path: "/product-intake-1",
        element: (
          <div className="flex h-screen">
            <ProducerNav />
            <div className="flex-1 overflow-y-scroll">
              <ProductPage1 />
            </div>
          </div>
        ),
      },
      {
        path: "/product-intake-2",
        element: (
          <div className="flex h-screen">
            <ProducerNav />
            <div className="flex-1 overflow-y-scroll">
              <ProductPage2 />
            </div>
          </div>
        ),
      },
      {
        path: "/product-intake-3",
        element: (
          <div className="flex h-screen">
            <ProducerNav />
            <div className="flex-1 overflow-y-scroll">
              <ProductPage3 />{" "}
            </div>
          </div>
        ),
      },
      {
        path: "/product-intake-4",
        element: (
          <div className="flex h-screen">
            <ProducerNav />
            <div className="flex-1 overflow-y-scroll">
              <ProductPage4 />
            </div>
          </div>
        ),
      },
      {
        path: "/product-completed",
        element: (
          <div className="flex h-screen">
            <ProducerNav />
            <div className="flex-1 overflow-y-scroll">
              <ProductCompleted />
            </div>
          </div>
        ),
      },
      {
        path: "/producer-pricing",
        element: (
          <div className="flex h-screen">
            <ProducerNav />
            <div className="flex-1">
              <ProducerPricing />
            </div>
          </div>
        ),
      },
      {
        path: "/producer-message",
        element: (
          <div className="flex h-screen">
            <ProducerNav />
            <div className="flex-1 overflow-y-scroll">
              <ProducerMessages />
            </div>
          </div>
        ),
      },
      {
        path: "/producer-help",
        element: (
          <div className="flex h-screen">
            <ProducerNav />
            <div className="flex-1 overflow-y-scroll">
              <ProducerSupport />
            </div>
          </div>
        ),
      },
      {
        path: "/producer-profile",
        element: (
          <div className="flex h-screen">
            <ProducerNav />
            <div className="flex-1 overflow-y-scroll">
              <ProducerProfile />
            </div>
          </div>
        ),
      },
      // =================================
      // Evaluator Dashboard from this point
      {
        path: "/evaluator",
        element: (
          <ProductsContextProvider>
            <div className="flex h-screen">
              <EvaluatorNav />
              <div className="flex-1 overflow-y-scroll">
                <EvaluatorDashboard />
              </div>
            </div>
          </ProductsContextProvider>
        ),
      },
      {
        path: "/evaluation-default",
        element: (
          <div className="flex h-screen">
            <EvaluatorNav />
            <div className="flex-1 overflow-y-scroll">
              <EvaluationDefault />
            </div>
          </div>
        ),
      },
      {
        path: "/evaluation-page-1",
        element: (
          <div className="flex h-screen">
            <EvaluatorNav />
            <div className="flex-1 overflow-y-scroll">
              <EvaluationPage1 />
            </div>
          </div>
        ),
      },
      {
        path: "/evaluation-page-2",
        element: (
          <div className="flex h-screen">
            <EvaluatorNav />
            <div className="flex-1 overflow-y-scroll">
              <EvaluationPage2 />
            </div>
          </div>
        ),
      },
      {
        path: "/evaluation-page-3",
        element: (
          <div className="flex h-screen">
            <EvaluatorNav />
            <div className="flex-1 overflow-y-scroll">
              <EvaluationPage3 />
            </div>
          </div>
        ),
      },
      {
        path: "/evaluation-page-4",
        element: (
          <div className="flex h-screen">
            <EvaluatorNav />
            <div className="flex-1 overflow-y-scroll">
              <EvaluationPage4 />
            </div>
          </div>
        ),
      },
      {
        path: "/evaluation-completed",
        element: (
          <div className="flex h-screen">
            <EvaluatorNav />
            <div className="flex-1 overflow-y-scroll">
              <EvaluationCompleted />
            </div>
          </div>
        ),
      },
      {
        path: "/calendar",
        element: (
          <div className="flex h-screen">
            <EvaluatorNav />
            <div className="flex-1 overflow-y-scroll">
              <Calendar />
              {/* for availabilities */}
            </div>
          </div>
        ),
      },
      {
        path: "/evaluator-payment",
        element: (
          <div className="flex h-screen">
            <EvaluatorNav />
            <div className="flex-1 overflow-y-scroll">
              <PaidEvaluator />
              {/* for payment history */}
            </div>
          </div>
        ),
      },
      {
        path: "/evaluator-notification",
        element: (
          <div className="flex h-screen">
            <EvaluatorNav />
            <div className="flex-1 overflow-y-scroll">
              <EvaluatorNotification />
              {/* for notification */}
            </div>
          </div>
        ),
      },
      {
        path: "/evaluator-message",
        element: (
          <div className="flex h-screen">
            <EvaluatorNav />
            <div className="flex-1 overflow-y-scroll">
              <EvaluatorMessage />
            </div>
          </div>
        ),
      },
      {
        path: "/evaluator-help",
        element: (
          <div className="flex h-screen">
            <EvaluatorNav />
            <div className="flex-1 overflow-y-scroll">
              <EvaluatorSupport />
            </div>
          </div>
        ),
      },
      {
        path: "/evaluator-profile",
        element: (
          <div className="flex h-screen">
            <EvaluatorNav />
            <div className="flex-1 overflow-y-scroll">
              <EvaluatorProfile />
            </div>
          </div>
        ),
      },
      // --------------------------------------------------
      // Original version below
      // {
      //   path: "/evaluator",
      //   element: (
      //     <ProductsContextProvider>
      //       <EvaluatorDashboard />
      //     </ProductsContextProvider>
      //   ),
      // },
      // { path: "/evaluation-default", element: <EvaluationDefault /> },
      // { path: "/evaluation-page-1", element: <EvaluationPage1 /> },
      // { path: "/evaluation-page-2", element: <EvaluationPage2 /> },
      // { path: "/evaluation-page-3", element: <EvaluationPage3 /> },
      // { path: "/evaluation-page-4", element: <EvaluationPage4 /> },
      // { path: "/evaluation-completed", element: <EvaluationCompleted /> },
      // =================================
      // == Producer Registration
      { path: "/producer-default", element: <DefaultPage /> },
      { path: "/producer-page-1", element: <ProducerPage1 /> },
      { path: "/producer-page-2", element: <ProducerPage2 /> },
      { path: "/producer-page-3", element: <ProducerPage3 /> },
      { path: "/producer-page-4", element: <ProducerPage4 /> },
      { path: "/producer-completed", element: <ProducerCompleted /> },
      // == Evaluator Registration
      { path: "/evaluator-default", element: <EvaluatorDefault /> },
      { path: "/evaluator-page-1", element: <EvaluatorPage1 /> },
      { path: "/evaluator-page-2", element: <EvaluatorPage2 /> },
      { path: "/evaluator-page-3", element: <EvaluatorPage3 /> },
      { path: "/evaluator-page-4", element: <EvaluatorPage4 /> },
      { path: "/evaluator-completed", element: <EvaluatorCompleted /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

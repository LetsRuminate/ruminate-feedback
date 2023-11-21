import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import UserContextProvider from "./contexts/UserContext.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// List of pages
import NotFound from "@pages/404/index.tsx";
import Home from "@pages/home/index.tsx";
import Login from "@pages/login/index.tsx";
import AboutUs from "@pages/about-us/index.tsx";
import HowItWorks from "@pages/how-it-works/index.tsx";
import Price from "@pages/pricing/index.tsx";

// Detail page for Members
import AdminDashboard from "@pages/admin/admin-dashboard/index.tsx";
import ProducerDashboard from "@pages/producer/producer-dashboard/index.tsx";
import EvaluatorDashboard from "@pages/evaluator/evaluator-dashboard/index.tsx";
// ===== Registration for Producer =====
import Registration from "@pages/registration/registration-begin/index.tsx";
import DefaultPage from "@pages/producer/sign-up-form/default-page/index.tsx";
import ProducerPage1 from "@pages/producer/sign-up-form/page-1/index.tsx";
import ProducerPage2 from "@pages/producer/sign-up-form/page-2/index.tsx";
import ProducerPage3 from "@pages/producer/sign-up-form/page-3/index.tsx";
import ProducerPage4 from "@pages/producer/sign-up-form/page-4/index.tsx";
import ProducerCompleted from "@pages/producer/sign-up-form/page-completed/index.tsx";
// ====== Registration for Evaluator ===== 
import EvaluatorDefault from "@pages/evaluator/sign-up-form/default-page/index.tsx";
import EvaluatorPage1 from "@pages/evaluator/sign-up-form/page-1/index.tsx";
import EvaluatorPage2 from "@pages/evaluator/sign-up-form/page-2/index.tsx";
import EvaluatorPage3 from "@pages/evaluator/sign-up-form/page-3/index.tsx";
import EvaluatorPage4 from "@pages/evaluator/sign-up-form/page-4/index.tsx";
import EvaluatorCompleted from "@pages/evaluator/sign-up-form/page-completed/index.tsx";
// ===== Registration Completed ======
import ThankYou from "@pages/registration/registration-complete/index.tsx";


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
      { path: "/pricing", element: <Price /> },
      { path: "/admin", element: <AdminDashboard /> },
      { path: "/producer", element: <ProducerDashboard /> },
      { path: "/evaluator", element: <EvaluatorDashboard /> },
      // Registration
      { path: '/registration', element: <Registration/>},
      // == Producer Registration
      { path: '/producer-default', element: <DefaultPage/>},
      { path: '/producer-page-1', element: <ProducerPage1/>},
      { path: '/producer-page-2', element: <ProducerPage2/>},
      { path: '/producer-page-3', element: <ProducerPage3/>},
      { path: '/producer-page-4', element: <ProducerPage4/>},
      { path: '/producer-completed', element: <ProducerCompleted/>},
      // == Evaluator Registration
      { path: '/evaluator-default', element: <EvaluatorDefault/>},
      { path: '/evaluator-page-1', element: <EvaluatorPage1/>},
      { path: '/evaluator-page-2', element: <EvaluatorPage2/>},
      { path: '/evaluator-page-3', element: <EvaluatorPage3/>},
      { path: '/evaluator-page-4', element: <EvaluatorPage4/>},
      { path: '/evaluator-completed', element: <EvaluatorCompleted/>},
      // Registration Completed
      { path: '/thank-you', element: <ThankYou/>}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

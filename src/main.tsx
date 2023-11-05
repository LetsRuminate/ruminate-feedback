import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// List of pages
import NotFound from "@pages/404/index.tsx";
import Home from "@pages/home/index.tsx";
import AdminDashboard from "@pages/admin/admin-dashboard/index.tsx";
import ProducerDashboard from "@pages/producer/producer-dashboard/index.tsx";
import EvaluatorDashboard from "@pages/evaluator/evaluator-dashboard/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/admin", element: <AdminDashboard /> },
      { path: "/producer", element: <ProducerDashboard /> },
      { path: "/evaluator", element: <EvaluatorDashboard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

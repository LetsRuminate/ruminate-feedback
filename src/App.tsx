// import Navbar2 from "@components/navbar/dashboard";
import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navbar/default";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const noFooter = [
    // Producer pages list
    "/producer",
    "/product-default",
    "/product-intake-1",
    "/product-intake-2",
    "/product-intake-3",
    "/product-intake-4",
    "/product-completed",
    // Evaluator pages list
    "/evaluator",
    // "/evaluation-default",
    // "/evaluation-page-1",
    // "/evaluation-page-2",
    // "/evaluation-page-3",
    // "/evaluation-page-4",
    // "/evaluation-completed",
    // Administrator pages list
    "/admin",
  ];
  const hideFooter = noFooter.includes(location.pathname);

  const newNav = [
    // Producer pages list
    "/producer",
    "/product-default",
    "/product-intake-1",
    "/product-intake-2",
    "/product-intake-3",
    "/product-intake-4",
    "/product-completed",
    // Evaluator pages list
    "/evaluator",
    // "/evaluation-default",
    // "/evaluation-page-1",
    // "/evaluation-page-2",
    // "/evaluation-page-3",
    // "/evaluation-page-4",
    // "/evaluation-completed",
    // Admin pages list
    "/admin",
  ];
  const newNav2 = newNav.includes(location.pathname);
  return (
    <>
      {newNav2 ? <></> : <NavBar />}
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;

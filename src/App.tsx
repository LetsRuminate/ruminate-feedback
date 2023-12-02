// import Navbar2 from "@components/navbar/dashboard";
import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navbar/default";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const noFooter = [
    "/producer",
    "/product-default",
    "/product-intake-1",
    "/product-intake-2",
    "/product-intake-3",
    "/product-intake-4",
    "/product-completed",
    "/evaluator",
    // "/evaluation-default",
    // "/evaluation-page-1",
    // "/evaluation-page-2",
    // "/evaluation-page-3",
    // "/evaluation-page-4",
    // "/evaluation-completed",
  ];
  const hideFooter = noFooter.includes(location.pathname);

  const newNav = [
    "/producer",
    "/product-default",
    "/product-intake-1",
    "/product-intake-2",
    "/product-intake-3",
    "/product-intake-4",
    "/product-completed",
    "/evaluator",
    // "/evaluation-default",
    // "/evaluation-page-1",
    // "/evaluation-page-2",
    // "/evaluation-page-3",
    // "/evaluation-page-4",
    // "/evaluation-completed",
  ];
  const NavFooter2 = newNav.includes(location.pathname);
  return (
    <>
      {NavFooter2 ? <></> : <NavBar />}
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;

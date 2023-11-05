import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

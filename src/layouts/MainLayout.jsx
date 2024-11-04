import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBarFooter/NavBar";
import Footer from "../components/shared/NavBarFooter/Footer";

// mx-3  sm:mx-10 lg:mx-18
export default function MainLayout() {
  return (
    <div>
      <div className=" ">
        <NavBar />

        <div className="min-h-screen ">
          <Outlet />
        </div>
      </div>
      {/* <Footer /> */}
      <Footer />
    </div>
  );
}

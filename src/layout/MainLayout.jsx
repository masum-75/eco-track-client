import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => (
  <div>
   <NavBar></NavBar>
    <main className="mt-4">
      <Outlet />
    </main>
    <Footer />
    <Toaster />
  </div>
);

export default MainLayout;

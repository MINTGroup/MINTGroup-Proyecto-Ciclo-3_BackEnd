import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

const AdminLayout = ({children}) => {
    return(
      <div>
          <Navbar/>
          <main>{children}</main>
          <Footer/>
      </div>
    );
}
export default AdminLayout;
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AuthLayout = ({children}) =>{
    return (
        <div>
            <main>{children}</main>
        </div>
    );
}
export default AuthLayout;
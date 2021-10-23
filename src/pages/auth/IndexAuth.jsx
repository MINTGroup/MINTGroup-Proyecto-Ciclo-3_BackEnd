import React from "react";
import {useDarkMode} from "../../context/darkMode";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const IndexAuth = () =>{
    const {darkMode}=useDarkMode();
    return (
        <div className="row">
            <Header/>
            <main>
                <div className="vh-100">
                    Landing Page (No responsive)
                </div>
            </main>
            <Footer/>
        </div>
    );
}
export default IndexAuth;
import React from "react";
import {useDarkMode} from "../../context/darkMode";

const Index = () =>{
    const {darkMode}=useDarkMode();
    return (
        <div>
            pagina index admin
        </div>
    );
}
export default Index;
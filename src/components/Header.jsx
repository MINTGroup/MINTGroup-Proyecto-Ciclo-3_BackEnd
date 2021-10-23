import React from "react";
import { Link } from "react-router-dom";
import logonofondo  from "../assets/img/LOGO_MINT(no fondo).png";


const Header = () =>{
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light gb-cuaternary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">
                        <img className="brand-logo logo" src={logonofondo}  width="65px" alt="LOGO MINT"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/*TODO: Buscar una forma de ocultar estos dos elementos para el public layout y que se vean únicamente cuando el usuarioinicia sesión*/}
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/login">Log In</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">Seller Actions</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/EditorVentas">Admin Sells</Link></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><Link className="dropdown-item" to="#">Log out</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Admin Actions
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/admin/products" >Admin Products</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/vendedor">Admin Sells</Link></li>
                                    <li><Link className="dropdown-item" to="GestorVendedores">Admin Sellers</Link></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><Link className="dropdown-item" href="#">Log out</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Header;
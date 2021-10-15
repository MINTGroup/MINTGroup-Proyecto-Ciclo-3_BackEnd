import React from "react";
import {useDarkMode} from "../context/darkMode";
import {Link} from "react-router-dom";

const Navbar = () => {
    const {darkMode, setDarkMode} = useDarkMode()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">MINT</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                    <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                        <li className="nav-item">
                            <Link to='/admin'>
                            <input type="radio" className="btn-check" name="btnradio" id="Home" autoComplete="off"
                                   />
                                <label className="btn btn-outline-secondary" htmlFor="Home">
                                    <i className="fas fa-home"></i>
                                </label>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/vendedor'>
                                <input type="radio" className="btn-check" name="btnradio" id="Seller" autoComplete="off"
                                />
                                <label className="btn btn-outline-secondary" htmlFor="Seller">
                                    <i className="fas fa-cash-register"></i>
                                </label>
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link to='/admin/products'>
                            <input type="radio" className="btn-check" name="btnradio" id="Products" autoComplete="off"
                                   />
                            <label className="btn btn-outline-secondary" htmlFor="Products">
                                <i className="fas fa-shopping-basket"></i>
                            </label>
                            </Link>
                        </li>
                    </div>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-secondary" data-bs-toggle="dropdown"
                                    aria-expanded="false" >
                                <i className="fas fa-caret-down"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" >
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
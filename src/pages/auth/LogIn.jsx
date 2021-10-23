import React from "react";
import {Link} from "react-router-dom";
import cover from "../../assets/img/Cover.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const LogIn = () =>{
    return(
        <div>
            <main>
                <div className="row">
                    <div className="col-md-6 order-md-1">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <h3 className="p-30">Sign In to MINT</h3>
                                {/*<p>Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>*/}
                                <form>
                                    <div className="mb-4">
                                        <label htmlFor="Email" className="form-label"></label>
                                        <input className="rounded-0 border-0 border-bottom form-control flex-fill" type="text"
                                               className="form-control" id="Email" placeholder="Email"/>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="Password" className="form-label"></label>
                                        <input className="rounded-0 border-0 border-bottom form-control flex-fill"
                                               type="password" className="form-control" id="Password" placeholder="Password"/>
                                    </div>
                                    <div className="row row mb-3">
                                        <div className="col">
                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="check1"/>
                                                    <label className="form-check-label" htmlFor="check1">
                                                        Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col center-block text-end">
                                            <a href="#" className="stretched-link text-muted" style={{position: "relative"}}>Forgot
                                                Password</a>
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2 mb-4">
                                        <button type="submit" className="btn btn-primary btn-logreg border-0">Log In</button>
                                    </div>
                                </form>
                                <div className="mb-5">
                                    <Link to="/registro" className="stretched-link text-muted" style={{position: "relative"}}>Or
                                        Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-2">
                        <img src={cover} width="100%"/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
export default LogIn;
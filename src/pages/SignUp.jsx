import React from "react";

const SignUp = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 order-md-1">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h3>Sign Up to MINT</h3>
                            <p>Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                            <form>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="Name" className="form-label"></label>
                                        <input className="rounded-0 border-0 border-bottom form-control flex-fill"
                                               type="text" gitclass="form-control" id="Name" placeholder="Name"/>
                                    </div>

                                    <div className="col">
                                        <label htmlFor="Last_name" className="form-label"></label>
                                        <input className="rounded-0 border-0 border-bottom form-control flex-fill"
                                               type="text" className="form-control" id="Last_name"
                                               placeholder="Last name"/>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Email" className="form-label"></label>
                                    <input className="rounded-0 border-0 border-bottom form-control flex-fill"
                                           type="text" className="form-control" id="Email" placeholder="Email"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Password" className="form-label"></label>
                                    <input className="rounded-0 border-0 border-bottom form-control flex-fill"
                                           type="password" className="form-control" id="Password"
                                           placeholder="Password"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Re-Password" className="form-label"></label>
                                    <input className="rounded-0 border-0 border-bottom form-control flex-fill "
                                           type="password" className="form-control" id="Re-Password"
                                           placeholder="Re-type Password"/>
                                </div>
                                <div className="mb-4 form-check">
                                    <input type="checkbox" className="form-check-input" id="check1"/>
                                        <label className="form-check-label" htmlFor="check1">
                                            Creating an account means you're okay with our Terms and Conditions and our
                                            Privacy Policy.</label>
                                </div>
                                <div className="d-grid gap-2 mb-4">
                                    <button type="submit" className="btn btn-primary btn-logreg border-0">Register
                                    </button>
                                </div>
                            </form>
                            <div className="mb-5">
                                <a href="LogIn.html" className="stretched-link text-muted" style={{position: "relative"}}>Or
                                    Log In</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 order-md-2">
                    <img src="../src/assets/img/Cover.svg " width="100%"/>
                </div>
            </div>
        </div>
    );
}
export default SignUp;
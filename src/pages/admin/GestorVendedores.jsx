import React from "react";

const GestorVendedores = () => {
    return (
        <div className="container-xxl">
            <div className="fondo p-4">
                <div className="row mb-2">
                    <div className="col-12 col-lg-4 mb-4">
                        <div className="card text-white bg-primary">
                            <div className="row mb-2">
                                <div className="col-6">
                                    <div className="card-body">
                                        <button type="button" className="btn btn-outline-light btn-sm"
                                                style={{boxShadow: "none"}}>
                                            <i className="fas fa-box"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <div className="card-body d-flex justify-content-end">
                                        <div className="btn-group" role="group"
                                             aria-label="Basic radio toggle button group">
                                            <input type="radio" className="btn-check" name="btnradio1" id="btnradio1"
                                                   autoComplete="off" checked/>
                                            <label className="btn btn-outline-light btn-sm" htmlFor="btnradio1"
                                                   style={{boxShadow: "none"}} onClick="changeImage1()">Year</label>

                                            <input type="radio" className="btn-check" name="btnradio1"
                                                   id="btnradio2"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-light btn-sm" htmlFor="btnradio2"
                                                   style={{boxShadow: "none"}}
                                                   onClick="changeImage1()">Month</label>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-7">
                                    <div className="card-body">
                                        <h2 id="demo2">
                                            $6942.0 <i className="fas fa-arrow-circle-up"></i>
                                        </h2>
                                        <p className="card-text" style={{color: 'rgba(255,255,255,0.75)'}}>
                                            Total Earnings
                                        </p>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="card-body d-flex justify-content-end" style={{border: "none"}}>
                                        <div className="">
                                            <img id="myImage1" src="../src/assets/img/micrographic.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-lg-4 mb-4">
                        <div className="card text-white bg-secondary">

                            <div className="row mb-2">
                                <div className="col-6">
                                    <div className="card-body">
                                        <button type="button" className="btn btn-outline-light btn-sm"
                                                style={{boxShadow: "none"}}>
                                            <i className="fas fa-shopping-bag"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <div className="card-body d-flex justify-content-end">
                                        <div className="btn-group" role="group"
                                             aria-label="Basic radio toggle button group">
                                            <input type="radio" className="btn-check" name="btnradio1" id="btnradio01"
                                                   autoComplete="off" checked/>
                                            <label className="btn btn-outline-light btn-sm" htmlFor="btnradio01"
                                                   style={{boxShadow: "none"}} onClick="changeImage()">Year</label>

                                            <input type="radio" className="btn-check" name="btnradio1"
                                                   id="btnradio02"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-light btn-sm" htmlFor="btnradio02"
                                                   style={{boxShadow: "none"}}
                                                   onClick="changeImage()">Month</label>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-7">
                                    <div className="card-body">
                                        <h2 id="demo1">
                                            420 <i className="fas fa-arrow-circle-down"></i>
                                        </h2>
                                        <p className="card-text" style={{color: 'rgba(255,255,255,0.75)'}}>
                                            Total Orders
                                        </p>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="card-body d-flex justify-content-end" style={{boxShadow: "none"}}>
                                        <div className="">
                                            <img id="myImage" src="../src/assets/img/micrographic.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-lg-4 mb-4">
                        <div className="row mb-4">
                            <div className="col-lg-12">
                                <div className="card text-white bg-secondary">
                                    <div className="card-body">
                                        <a href="#Sales List">
                                            <button type="button" className="btn btn-outline-light btn-sm"
                                                    style={{boxShadow: "none"}}>
                                                <i className="fas fa-shipping-fast"></i> Successful deliveries
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-lg-12">
                                <div className="card bg-light text-dark">
                                    <div className="card-body">
                                        <a href="#Product List">
                                            <button type="button" className="btn btn-outline-dark btn-sm"
                                                    style={{boxShadow: "none"}}>
                                                <i className="fas fa-cart-arrow-down"></i> Orders in stock
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>Espacio para componente de tablas</div>
            </div>
        </div>
    );
}
export default GestorVendedores;
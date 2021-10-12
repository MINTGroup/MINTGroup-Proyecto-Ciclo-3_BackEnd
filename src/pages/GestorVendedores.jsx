import React from "react";

const GestorVendedores = () => {
    return(
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

                <a name="Product List"></a>
                <div className="row mb-4 mt-2">
                    <div className="col-12">
                        <div className="card p-3 bg-light text-dark">

                            <div className="card-header bg-light">
                                <div className="row">
                                    <div className="col-12 col-lg-9">
                                        <h5><i className="fas fa-shopping-cart"></i> Product List</h5>
                                    </div>
                                    <div className="col-7 col-lg-3 p-0 text-end">
                                        <a className="btn btn-outline-danger btn-sm rounded-circle border-0" href="#"
                                           type="submit" style={{boxShadow: "none"}}>
                                            <i className="far fa-trash-alt"></i>
                                        </a>
                                        <a className="btn btn-outline-info btn-sm rounded-circle border-0" href="#"
                                           type="submit" style={{boxShadow: "none"}}>
                                            <i className="fas fa-print"></i>
                                        </a>
                                        <a className="btn btn-outline-warning btn-sm rounded-circle border-0" href="#"
                                           type="submit" style={{boxShadow: "none"}}>
                                            <i className="fas fa-pen"></i>
                                        </a>
                                        <a className="btn btn-outline-secondary btn-sm rounded-circle"
                                           href="Editor_productos.html" type="submit" style={{boxShadow: "none"}}>
                                            <i className="fas fa-plus"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="row">
                                    <div className="table-responsive-lg">
                                        <table id="data-table-I" className="display nowrap" style={{width:"100%"}}>
                                            <caption>
                                                <p className="text-muted">Product List</p>
                                            </caption>
                                            <thead>
                                            <tr>
                                                <th className="text-center">
                                                    <button
                                                        style={{border: "none", background: "transparent", fontSize: "14px"}}
                                                        id="MyTableCheckAllButton1">
                                                        <i className="far fa-square"></i>
                                                    </button>
                                                </th>
                                                <th>Product ID</th>
                                                <th>Product Name</th>
                                                <th>Brand</th>
                                                <th>Model</th>
                                                <th>Price</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td></td>
                                                <td>Tiger Nixon</td>
                                                <td>System Architect</td>
                                                <td>Edinburgh</td>
                                                <td>61</td>
                                                <td>$320,800</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Garrett Winters</td>
                                                <td>Accountant</td>
                                                <td>Tokyo</td>
                                                <td>63</td>
                                                <td>$170,750</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Ashton Cox</td>
                                                <td>Junior Technical Author</td>
                                                <td>San Francisco</td>
                                                <td>66</td>
                                                <td>$86,000</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Cedric Kelly</td>
                                                <td>Senior Javascript Developer</td>
                                                <td>Edinburgh</td>
                                                <td>22</td>
                                                <td>$433,060</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Airi Satou</td>
                                                <td>Accountant</td>
                                                <td>Tokyo</td>
                                                <td>33</td>
                                                <td>$162,700</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Brielle Williamson</td>
                                                <td>Integration Specialist</td>
                                                <td>New York</td>
                                                <td>61</td>
                                                <td>$372,000</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Herrod Chandler</td>
                                                <td>Sales Assistant</td>
                                                <td>San Francisco</td>
                                                <td>59</td>
                                                <td>$137,500</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Rhona Davidson</td>
                                                <td>Integration Specialist</td>
                                                <td>Tokyo</td>
                                                <td>55</td>
                                                <td>$327,900</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Colleen Hurst</td>
                                                <td>Javascript Developer</td>
                                                <td>San Francisco</td>
                                                <td>39</td>
                                                <td>$205,500</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Sonya Frost</td>
                                                <td>Software Engineer</td>
                                                <td>Edinburgh</td>
                                                <td>23</td>
                                                <td>$103,600</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Jena Gaines</td>
                                                <td>Office Manager</td>
                                                <td>London</td>
                                                <td>30</td>
                                                <td>$90,560</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Quinn Flynn</td>
                                                <td>Support Lead</td>
                                                <td>Edinburgh</td>
                                                <td>22</td>
                                                <td>$342,000</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Charde Marshall</td>
                                                <td>Regional Director</td>
                                                <td>San Francisco</td>
                                                <td>36</td>
                                                <td>$470,600</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Haley Kennedy</td>
                                                <td>Senior Marketing Designer</td>
                                                <td>London</td>
                                                <td>43</td>
                                                <td>$313,500</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Gloria Little</td>
                                                <td>Systems Administrator</td>
                                                <td>New York</td>
                                                <td>59</td>
                                                <td>$237,500</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Bradley Greer</td>
                                                <td>Software Engineer</td>
                                                <td>London</td>
                                                <td>41</td>
                                                <td>$132,000</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Dai Rios</td>
                                                <td>Personnel Lead</td>
                                                <td>Edinburgh</td>
                                                <td>35</td>
                                                <td>$217,500</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Jenette Caldwell</td>
                                                <td>Development Lead</td>
                                                <td>New York</td>
                                                <td>30</td>
                                                <td>$345,000</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Yuri Berry</td>
                                                <td>Chief Marketing Officer (CMO)</td>
                                                <td>New York</td>
                                                <td>40</td>
                                                <td>$675,000</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Caesar Vance</td>
                                                <td>Pre-Sales Support</td>
                                                <td>New York</td>
                                                <td>21</td>
                                                <td>$106,450</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Doris Wilder</td>
                                                <td>Sales Assistant</td>
                                                <td>Sydney</td>
                                                <td>23</td>
                                                <td>$85,600</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Angelica Ramos</td>
                                                <td>Chief Executive Officer (CEO)</td>
                                                <td>London</td>
                                                <td>47</td>
                                                <td>$1,200,000</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Gavin Joyce</td>
                                                <td>Developer</td>
                                                <td>Edinburgh</td>
                                                <td>42</td>
                                                <td>$92,575</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Jennifer Chang</td>
                                                <td>Regional Director</td>
                                                <td>Singapore</td>
                                                <td>28</td>
                                                <td>$357,650</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Brenden Wagner</td>
                                                <td>Software Engineer</td>
                                                <td>San Francisco</td>
                                                <td>28</td>
                                                <td>$206,850</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Fiona Green</td>
                                                <td>Chief Operating Officer (COO)</td>
                                                <td>San Francisco</td>
                                                <td>48</td>
                                                <td>$850,000</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a name="Sales List"></a>
                <div className="row mb-4 mt-2">
                    <div className="col-12">
                        <div className="card p-3 bg-light text-dark">

                            <div className="card-header bg-light">
                                <div className="row">
                                    <div className="col-12 col-lg-9">
                                        <h5><i className="fas fa-cash-register"></i> Sells List</h5>
                                    </div>
                                    <div className="col-7 col-lg-3 p-0 text-end">
                                        <a className="btn btn-outline-danger btn-sm rounded-circle border-0" href="#"
                                           type="submit" style={{boxShadow: "none"}}>
                                            <i className="far fa-trash-alt"></i>
                                        </a>
                                        <a className="btn btn-outline-info btn-sm rounded-circle border-0" href="#"
                                           type="submit" style={{boxShadow: "none"}}>
                                            <i className="fas fa-print"></i>
                                        </a>
                                        <a className="btn btn-outline-warning btn-sm rounded-circle border-0" href="#"
                                           type="submit" style={{boxShadow: "none"}}>
                                            <i className="fas fa-pen"></i>
                                        </a>
                                        <a className="btn btn-outline-secondary btn-sm rounded-circle"
                                           href="Editor_productos.html" type="submit" style={{boxShadow: "none"}}>
                                            <i className="fas fa-plus"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive-lg">
                                    <table id="data-table-II" className="display" style={{width:"100%"}}>
                                        <caption>
                                            <p className="text-muted">Sales List</p>
                                        </caption>
                                        <thead>
                                        <tr>
                                            <th className="text-center">
                                                <button style={{border: "none", background: "transparent", fontSize: "14px"}}
                                                        id="MyTableCheckAllButton2">
                                                    <i className="far fa-square"></i>
                                                </button>
                                            </th>
                                            <th>Seller ID</th>
                                            <th>Sell Date</th>
                                            <th>QTY</th>
                                            <th>Product ID</th>
                                            <th>Product Name</th>
                                            <th>Brand</th>
                                            <th>Model</th>
                                            <th>Price</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td></td>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td>Edinburgh</td>
                                            <td>61</td>
                                            <td>$320,800</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Garrett Winters</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>63</td>
                                            <td>$170,750</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Ashton Cox</td>
                                            <td>Junior Technical Author</td>
                                            <td>San Francisco</td>
                                            <td>66</td>
                                            <td>$86,000</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Cedric Kelly</td>
                                            <td>Senior Javascript Developer</td>
                                            <td>Edinburgh</td>
                                            <td>22</td>
                                            <td>$433,060</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Airi Satou</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>33</td>
                                            <td>$162,700</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Brielle Williamson</td>
                                            <td>Integration Specialist</td>
                                            <td>New York</td>
                                            <td>61</td>
                                            <td>$372,000</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Herrod Chandler</td>
                                            <td>Sales Assistant</td>
                                            <td>San Francisco</td>
                                            <td>59</td>
                                            <td>$137,500</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Rhona Davidson</td>
                                            <td>Integration Specialist</td>
                                            <td>Tokyo</td>
                                            <td>55</td>
                                            <td>$327,900</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Colleen Hurst</td>
                                            <td>Javascript Developer</td>
                                            <td>San Francisco</td>
                                            <td>39</td>
                                            <td>$205,500</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Sonya Frost</td>
                                            <td>Software Engineer</td>
                                            <td>Edinburgh</td>
                                            <td>23</td>
                                            <td>$103,600</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Jena Gaines</td>
                                            <td>Office Manager</td>
                                            <td>London</td>
                                            <td>30</td>
                                            <td>$90,560</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Quinn Flynn</td>
                                            <td>Support Lead</td>
                                            <td>Edinburgh</td>
                                            <td>22</td>
                                            <td>$342,000</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Charde Marshall</td>
                                            <td>Regional Director</td>
                                            <td>San Francisco</td>
                                            <td>36</td>
                                            <td>$470,600</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Haley Kennedy</td>
                                            <td>Senior Marketing Designer</td>
                                            <td>London</td>
                                            <td>43</td>
                                            <td>$313,500</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Gloria Little</td>
                                            <td>Systems Administrator</td>
                                            <td>New York</td>
                                            <td>59</td>
                                            <td>$237,500</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Bradley Greer</td>
                                            <td>Software Engineer</td>
                                            <td>London</td>
                                            <td>41</td>
                                            <td>$132,000</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Dai Rios</td>
                                            <td>Personnel Lead</td>
                                            <td>Edinburgh</td>
                                            <td>35</td>
                                            <td>$217,500</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Jenette Caldwell</td>
                                            <td>Development Lead</td>
                                            <td>New York</td>
                                            <td>30</td>
                                            <td>$345,000</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Yuri Berry</td>
                                            <td>Chief Marketing Officer (CMO)</td>
                                            <td>New York</td>
                                            <td>40</td>
                                            <td>$675,000</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Caesar Vance</td>
                                            <td>Pre-Sales Support</td>
                                            <td>New York</td>
                                            <td>21</td>
                                            <td>$106,450</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Doris Wilder</td>
                                            <td>Sales Assistant</td>
                                            <td>Sydney</td>
                                            <td>23</td>
                                            <td>$85,600</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Angelica Ramos</td>
                                            <td>Chief Executive Officer (CEO)</td>
                                            <td>London</td>
                                            <td>47</td>
                                            <td>$1,200,000</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Gavin Joyce</td>
                                            <td>Developer</td>
                                            <td>Edinburgh</td>
                                            <td>42</td>
                                            <td>$92,575</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Jennifer Chang</td>
                                            <td>Regional Director</td>
                                            <td>Singapore</td>
                                            <td>28</td>
                                            <td>$357,650</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Brenden Wagner</td>
                                            <td>Software Engineer</td>
                                            <td>San Francisco</td>
                                            <td>28</td>
                                            <td>$206,850</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Fiona Green</td>
                                            <td>Chief Operating Officer (COO)</td>
                                            <td>San Francisco</td>
                                            <td>48</td>
                                            <td>$850,000</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                            <td>Sample Text</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GestorVendedores;
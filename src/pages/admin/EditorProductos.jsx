import React from "react";

const EditorProductos = () => {
    return(
        <div className="row justify-content-md-center mb-4 mt-4">
            <div className="col-md-5 rounded bgwhite px-5 py-3 ">
                <div className="text-center mb-3">
                    <img className="logo center" src="./assets/img/LOGO_MINT(no%20fondo).png" alt="LOGO" width="10%"/>
                </div>
                <div className="text-center mb-3">
                    <h3>Product Manager</h3>
                </div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="Product_id" className="form-label"></label>
                        <input className="rounded-0 border-0 border-bottom form-control flex-fill" type="text"
                               className="form-control" id="Product_id" placeholder="Product ID"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Product_Name" className="form-label"></label>
                        <input className="rounded-0 border-0 border-bottom form-control flex-fill" type="text"
                               className="form-control" id="Product_Name" placeholder="Product Name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Product_Brand" className="form-label"></label>
                        <input className="rounded-0 border-0 border-bottom form-control flex-fill " type="text"
                               className="form-control" id="Product_Brand" placeholder="Product Brand"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Model" className="form-label"></label>
                        <input className="rounded-0 border-0 border-bottom form-control flex-fill " type="text"
                               className="form-control" id="Model" placeholder="Model"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Date_added" className="form-label"></label>
                        <input className="rounded-0 border-0 border-bottom form-control flex-fill " type="text"
                               className="form-control" id="Date_added" placeholder="Date Added"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="Price" className="form-label"></label>
                        <input className="rounded-0 border-0 border-bottom form-control flex-fill " type="text"
                               className="form-control" id="Price" placeholder="Price"/>
                    </div>
                    <div className="input-group">
                        <input type="file" className="form-control" id="inputGroupFile04"
                               aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                            <button className="btn btn-outline-secondary" type="button"
                                    id="inputGroupFileAddon04">Upload
                            </button>
                    </div>
                    <div className="mb-4">
                        <p className="fs-6 text-muted">Images Only </p>
                    </div>
                    <div className="d-grid gap-2 mb-3">
                        <button type="submit" className="btn btn-primary btn-logreg border-0">Product Register</button>
                    </div>
                </form>
                <div className="mb-3">
                    <a href="GestorVendedores.html" className="stretched-link text-muted"
                       style={{position: "relative"}}>Back</a>
                </div>
            </div>
        </div>
    );
}
export default EditorProductos;
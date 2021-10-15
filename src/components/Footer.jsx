import React from "react";

const Footer = () =>{
    return(
        <footer className="bg-secondary text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i
                        className="fab fa-facebook-f"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i
                        className="fab fa-twitter"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i
                        className="fab fa-google"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i
                        className="fab fa-instagram"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i
                        className="fab fa-linkedin-in"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i
                        className="fab fa-github"></i></a>
                </section>
            </div>
            <div className="text-center p-3 bg-primary" style={{backgroundColor: 'rgba(0,0,0,.25)'}}>
                Developed by MINT
            </div>
        </footer>
    );
}
export default Footer;
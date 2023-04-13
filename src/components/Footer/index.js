
import React from "react"
import GitHublogo from "../../Assets/photos/footer/GitHublogo.png";


const Footer = () => {
    return (

        <footer className=" font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="footer">
                        <ul className="list-unstyled">
                            <a href="https://github.com/christian1512-FE"><img className="icon" src ={GitHublogo} alt="GitHubicon" /></a>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="footercontainer">
            <div className="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright: Christian Mendez
            </div>
            </section>
        </footer>

    );
};
export default Footer;
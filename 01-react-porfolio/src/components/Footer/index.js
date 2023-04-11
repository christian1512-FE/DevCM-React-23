
import React from "react"
// import GitHublogo from "../../images/GitHublogo.png";


const Footer = () => {
    return (

        <footer className=" font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <ul className="list-unstyled">
                            <li><a href="https://github.com/christian1512-FE">Github</a></li>
                            {/* <img className="icon" src ={GitHublogo} alt="github logo"></img> */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright: Christian Mendez
            </div>
        </footer>
    );
};
export default Footer;
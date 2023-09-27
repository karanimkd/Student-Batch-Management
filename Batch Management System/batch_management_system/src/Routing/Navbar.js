import React from "react";
import Logo from '../images/Logo.png';

export const Navbar = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="col-md-12 ">
                    <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: "black" }}>
                        <a href="#" className="navbar-brand">
                            <img src={Logo} alt="" height="35" />
                        </a>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto ">
                                <a href="https://wa.me/whatsappphonenumber/?text=Hello%20from%20my%20website">
                                    <i className='fa fa-whatsapp' style={{ textDecoration: "none", color: "white" }}>
                                        &nbsp; +9565656565
                                    </i>
                                </a>
                                &nbsp; &nbsp;
                                <a href="mailto:recipient@example.com?subject=Subject%20of%20email&body=Hello%20from%20my%20website">
                                    <i className='fa fa-envelope' style={{ textDecoration: "none", color: "white" }}>
                                        &nbsp; ciit@gmail.com
                                    </i>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}


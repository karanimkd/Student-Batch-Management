import React from 'react';
import Logo from '../images/Logo.png'
import Main from '../images/main.jpg'
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { LoginComponent } from './LoginComponent';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

export const IndexComponent = () => {
    return (
        <div >
            <div className="conntaier-fluid index">
                <Navbar />
                <div className="container-fluid ">
                    <div className="col-md-12">
                        <div className="col-md-4 m-auto text-light">
                            <h2 style={{ fontFamily: "Lora", letterSpacing: "5px", fontWeight: "700", fontSize: "48px" }}>Welcome To Portal</h2>
                            <p className='text-center' style={{ fontSize: "20px" }}>Skills are the catalyst to your career growth</p>
                            <div className='text-center'>
                                {/* <input className='btn btn-primary btn-lg' type="button" value="Login" /> */}
                                {/* <Link to='/'>Login</Link> */}
                                <button className='btn btn-primary text-light'>
                                    <Link to='/login' style={{ textDecoration: "none", color: "White" }}>Login</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid  mt-5">
                    <div className="col-md-12 text-center">
                        <h4></h4>
                        <img src={Main} alt="" />
                    </div>
                </div>
                {/* contact us */}
                <div className="container-fluid">
                    <div className="col-md-12 mt-5">
                        <div className="col-md-8 m-auto text-light">
                            <div className='text-center'>
                                <h2>Contact Us</h2>
                            </div>
                            <hr />
                            <div class="form-group  ">
                                <label for="exampleFormControlInput1" className='mb-3' >Email address :</label>
                                <input type="email" className="form-control text-light mb-3" id="exampleFormControlInput1" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1" className='mb-3' >Enter Your Message :</label>
                                <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="5" style={{ resize: "none" }}></textarea>
                            </div>
                            <div class="form-group">
                                <button className='btn btn-primary'>Send</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div >
    )
}
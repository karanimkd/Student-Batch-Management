import React, { useEffect } from "react";
import axios from "axios";
import Logo from './images/Logo.png'
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

export const StudentCommon = () => {
    const params = useParams();
    var navigate = useNavigate();
    useEffect(function () {
        if (!params.student_id) {
            navigate("/login");
        }
    }, []);
    return (
        <div>
            <div className="container-fluid">
                {/* <!--Main Navigation--> */}
                <header>
                    {/* <!-- Sidebar --> */}
                    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse " style={{ backgroundColor: "black", color: "white", overflowY: "scroll" }}>
                        <div class="position-sticky mt-4 mb-4" >
                            <div class="list-group list-group-flush  mx-3  " >
                                <h6 className="text-center section_name">Student Profile</h6>
                                <Link to="" className="list-group-item list-group-item-action py-3 ripple " style={{ backgroundColor: "black", color: "white", borderBottom: "none" }}>
                                    <i class="fa fa-address-card fa-fw me-3"></i><span>Profile</span>
                                </Link>
                            </div>

                            <div class="list-group list-group-flush  mx-3 mt-2 " >
                                <h6 className="text-center section_name">Batch Details</h6>
                                <Link to="trainer-batch" className="list-group-item list-group-item-action py-3 ripple " style={{ backgroundColor: "black", color: "white", borderBottom: "none" }}>
                                    <i class="fa fa-address-card fa-fw me-3"></i><span>Batch</span>
                                </Link>
                                <Link to="trainer-batch-Student" class="list-group-item list-group-item-action py-3 ripple" style={{ backgroundColor: "black", color: "white", borderBottom: "none" }}>
                                    <i class="fa fa-user fa-fw me-3"></i><span>Batch Student</span>
                                </Link>
                                <Link to="trainer-batch-schedule-attendance" class="list-group-item list-group-item-action py-3 ripple" style={{ backgroundColor: "black", color: "white", borderBottom: "none" }}
                                ><i class="fa fa-user fa-fw me-3"></i><span>Batch Schedule Attendace</span></Link>
                            </div>


                        </div>
                    </nav>
                    {/* <!-- Sidebar -->

                    <!-- Navbar --> */}
                    <nav id="main-navbar" class="navbar navbar-expand-lg navbar-dark  fixed-top" style={{ backgroundColor: "black", color: "white" }}>
                        {/* <!-- Container wrapper --> */}
                        <div class="container-fluid">
                            {/* <!-- Toggle button --> */}
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fa fa-bars"></i>
                            </button>

                            {/* <!-- Brand --> */}
                            <a class="navbar-brand" href="#">
                                <img src={Logo} height="25" alt="CIIT Logo" loading="lazy" />
                            </a>
                            {/* <!-- Search form --> */}
                            <form class="d-none d-md-flex input-group w-auto my-auto">
                                <input autocomplete="off" type="search" class="form-control rounded " placeholder='Search (ctrl + "/" to focus)' />
                                <span class="input-group-text border-0"><i class="fa fa-search"></i></span>
                            </form>

                            {/* <!-- Right links --> */}
                            <ul class="navbar-nav ms-auto d-flex flex-row">
                                <input type="button" className="btn btn-danger" value="Logout" />
                            </ul>
                        </div>
                        {/* <!-- Container wrapper --> */}
                    </nav>
                    {/* <!-- Navbar --> */}
                </header >
                {/* <!--Main Navigation-->

                <!--Main layout--> */}


                <main style={{ marginTop: "70px", backgroundColor: "white", color: "dark" }}>
                    <Outlet />
                </ main>
                {/* <!--Main layout--> */}

            </div >
        </div >
    )
}
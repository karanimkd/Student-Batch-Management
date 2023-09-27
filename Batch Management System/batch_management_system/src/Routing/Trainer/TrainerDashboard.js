import React from "react";
import axios from "axios";

export const TrainerDashboard = () => {

    return (
        <div>
            <div className="container-fluid">
                <div className="card " style={{ padding: "10px 15px", }}>
                    <div >
                        <div class="title d-flex">
                            <i class="bi bi-" style={{ fontSize: "30px" }} > </i>&nbsp;&nbsp;&nbsp;
                            <h4 style={{ color: "Red", borderBottom: "4px solid #fffdfd", width: "fit-content" }}><b>
                                Dashboard
                            </b>
                            </h4>
                            {/* <img src="/images/logo.png" class="ms-auto" alt="" height="60px"> */}
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-3">
                            <div class="card my-2" style={{ borderLeft: "6px solid #FA4519", borderBottomLeftRadius: "80px;" }}>
                                <div class="card-body ms-auto " style={{ textAlignLast: "right" }}>
                                    <p><b>Active Student</b></p><br />
                                    <p>340</p>
                                </div>
                            </div>
                        </div><div class="col-md-3">
                            <div class="card my-2" style={{ borderLeft: "6px solid #FA4519", borderBottomLeftRadius: "80px;" }}>
                                <div class="card-body ms-auto " style={{ textAlignLast: "right" }}>
                                    <p><b>Total Trainer</b></p><br />
                                    <p>15</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card my-2" style={{ borderLeft: "6px solid #24B0E2", borderBottomLeftRadius: "80px" }}>
                                <div class="card-body ms-auto " style={{ textAlignLast: "right" }}>
                                    <p><b>Courses Avaliable</b></p><br />
                                    <p>10</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card my-2" style={{ borderLeft: "6px solid #9CBC04", borderBottomLeftRadius: "80px;" }}>
                                <div class="card-body ms-auto " style={{ textAlignLast: "right" }}>
                                    <p><b>Total Student</b></p><br />
                                    <p>1000+</p>
                                </div>
                            </div>
                        </div>

                    </div>



                    <div class="row mt-2">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-body">
                                    <div class="text-header d-flex">
                                        <p>Course</p>
                                        <div class=" ms-auto d-flex">
                                            <a href="" style={{ textDecoration: "none", color: "black" }}>
                                                <p>This Week</p>
                                            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href="" style={{ textDecoration: "none", color: "black" }}>
                                                <p>Last Week</p>
                                            </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href="" style={{ textDecoration: "none", color: "black" }}>
                                                <p>Last Month</p>
                                            </a> &nbsp;
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        {/* <img src="/images/pie.png" class="m-auto" alt="" height="450px" width="550px"> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="text-header d-flex">
                                        <p>Daily Active</p>

                                    </div>
                                    <div class="card-footer">
                                        {/* <img src="/images/plot2.png" class="m-auto" alt="" height="350px" width="350px"> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- div 1 end -->
                <!-- div row 2 start --> */}
                    <div class="row mt-3 ">
                        <div class="col-md-3">
                            <div class="card my-2">
                                <div class="card-header">
                                    {/* <img src="/images/fb.png" alt="" style="width:100%;"> */}
                                </div>
                                <div class="card-body d-flex">
                                    <div class="m-auto">
                                        <span>35K</span><br />
                                        <span>Friends</span>
                                    </div>
                                    <div class="m-auto">
                                        <span>116</span><br />
                                        <span>Feed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">

                            <div class="card my-2">
                                <div class="card-header">
                                    {/* <img src="/images/twittwe.png" alt="" style="width:100%;height: 100px;"> */}
                                </div>
                                <div class="card-body d-flex">
                                    <div class="m-auto">
                                        <span>535K</span><br />
                                        <span>Follower</span>
                                    </div>
                                    <div class="m-auto">
                                        <span>1000</span><br />
                                        <span>Tweets</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card my-2">
                                <div class="card-header">
                                    {/* <img src="/images/ldin.png" alt="" style="width:100%;height: 100px;"> */}
                                </div>
                                <div class="card-body d-flex">
                                    <div class="m-auto">
                                        <span>450+</span><br />
                                        <span>Contact</span>
                                    </div>
                                    <div class="m-auto">
                                        <span>364</span><br />
                                        <span>Feed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card my-2">
                                <div class="card-header">
                                    {/* <img src="/images/gplus.png" alt="" style="width:90%;height: 100px;"> */}
                                </div>
                                <div class="card-body d-flex">
                                    <div class="m-auto">
                                        <span>320</span><br />
                                        <span>Follower</span>
                                    </div>
                                    <div class="m-auto">
                                        <span>75</span><br />
                                        <span>Circle</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}
import axios from "axios";
import React, { useEffect, useState } from "react";

export const StudentPayment = () => {
    const [GetPaymentDetails, SetPaymentDetails] = useState([]);
    useEffect(function () {
        PaymentDetails();
    }, [])

    const PaymentDetails = () => {
        axios({
            url: "http://localhost:9092/api/studentpayments",
            method: "get",
            contentType: 'application/json',
        }).then(e => {
            console.log(e.data)
            SetPaymentDetails(e.data);
        })
    }

    // api / studentpayments
    return (
        <div>
            <div class="modal-data " >
                <div class="container-fluid " >
                    <div class="card " style={{ borderRadius: "30px;", minHeight: "640px" }}>
                        <div class="card-header d-flex">
                            <h3 class="mt-2">Course Registration</h3>

                            <div class="mt-2 ms-auto">
                                <button type="button" class="btn btn-primary"
                                    data-bs-toggle="modal" data-bs-target="#myModal">Register Student</button>
                            </div>
                            <div id="myModal" class="modal fade" role="dialog">
                                <div class="modal-dialog modal-xl">

                                    {/* <!-- Modal content--> */}
                                    <div class="modal-content">
                                        <div class="modal-header bg-primary">
                                            <h4 class="modal-title mr-auto text-white">Payment Detail</h4>
                                            {/* <button type="button" class="close" data-dismiss="modal">&times;</button> */}
                                        </div>
                                        <div class="modal-body">
                                            <div class="row ">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Payement Id</label>
                                                        <input class="form-control" data-val="true" id="student_id"
                                                            name="registration_id" type="text" disabled />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Payment Date</label>
                                                        <input class="form-control"
                                                            name="Registration_date" type="Date" value="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div class="form-group">
                                                        <label>Payment Amount</label>
                                                        <input type="text" id="gender" name="gender" placeholder="Enter Amount"
                                                            class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row ">
                                                <div class="col-md-4">
                                                    <div class="form-group mt-4">
                                                        <div>
                                                            <label>Payment Description </label>&nbsp;&nbsp;
                                                        </div>
                                                        <textarea name="" id="" cols="35" rows="5" style={{ resize: "none" }}></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group mt-4">
                                                        <label>Payment Mode </label>&nbsp;&nbsp;
                                                        <select name="" id="">
                                                            <option value="" selected disabled>Select Payment Mode</option>
                                                            <option value="Online">Online</option>
                                                            <option value="Cash">Cash</option>
                                                            <option value="Check">Check</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-md-4">
                                                    <div class="form-group mt-4">
                                                        <label>Registration id </label>&nbsp;&nbsp;
                                                        <input type="text" name="gender" placeholder="Enter Registration ID"
                                                            class="form-control" />
                                                    </div>
                                                </div>

                                            </div>



                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger close"
                                                data-bs-dismiss="modal">Cancel</button>
                                            <button type="button" class="btn btn-default btn-primary" id="btnadd"
                                                data-bs-dismiss="modal">Add
                                            </button>
                                            <button type="button" class="btn btn-default btn-primary" id="btnupdate"
                                                data-bs-dismiss="modal">Update
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="card-body" style={{ overflowY: "scroll", height: "60vh" }}>
                            <h2 class="text-center">Student Details</h2>
                            <hr />
                            <table class="table table-responsive-md  text-dark">
                                <thead>
                                    <tr class="text-center">
                                        <th>Payment Id</th>
                                        <th>Payment Date</th>
                                        <th>Payment Amount</th>
                                        <th>Payment Description</th>
                                        <th>Payment Mode</th>
                                        <th>Registration_id</th>
                                    </tr>
                                </thead>
                                <tbody class="text-dark text-center">
                                    {
                                        GetPaymentDetails.map((d, k) => (
                                            <tr key={k}>
                                                <td>{d.payment_id}</td>
                                                <td>{d.payment_date}</td>
                                                <td>{d.payment_amount}</td>
                                                <td>{d.payment_description}</td>
                                                <td>{d.payment_mode}</td>
                                                <td>{d.registration_id}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}
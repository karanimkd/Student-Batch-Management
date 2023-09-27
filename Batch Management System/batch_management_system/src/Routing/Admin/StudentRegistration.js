import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export const StudentRegistration = () => {
    const [getStudent, setStudent] = useState([]);
    const [getCourse, setCourse] = useState([]);
    const [getRegistrationData, setRegistrationData] = useState([]);

    var registrationid = useRef();
    var registrationdate = useRef();
    var txtstudentid = useRef();
    var txtcourseid = useRef();
    var discount = useRef();

    var paymentid = useRef();
    var paymentdate = useRef();
    var paymentamount = useRef();
    var paymentdescription = useRef();
    var paymentmode = useRef();


    useEffect(function () {
        GetStudent();
        GetCourse();
        GetResterationData();

    }, [])

    const GetStudent = () => {
        axios({
            url: "http://localhost:9092/api/student",
            method: 'get',
            contentType: 'application/json',
        }).then(e => {
            // console.log(e.data.email_address)
            setStudent(e.data)
        })
    }

    const GetCourse = () => {
        axios({
            url: "http://localhost:9092/api/course",
            method: 'get',
            contentType: 'application/json',
        }).then(e => {
            setCourse(e.data)
        })
    }
    var t = new Date;
    var registerdate = t.toISOString().slice(0, 10);
    console.log(t.toISOString().slice(0, 10));
    // api / registerstudent
    const RegisterStudent = () => {
        var rid = registrationid.current.value;

        var rdate = registerdate;

        var sid = txtstudentid.current.value;
        var cid = txtcourseid.current.value;
        var dis = discount.current.value;

        var pid = paymentid.current.value;
        var pdate = paymentdate.current.value;

        var payamount = paymentamount.current.value;
        var paydesc = paymentdescription.current.value;
        var paymode = paymentmode.current.value;
        // studentpayments
        var studentPaymentsArray = [
            {
                "payment_date": pdate,
                "payment_amount": payamount,
                "payment_mode": paymode,
                "payment_description": paydesc
            }
        ];

        var st = {
            "registration_id": rid,
            "registration_date": rdate,
            "discount": dis,
            "student": {
                "student_id": sid
            },
            "trainingcourse": {
                "course_id": cid
            },
            "studentpayments": studentPaymentsArray // Use the array here
        };

        axios({
            url: "http://localhost:9092/api/registerstudent",
            method: 'post',
            data: st
        }).then(e => {
            alert("Student Register Successfully");
        })
    }
    const GetResterationData = () => {
        axios({
            url: "http://localhost:9092/api/registerstudent",
            method: 'get',
            contentType: 'application/json',
        }).then(e => {
            console.log(e.data)
            setRegistrationData(e.data)
        })
    }


    const ViewRegisterStudent = (d) => {
        registrationid.current.value = d.registration_id;
        registrationdate.current.focus();

        const dateParts = d.registration_date.split('-'); // Assuming the date is in "yyyy-mm-dd" format
        const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

        registrationdate.current.defaultValue = formattedDate;

        txtstudentid.current.value = d.student_id;
        txtcourseid.current.value = d.course_id;
        discount.current.value = d.discount;
    }

    const ClearData = () => {
        registrationid.current.value = "";
        registrationdate.current.defaultValue = "";
        txtstudentid.current.value = "";
        txtcourseid.current.value = "";
        discount.current.value = "";
    }
    return (
        <div>
            <div class="modal-data " >
                <div class="container-fluid " >
                    <div class="card " style={{ borderRadius: "30px;", minHeight: "640px" }}>
                        <div class="card-header d-flex">

                            {/* <!-- Modal content--> */}
                            <div class="modal-content">
                                <div class="modal-header bg-primary p-2">
                                    <h4 class="modal-title  text-white m-auto ">Register Student</h4>
                                    {/* <button type="button" class="close" data-dismiss="modal">&times;</button> */}
                                </div>
                                <div class="modal-body mt-5">
                                    <div class="row ">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Registration Id</label>
                                                <input class="form-control" data-val="true" ref={registrationid}
                                                    name="registration_id" type="text" disabled />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Registration Date</label>
                                                <input class="form-control" name="Registration_date" type="Date" ref={registrationdate} />

                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group mt-4">
                                                <label>Student: </label>&nbsp;&nbsp;
                                                <select ref={txtstudentid}>
                                                    <option selected disabled>Select Student</option>
                                                    {
                                                        getStudent.map((d, k) => (
                                                            <option key={k} value={d.student_id}>{d.student_name}</option>

                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="col-md-4">
                                            <div class="form-group mt-4">
                                                <label>Course: </label>&nbsp;&nbsp;
                                                <select ref={txtcourseid}>
                                                    <option selected disabled>Select Course</option>
                                                    {
                                                        getCourse.map((d, k) => (
                                                            <option key={k} value={d.course_id}>{d.course_name}</option>

                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div class="form-group">
                                                <label>Discount</label>
                                                <input type="text" ref={discount} name="gender" placeholder="Enter Amount"
                                                    class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <hr />
                                    <h5>Payment Section</h5>
                                    <div class="row ">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Payment Id</label>
                                                <input class="form-control" data-val="true" ref={paymentid}
                                                    name="payment-id" type="text" disabled />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Payment Date</label>
                                                <input class="form-control"
                                                    name="Registration_date" type="Date" ref={paymentdate} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div class="form-group">
                                                <label>Payment Amount</label>
                                                <input type="text" ref={paymentamount} name="gender" placeholder="Enter Amount"
                                                    class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="col-md-4">
                                            <div class="form-group mt-4">

                                                <label>Payment Description </label>&nbsp;&nbsp;
                                                <input type="text" ref={paymentdescription} name="gender" placeholder="Enter Payment Description"
                                                    class="form-control" />
                                                {/* <textarea name="" id="" cols="35" rows="5" style={{ resize: "none" }}></textarea> */}
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group mt-4">
                                                <label>Payment Mode:</label>&nbsp;&nbsp;
                                                <br />
                                                <select ref={paymentmode}>
                                                    <option value="" selected disabled>Select Payment Mode</option>
                                                    <option value="Online">Online</option>
                                                    <option value="Cash">Cash</option>
                                                    <option value="Check">Check</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* <div class="col-md-4">
                                            <div class="form-group mt-4">
                                                <label>Registration id </label>&nbsp;&nbsp;
                                                <input type="text" name="gender"  placeholder="Enter Registration ID"
                                                    class="form-control" />
                                            </div>
                                        </div> */}

                                    </div>



                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger close"
                                        onClick={() => ClearData()}>Cancel</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button type="button" class="btn btn-default btn-primary" id="btnadd"
                                        onClick={() => RegisterStudent()}>Add
                                    </button>

                                </div>
                            </div>

                        </div>
                    </div>



                </div>

            </div >
        </div >
    )
}
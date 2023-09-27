import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export const StudentCourseDetails = () => {
    const [getStudent, setStudent] = useState([]);
    const [getCourse, setCourse] = useState([]);
    const [getRegistrationData, setRegistrationData] = useState([]);

    var registrationid = useRef();
    var registrationdate = useRef();
    var txtstudentid = useRef();
    var txtcourseid = useRef();
    var discount = useRef();

    useEffect(function () {
        GetStudent();
        GetCourse();
        GetResterationData();
        // ClearData();
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
            // console.log(e.data.email_address)
            setCourse(e.data)
        })
    }

    // const RegisterStudent = () => {
    //     var rid = registrationid.current.value;
    //     var rdate = registrationdate.current.defaultValue;
    //     var sid = txtstudentid.current.value;
    //     var cid = txtcourseid.current.value;
    //     var dis = discount.current.value;

    //     // payment_date;
    //     // payment_amount;
    //     // payment_mode;
    //     // payment_description;
    //     var st = { "registration_id": rid, "registration_date": rdate, "discount": dis, "student": { "student_id": sid }, "trainingcourse": { "course_id": cid } }
    //     axios({
    //         url: "http://localhost:9092/api/registerstudent",
    //         method: 'post',
    //         data: st
    //     }).then(e => {
    //         alert("Student Register Successfully");
    //     })
    // }
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
                    <div class="card " style={{ borderRadius: "30px;" }}>
                        <div class="card-header d-flex">
                            <h3 class="mt-2">Course Details</h3>


                        </div>
                    </div>
                    <div class="card-body mt-3 p-3" style={{ overflowY: "scroll", border: "1px solid grey", borderRadius: "10px" }}>
                        <table class="table table-responsive-md  text-dark">
                            <thead>
                                <tr class="text-center">
                                    <th>Registration Id</th>
                                    <th>Registration Date</th>
                                    <th>Discount</th>
                                    <th>Student_id</th>
                                    <th>Course_id</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="tbldata" class="text-dark text-center">
                                {
                                    getRegistrationData.map((d, k) => (
                                        <tr key={k}>
                                            <td>{d.registration_id}</td>
                                            <td>{d.registration_date}</td>
                                            <td>{d.discount}</td>
                                            <td>{d.student_id}</td>
                                            <td>{d.course_id}</td>
                                            <td>
                                                <input type="button" className="btn btn-info" value="View" href="#myModal" role="button" data-bs-toggle="modal" onClick={() => ViewRegisterStudent(d)} /> &nbsp;
                                                <input type="button" className="btn btn-danger" value="Delete" />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div >
        </div >

    )
}
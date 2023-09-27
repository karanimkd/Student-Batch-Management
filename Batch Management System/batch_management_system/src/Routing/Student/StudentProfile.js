import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const StudentProfile = () => {
    var [getStudent, setStudent] = useState([]);
    const params = useParams();

    useEffect(function () {
        GetStudent();
        //value();
    }, []);

    const GetStudent = () => {
        var sid = params.student_id
        axios({
            url: "http://localhost:9092/api/student/" + sid,
            method: 'get',
            contentType: 'application/json',
        })
            .then(e => {
                // Assuming `setStudent`, `student_id`, and `student_name` are state variables and functions
                // Update the state with the response data
                console.log(e.data);
                setStudent(e.data);

            })

    }
    return (
        <div>
            <div className="container-fluid">
                <div className="col-md-6 m-auto">
                    <div class="card">
                        <div class="card-header text-center p-4">
                            Your Profile :
                        </div>
                        <div class="card-body p-4">
                            <ul class="profile">
                                <li className="d-flex ">
                                    Student Id:
                                    &nbsp;&nbsp;
                                    <p style={{ fontWeight: "600" }}>{getStudent.student_id}</p>
                                </li>
                                <li className="d-flex">
                                    Student Name:
                                    &nbsp;&nbsp;
                                    <p style={{ fontWeight: "600" }}>{getStudent.student_name}</p>
                                </li>
                                <li className="d-flex">
                                    Email Address:
                                    &nbsp;&nbsp;
                                    <p style={{ fontWeight: "600" }}>{getStudent.email_address}</p>
                                </li>
                                <li className="d-flex">
                                    Mobile Number:
                                    &nbsp;&nbsp;
                                    <p style={{ fontWeight: "600" }}>{getStudent.mobile_number}</p>
                                </li>
                                <li className="d-flex">
                                    Date Of Birth:
                                    &nbsp;&nbsp;
                                    <p style={{ fontWeight: "600" }}>{getStudent.date}</p>
                                </li>
                                <li className="d-flex">
                                    Gender:
                                    &nbsp;&nbsp;
                                    <p style={{ fontWeight: "600" }}>{getStudent.gender}</p>
                                </li>
                                <li className="d-flex">
                                    qualification:
                                    &nbsp;&nbsp;
                                    <p style={{ fontWeight: "600" }}>{getStudent.qualification}</p>

                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
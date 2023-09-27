import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export const Student = () => {
    const [student, setStudent] = useState([]);
    useEffect(function () {
        GetStudent();

        // console.log(admin.user_name);
    }, []);

    var student_id = useRef();
    var student_name = useRef();
    var gender = useRef();
    var mobile_number = useRef();
    var email_address = useRef();
    var birthdate = useRef();
    var photo = useRef();
    var qualification = useRef();

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

    let pass;
    const sendmail = () => {
        var email = email_address.current.value;
        var em = { "email_address": email }
        axios({
            url: "http://localhost:9092/api/sendemail",
            method: 'post',
            data: em,
            contentType: 'application/json',
        }).then(e => {
            alert("Mail Send Successfully");
            pass = e.data;
            AddStudent();
        }
        )
    }

    const AddStudent = () => {
        var sid = student_id.current.value;
        var sname = student_name.current.value;
        var gen = gender.current.value;
        var mno = mobile_number.current.value;
        var email = email_address.current.value;
        var bd = birthdate.current.value;
        var ql = qualification.current.value;
        var img = photo.current.value
        var st = { "student_id": sid, "student_name": sname, "gender": gen, "mobile_number": mno, "email_address": email, "date": bd, "qualification": ql, "password": pass, "profile_photo": img }
        axios({
            url: "http://localhost:9092/api/student",
            method: 'post',
            data: st,
        }).then(e => {

            alert("Student Added Successfully");
            GetStudent();

        })
    }

    const ViewStudent = (d) => {
        student_id.current.value = d.student_id;
        student_name.current.value = d.student_name;
        gender.current.value = d.gender;
        mobile_number.current.value = d.mobile_number;
        email_address.current.value = d.email_address;
        birthdate.current.value = d.date;
        qualification.current.value = d.qualification;
    }
    const DeleteStudent = (d) => {
        // alert(d); api / student / { student_id }

        axios({
            url: "http://localhost:9092/api/student/" + d,
            method: "Delete",
            contentType: 'application/json',
        }).then(e => {
            alert("Student Delete Successfully");
            GetStudent();

        })
    }

    return (
        <div>
            <div class="modal-data " >
                <div class="col-md-12 " >
                    <div class="card " style={{ borderRadius: "30px;", minHeight: "640px" }}>
                        <div class="card-header d-flex">
                            <h3 class="mt-2">Add Student Data </h3>

                            <div class="mt-2 ms-auto">
                                <button type="button" class="btn btn-primary"
                                    data-bs-toggle="modal" data-bs-target="#myModal">Add
                                    Student</button>
                            </div>
                            <div id="myModal" class="modal fade" role="dialog">
                                <div class="modal-dialog modal-xl">

                                    {/* <!-- Modal content--> */}
                                    <div class="modal-content">
                                        <div class="modal-header bg-primary">
                                            <h4 class="modal-title mr-auto text-white">Add Student</h4>
                                            {/* <button type="button" class="close" data-dismiss="modal">&times;</button> */}
                                        </div>
                                        <div class="modal-body">
                                            <div class="row ">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Student Id</label>
                                                        <input class="form-control" data-val="true" ref={student_id}
                                                            name="student_id" type="number" value="0" readonly />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Student Name</label>
                                                        <input class="form-control" ref={student_name}
                                                            name="student_name" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div class="form-group">
                                                        <label>Gender</label>
                                                        <input type="text" ref={gender} name="gender"
                                                            class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Mobile Number</label>
                                                        <input class="form-control" ref={mobile_number}
                                                            name="mobile_number" type="text" maxlength="10" />
                                                    </div>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="form-group">
                                                        <label>Email Address</label>
                                                        <input class="form-control" ref={email_address}
                                                            name="email_address" type="text" />
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Birth Date</label>
                                                        <input type="date" ref={birthdate} name="birthdate"
                                                            class="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div class="form-group">
                                                        <label>Profile Photo</label>
                                                        {/* <input type="file" ref={photo} name="profilephoto"
                                                            class="form-control" /> */}
                                                        <form action="@{/api/student}"
                                                            object="${student}" method="post"
                                                            enctype="multipart/form-data">
                                                            <input type="file" name="image" accept="image/png, image/jpeg" />
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div class="form-group">
                                                        <label>Qualification </label>
                                                        <input type="text" ref={qualification} name="Qualification"
                                                            class="form-control" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger close"
                                                data-bs-dismiss="modal">Cancel</button>
                                            <button type="button" class="btn btn-default btn-primary" id="btnadd"
                                                data-bs-dismiss="modal" onClick={() => sendmail()}>Add
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
                                        <th> Student_id</th>
                                        <th> Student_name</th>
                                        <th> Gender </th>
                                        <th> Mobile_number </th>
                                        <th> Email_address </th>
                                        <th> Date </th>
                                        <th> Qualification</th>
                                        <th>Password</th>
                                        {/* <th>Batch</th> */}
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody id="tbldata" class="text-dark">

                                    {
                                        student.map((d, k) => (
                                            <tr key={k}>
                                                <td>{d.student_id}</td>
                                                <td>{d.student_name}</td>
                                                <td>{d.gender}</td>
                                                <td>{d.mobile_number}</td>
                                                <td>{d.email_address}</td>
                                                <td>{d.date}</td>
                                                <td>{d.qualification}</td>
                                                <td>{d.password}</td>
                                                <td>
                                                    <input type="button" className="btn btn-info" value="View" href="#myModal" role="button" data-bs-toggle="modal" onClick={() => ViewStudent(d)} /> &nbsp;
                                                    <input type="button" className="btn btn-danger" value="Delete" onClick={() => DeleteStudent(d.student_id)} />
                                                </td>
                                                {/* <td>{d.batch}</td> */}

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
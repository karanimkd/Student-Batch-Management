import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export const AdminCourse = () => {
    const [getCourse, setCourse] = useState([]);

    var course_id = useRef();
    var course_name = useRef();
    var gst = useRef();
    var course_fee = useRef();
    var fee_mode = useRef();

    useEffect(() => {
        GetCourse();
    }, []);

    const GetCourse = async () => {
        const response = await axios.get('http://localhost:9092/api/course');
        setCourse(response.data);
    };


    const AddCourse = () => {

        const cid = course_id.current.value;
        const cname = course_name.current.value;
        const ctax = gst.current.value;
        const cfee = course_fee.current.value;
        const fmode = fee_mode.current.value;
        var st = {
            "course_name": cname, "coursefees": [{
                "fees_amount": cfee, "gst": ctax, "fee_mode": fmode
            }]
        };
        axios({
            url: "http://localhost:9092/api/course",
            method: "post",
            data: st
        }).then(response => {
            alert("Course Added Successfully");
        }).catch(error => {
            alert("Error adding course:", error);
        });
    };


    return (
        <div>
            <div className="modal-data">
                <div className="container-fluid">
                    <div className="card" style={{ borderRadius: '30px' }}>
                        <div className="card-header d-flex">
                            <h3 className="mt-2">Course Section</h3>
                            <div class="mt-2 ms-auto">
                                <button type="button" class="btn btn-primary"
                                    data-bs-toggle="modal" data-bs-target="#myModal">Add
                                    Course</button>
                            </div>
                        </div>

                        <div id="myModal" class="modal fade" role="dialog">
                            <div class="modal-dialog modal-xl">

                                {/* <!-- Modal content--> */}
                                <div class="modal-content">
                                    <div class="modal-header bg-primary">
                                        <h4 class="modal-title mr-auto text-white">Add Course</h4>
                                        {/* <button type="button" class="close" data-dismiss="modal">&times;</button> */}
                                    </div>
                                    <div class="modal-body">
                                        <div class="row ">
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Course_id</label>
                                                    <input class="form-control" ref={course_id}
                                                        name="student_id" type="number" />
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Course Name</label>
                                                    <input class="form-control" ref={course_name}
                                                        name="student_name" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div class="form-group">
                                                    <label>Course Fee</label>
                                                    <input type="text" ref={course_fee} name="gender"
                                                        class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Gst</label>
                                                    <input class="form-control" ref={gst}
                                                        name="mobile_number" type="text" maxlength="10" />
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="form-group">
                                                    <label>Fee Mode</label>
                                                    <input class="form-control" ref={fee_mode}
                                                        name="email_address" type="text" />
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger close"
                                            data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn-default btn-primary" id="btnadd"
                                            data-bs-dismiss="modal" onClick={() => AddCourse()}>Add
                                        </button>
                                        <button type="button" class="btn btn-default btn-primary" id="btnupdate"
                                            data-bs-dismiss="modal">Update
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div
                            className="card-body mt-3 p-3"
                            style={{
                                overflowY: 'scroll',
                                border: '1px solid grey',
                                borderRadius: '10px',
                            }}
                        >
                            <table className="table table-responsive-md text-dark">
                                <thead>
                                    <tr className="text-center">
                                        <th>Course id</th>
                                        <th>Course name</th>
                                        <th>Course Fees</th>
                                        <th>Gst</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody id="tbldata" className="text-dark text-center">
                                    {getCourse.map((course, k) => (
                                        <tr key={k}>
                                            <td>{course.course_id}</td>
                                            <td>{course.course_name}</td>
                                            <td>

                                                {course.coursefees.map((fee, i) => (
                                                    <div key={i}>
                                                        {fee.fees_amount}
                                                    </div>
                                                ))

                                                }
                                            </td>
                                            <td>{course.coursefees.map((fee, i) => (
                                                <div key={i}>
                                                    {fee.gst}
                                                </div>
                                            ))

                                            }
                                            </td>

                                            <td>
                                                <input
                                                    type="button"
                                                    className="btn btn-info"
                                                    value="View"
                                                    href="#myModal"
                                                    role="button"
                                                    data-bs-toggle="modal"
                                                />{" "}
                                                &nbsp;
                                                <input
                                                    type="button"
                                                    className="btn btn-danger"
                                                    value="Delete"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
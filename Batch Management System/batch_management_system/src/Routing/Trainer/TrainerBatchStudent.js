import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export const TrainerBatchStudent = () => {
    const [getBatch, setBatch] = useState([]);
    useEffect(function () {
        GetBatchData();
    }, []);

    var batch_student_id = useRef();
    var bid = useRef();
    var registration_id = useRef();

    const GetBatchData = () => {
        axios({
            url: "http://localhost:9092/api/batch",
            method: "get",
            contentType: 'application/json',
        }).then(e => {
            // console.log(e.data.email_address)
            setBatch(e.data);
        })

    }
    return (
        <div>
            <div class="modal-data " >
                <div class="col-md-12 " >
                    <div class="card " style={{ borderRadius: "30px;", minHeight: "640px" }}>
                        <div class="card-header d-flex">
                            <h3 class="mt-2">Batch Student Data </h3>

                            <div class="mt-2 ms-auto">
                                <button type="button" class="btn btn-primary"
                                    data-bs-toggle="modal" data-bs-target="#myModal">Register
                                    Batch</button>
                            </div>
                            <div id="myModal" class="modal fade" role="dialog">
                                <div class="modal-dialog modal-xl">

                                    {/* <!-- Modal content--> */}
                                    <div class="modal-content">
                                        <div class="modal-header bg-primary">
                                            <h4 class="modal-title mr-auto text-white">Batch Student</h4>
                                            {/* <button type="button" class="close" data-dismiss="modal">&times;</button> */}
                                        </div>
                                        <div class="modal-body">
                                            <div class="row ">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Batch Student id</label>
                                                        <input class="form-control" data-val="true" ref={batch_student_id}
                                                            name="student_id" type="number" value="0" readonly />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group mt-1">
                                                        <label>Batch Id</label><br />
                                                        <select ref={bid}>
                                                            <option selected disabled>Select Student</option>
                                                            {
                                                                getBatch.map((d, k) => (
                                                                    <option key={k} value={d.batch_id}>{d.batch_name}</option>

                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div class="form-group">
                                                        <label>Registration _Id</label>
                                                        <input type="text" ref={registration_id} name="gender"
                                                            class="form-control" />

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger close"
                                                data-bs-dismiss="modal">Cancel</button>
                                            <button type="button" class="btn btn-default btn-primary" id="btnadd"
                                                data-bs-dismiss="modal" >Add
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
                                        <th> Batch_Student_id</th>
                                        <th> Registration_id</th>
                                        <th> Batch_id </th>
                                        <th> Action </th>
                                    </tr>
                                </thead>
                                <tbody id="tbldata" class="text-dark">



                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}
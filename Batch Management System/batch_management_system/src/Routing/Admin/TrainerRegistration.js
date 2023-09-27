import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export const TrainerRegistration = () => {
    const [getTrainer, setTrainer] = useState([]);
    const [getTopic, setTopic] = useState([]);
    useEffect(function () {
        GetTrainer();
        GetTopic();
        // console.log(admin.user_name);
    }, []);

    var tid = useRef();
    var tname = useRef();
    var mob = useRef();
    var email = useRef();
    var qual = useRef();
    var Topic = useRef();

    const GetTrainer = () => {
        axios({
            url: "http://localhost:9092/api/trainer",
            method: 'get',
            contentType: 'application/json',
        }).then(e => {
            setTrainer(e.data)
        })
    }

    let pass;
    const sendmail = () => {
        var ema = email.current.value;
        var em = { "email_address": ema }
        axios({
            url: "http://localhost:9092/api/sendemail",
            method: 'post',
            data: em,
            contentType: 'application/json',
        }).then(e => {
            alert("Mail Send Successfully");
            pass = e.data;
            AddTrainer();
        }
        )
    }

    const GetTopic = () => {
        axios({
            url: "http://localhost:9092/api/topic",
            method: 'get',
            contentType: "application/json;"
        }).then(e => {
            console.log(e.data);
            setTopic(e.data);
        })
    }
    const AddTrainer = () => {
        var tidValue = tid.current.value;
        var tnameValue = tname.current.value;
        var mnoValue = mob.current.value;
        var emailValue = email.current.value;
        var qlValue = qual.current.value;
        var tp = Topic.current.value;
        var passValue = pass;
        var st = {
            "trainer_id": tidValue,
            "trainer_name": tnameValue,
            "qualification": qlValue,
            "email_address": emailValue,
            "password": passValue,
            "mobile_number": mnoValue,
            "trainertopic": [{
                "trainertopics": [{
                    topic_id: tp
                }]
            }]
        };
        console.log(st)
        axios({
            url: "http://localhost:9092/api/trainer",
            method: 'post',
            data: st,
        }).then(e => {
            alert("Trainer Added Successfully");
            GetTrainer();
        })
    }
    const ViewTrainer = (d) => {
        tid.current.value = d.trainer_id;
        tname.current.value = d.trainer_name;
        mob.current.value = d.mobile_number;
        email.current.value = d.email_address;
        qual.current.value = d.email_address;

    }
    const DeleteStudent = (d) => {
        console.log(d);
    }

    return (
        <div>
            <div class="modal-data " >
                <div class="col-md-12 " >
                    <div class="card " style={{ borderRadius: "30px;", minHeight: "640px" }}>
                        <div class="card-header d-flex">
                            <h3 class="mt-2">Trainer Section </h3>

                            <div class="mt-2 ms-auto">
                                <button type="button" class="btn btn-primary"
                                    data-bs-toggle="modal" data-bs-target="#myModal">Add
                                    Trainer</button>
                            </div>
                            <div id="myModal" class="modal fade" role="dialog">
                                <div class="modal-dialog modal-xl">

                                    {/* <!-- Modal content--> */}
                                    <div class="modal-content">
                                        <div class="modal-header bg-primary">
                                            <h4 class="modal-title mr-auto text-white">Add Trainer</h4>
                                            {/* <button type="button" class="close" data-dismiss="modal">&times;</button> */}
                                        </div>
                                        <div class="modal-body">
                                            <div class="row ">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Trainer Id</label>
                                                        <input class="form-control" data-val="true" ref={tid}
                                                            name="trainer_id" type="number" readonly />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Trainer Name</label>
                                                        <input class="form-control" ref={tname}
                                                            name="trainer_name" type="text" />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Mobile Number</label>
                                                        <input class="form-control" ref={mob}
                                                            name="mobile_number" type="text" maxlength="10" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-5">
                                                    <div class="form-group">
                                                        <label>Email Address</label>
                                                        <input class="form-control" ref={email}
                                                            name="email_address" type="text" />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Qualification</label>
                                                        <input class="form-control" ref={qual}
                                                            name="qualification" type="text" />
                                                    </div>
                                                </div>
                                                <div class="col-md-2 mt-1 m-auto">
                                                    <div class="form-group">
                                                        <label>Topic</label><br />
                                                        <select ref={Topic}>
                                                            <option selected disabled>Select Topic</option>
                                                            {

                                                                getTopic.map((d, k) => (
                                                                    <option value={d.topic_id}>{d.topic_name}</option>


                                                                ))
                                                            }
                                                        </select>
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
                            <h2 class="text-center">Trainer Details</h2>
                            <hr />
                            <table class="table table-responsive-md  text-dark">
                                <thead>
                                    <tr class="text-center">
                                        <th> Trainer Id</th>
                                        <th> Trainer Name</th>
                                        <th> Email Address </th>
                                        <th> Mobile Number </th>
                                        <th> Qualification</th>
                                        <th>Password</th>
                                        {/* <th>Batch</th> */}
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody id="tbldata" class="text-dark">

                                    {
                                        getTrainer.map((d, k) => (
                                            <tr key={k}>
                                                <td>{d.trainer_id}</td>
                                                <td>{d.trainer_name}</td>
                                                <td>{d.mobile_number}</td>
                                                <td>{d.email_address}</td>
                                                <td>{d.qualification}</td>
                                                <td>{d.password}</td>
                                                <td>
                                                    <input type="button" className="btn btn-info" value="View" href="#myModal" role="button" data-bs-toggle="modal" onClick={() => ViewTrainer(d)} /> &nbsp;
                                                    <input type="button" className="btn btn-danger" value="Delete" onClick={() => DeleteStudent(d)} />
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
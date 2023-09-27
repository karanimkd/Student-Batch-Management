import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export const AdminTopic = () => {
    const [getTopic, setTopic] = useState([]);
    const [showUpdateButton, setShowUpdateButton] = useState(false);
    const [showAddButton, setShowAddButton] = useState(true);


    var topic_id = useRef();
    var topic_name = useRef();


    useEffect(() => {
        GetTopic();
    }, []);

    const GetTopic = async () => {
        const response = await axios.get('http://localhost:9092/api/topic');
        setTopic(response.data);
    };



    const AddCourse = () => {
        const tid = topic_id.current.value;
        const tname = topic_name.current.value;
        setShowAddButton(true);
        setShowUpdateButton(true);
        var st = {
            "topic_name": tname,
        };

        console.log(st);
        axios({
            url: "http://localhost:9092/api/topic",
            method: "post",
            data: st
        }).then(e => {
            alert("Topic Added Successfully");
        }).catch(error => {
            alert("Error adding course:", error);
        });
    };

    const ViewTopic = (d) => {
        setShowAddButton(false);
        setShowUpdateButton(true);
        topic_id.current.value = d.topic_id;
        topic_name.current.value = d.topic_name;
    }
    const UpdateCourse = () => {
        const tid = topic_id.current.value;
        const tname = topic_name.current.value;
        var st = { "topic_id": tid, "topic_name": tname };

        axios({
            url: "http://localhost:9092/api/topic",
            method: "put",
            data: st,
            contentType: 'application/json'
        }).then(e => {
            alert("Topic Updated Successfully");
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
                            <h3 className="mt-2">Topic Details</h3>
                            <div class="mt-2 ms-auto">
                                <button type="button" class="btn btn-primary"
                                    data-bs-toggle="modal" data-bs-target="#myModal">Add
                                    Topic</button>
                            </div>
                        </div>

                        <div id="myModal" class="modal fade" role="dialog">
                            <div class="modal-dialog modal-xl">

                                {/* <!-- Modal content--> */}
                                <div class="modal-content">
                                    <div class="modal-header bg-primary">
                                        <h4 class="modal-title mr-auto text-white">Add Topics</h4>
                                        {/* <button type="button" class="close" data-dismiss="modal">&times;</button> */}
                                    </div>
                                    <div class="modal-body">
                                        <div class="row ">
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Topic id</label>
                                                    <input class="form-control" ref={topic_id}
                                                        name="topic_id" type="number" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div class="form-group">
                                                    <label>Topic Name</label>
                                                    <input class="form-control" ref={topic_name}
                                                        name="topic_name" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger close"
                                                data-bs-dismiss="modal">Cancel</button>
                                            {showAddButton && (
                                                <button
                                                    type="button"
                                                    class="btn btn-default btn-primary"
                                                    id="btnadd"
                                                    data-bs-dismiss="modal"
                                                    onClick={() => AddCourse()}
                                                >
                                                    Add
                                                </button>
                                            )}
                                            {showUpdateButton && (
                                                <button
                                                    type="button"
                                                    class="btn btn-default btn-primary"
                                                    id="btnupdate"
                                                    data-bs-dismiss="modal"
                                                    onClick={() => UpdateCourse()}
                                                >
                                                    Update
                                                </button>
                                            )}
                                        </div>
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
                                        <th>Topic id</th>
                                        <th>Topic name</th>
                                        <th>Action</th>

                                    </tr>
                                </thead>
                                <tbody id="tbldata" className="text-dark text-center">
                                    {getTopic.map((d, k) => (
                                        <tr key={k}>
                                            <td>{d.topic_id}</td>
                                            <td>{d.topic_name}</td>


                                            <td>
                                                <input
                                                    type="button"
                                                    className="btn btn-info"
                                                    value="View"
                                                    href="#myModal"
                                                    role="button"
                                                    data-bs-toggle="modal"
                                                    onClick={() => ViewTopic(d)}
                                                />
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
            </div >
        </div >
    );
};
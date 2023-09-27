import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";

export const LoginComponent = () => {
    const [admin, setAdmin] = useState([]);
    const [student, setStudent] = useState("");
    const [trainer, setTrainer] = useState("");
    const navigate = useNavigate();
    var email = useRef();
    var password = useRef();

    useEffect(function () {
        GetStudent();
        GetTrainer();
        GetAdmin();
        //value();
    }, []);

    const GetStudent = () => {
        axios.get("http://localhost:9092/api/student")
            .then(response => {
                setStudent(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const GetTrainer = () => {
        axios.get("http://localhost:9092/api/trainer")
            .then(response => {
                setTrainer(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const GetAdmin = () => {
        axios.get("http://localhost:9092/api/admin")
            .then(response => {
                setAdmin(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }



    const Login = () => {
        var em = email.current.value;
        var pass = password.current.value;

        const adminMatch = admin.find(a => a.username === em && a.password === pass)
        const studentMatches = student.find(s => s.email_address === em && s.password === pass);
        const trainerMatches = trainer.find(t => t.email_address === em && t.password === pass);


        if (adminMatch) {
            const adminId = adminMatch.admin_id;
            navigate("/admin/" + adminId);
            // document.cookie = `admin_id=${adminMatch.admin_id}`;
        } else if (studentMatches) {
            const studentID = studentMatches.student_id;
            navigate("/student/" + studentID);
            // trainer_id
            alert("Student");
        } else if (trainerMatches) {
            const trainerId = trainerMatches.trainer_id;
            navigate("/trainer/" + trainerId);
            // alert("Trainer");
        } else {
            alert("Login failed. Invalid credentials.");
        }
    }




    return (
        <div >
            <div className="container-fluid loginsection mt-5 bg-success ">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6 m-auto mt-5">
                            <section style={{ minHeight: "100px" }}>
                                <div className="container py-1">
                                    <div className="row d-flex justify-content-center align-items-center h-60">
                                        <div className="col-md-8">
                                            <div className="card shadow-2-strong" style={{ color: "white", borderRadius: "1rem", fontFamily: "times-new-roman", backgroundColor: "rgba(0,0,0,0.1)" }}>
                                                <div className="card-body p-5">
                                                    <h3 className="mb-2 text-center"><b>Sign in</b></h3>
                                                    <hr />
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="typeEmailX-2" style={{ fontSize: "20px" }}><i class="fa fa-envelope" ></i>&nbsp;&nbsp;Email</label>
                                                        <input type="text" ref={email} className="form-control form-control-lg" />
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="typePasswordX-2" style={{ fontSize: "20px" }}><i class="fa fa-lock" ></i>&nbsp;&nbsp;Password</label>
                                                        <input type="password" ref={password} className="form-control form-control-lg" />
                                                    </div>

                                                    <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={() => Login()}>Login</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

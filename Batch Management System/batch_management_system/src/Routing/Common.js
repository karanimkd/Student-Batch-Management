import React from "react";
import Logo from '../images/Logo.png'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { IndexComponent } from "./IndexComponent";
import { LoginComponent } from "./LoginComponent";
import { Navbar } from "./Navbar"
import { AdminDashboard } from "./Admin/AdminDashboard";
import { AdminCommon } from "./Admin/AdminCommon";
import { StudentCommon } from "./Student/StudentCommon";
import { TrainerCommon } from "./Trainer/TrainerCommon";
import { TrainerRegistration } from "./Admin/TrainerRegistration";
import { AdminCourse } from "./Admin/AdminCourse";
import { AdminTopic } from "./Admin/AdminTopic";
import { AdminContent } from "./Admin/AdminContent";
// import { AdminCourseFee } from "./Admin/AdminCourseFee";
import { StudentCourseDetails } from "./Admin/StudentCourseDetails";
import { StudentRegistration } from "./Admin/StudentRegistration";
import { StudentPayment } from "./Admin/StudentPayment";
import { Student } from "./Admin/Student";

import { TrainerBatch } from "./Trainer/TrainerBatch";
import { TrainerBatchSchedule } from "./Trainer/TrainerBatchSchedule";
import { TrainerBatchStudent } from "./Trainer/TrainerBatchStudent";
import { TrainerBatchScheduleAttendance } from "./Trainer/TrainerBatchScheduleAttendace";
import { TrainerDashboard } from "./Trainer/TrainerDashboard";
import { StudentProfile } from "./Student/StudentProfile";


export const Common = () => {
    return (
        <div>
            <Router>
                <div className="container-fluid ">

                    <div className="container-fluid ">
                        <Routes>

                            <Route path="/" element={<IndexComponent />} />
                            <Route path="/login" element={<LoginComponent />} />
                            <Route path="/admin/:admin_id" element={<AdminCommon />}>
                                <Route path="" element={<AdminDashboard />} />
                                <Route path="admin-student" element={<Student />} />
                                <Route path="admin-student-course" element={<StudentCourseDetails />} />
                                <Route path="admin-student-register" element={<StudentRegistration />} />
                                <Route path="admin-student-payment" element={<StudentPayment />} />
                                <Route path="admin-trainer" element={<TrainerRegistration />} />
                                <Route path="admin-course" element={<AdminCourse />} />
                                <Route path="admin-topic" element={<AdminTopic />} />
                                <Route path="admin-content" element={<AdminContent />} />
                                {/* <Route path="admin-course-fee" element={<AdminCourseFee />} /> */}
                            </Route>
                            <Route path="/trainer/:trainer_id" element={<TrainerCommon />}>
                                <Route path="trainer-profile" element={<TrainerDashboard />} />
                                <Route path="trainer-batch" element={<TrainerBatch />} />
                                <Route path="trainer-batch-student" element={<TrainerBatchStudent />} />
                                <Route path="trainer-batch-schedule-attendance" element={<TrainerBatchScheduleAttendance />} />

                                <Route path="trainer" element={<TrainerBatchStudent />} />
                            </Route>
                            <Route path="/student/:student_id" element={<StudentCommon />}>
                                <Route path="" element={<StudentProfile />} />
                            </Route>
                        </Routes>
                    </div>
                </div >

            </Router >
        </div >
    );
}

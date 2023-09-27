package mypackage.model;

import java.util.List;

import javax.persistence.Column;

public class StudentRegistrationModel {
	
	private int registration_id ;
	private String registration_date;
	private float discount;
	private int student_id;
	private String student_name;
	private String gender;
	private String mobile_number;
	private String email_address;
	private String password;
	private String date;
	private String profile_photo;
	private String qualification;
	private int course_id;
	private String course_name;
	
	private List<StudentPayments>studentpayments;
//	private List<BatchStudents>batchstudent;
	private List<BatchStudentsModel>batchstudent;
	private List<ScheduleAttendance> scheduleattendance;
	public StudentRegistrationModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public StudentRegistrationModel(int registration_id, String registration_date, float discount, int student_id,
			String student_name, String gender, String mobile_number, String email_address, String password,
			String date, String profile_photo, String qualification, int course_id, String course_name,
			List<StudentPayments> studentpayments, List<BatchStudentsModel> batchstudent,
			List<ScheduleAttendance> scheduleattendance) {
		super();
		this.registration_id = registration_id;
		this.registration_date = registration_date;
		this.discount = discount;
		this.student_id = student_id;
		this.student_name = student_name;
		this.gender = gender;
		this.mobile_number = mobile_number;
		this.email_address = email_address;
		this.password = password;
		this.date = date;
		this.profile_photo = profile_photo;
		this.qualification = qualification;
		this.course_id = course_id;
		this.course_name = course_name;
		this.studentpayments = studentpayments;
		this.batchstudent = batchstudent;
		this.scheduleattendance = scheduleattendance;
	}
	public int getRegistration_id() {
		return registration_id;
	}
	public void setRegistration_id(int registration_id) {
		this.registration_id = registration_id;
	}
	public String getRegistration_date() {
		return registration_date;
	}
	public void setRegistration_date(String registration_date) {
		this.registration_date = registration_date;
	}
	public float getDiscount() {
		return discount;
	}
	public void setDiscount(float discount) {
		this.discount = discount;
	}
	public int getStudent_id() {
		return student_id;
	}
	public void setStudent_id(int student_id) {
		this.student_id = student_id;
	}
	public String getStudent_name() {
		return student_name;
	}
	public void setStudent_name(String student_name) {
		this.student_name = student_name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getMobile_number() {
		return mobile_number;
	}
	public void setMobile_number(String mobile_number) {
		this.mobile_number = mobile_number;
	}
	public String getEmail_address() {
		return email_address;
	}
	public void setEmail_address(String email_address) {
		this.email_address = email_address;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getProfile_photo() {
		return profile_photo;
	}
	public void setProfile_photo(String profile_photo) {
		this.profile_photo = profile_photo;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public int getCourse_id() {
		return course_id;
	}
	public void setCourse_id(int course_id) {
		this.course_id = course_id;
	}
	public String getCourse_name() {
		return course_name;
	}
	public void setCourse_name(String course_name) {
		this.course_name = course_name;
	}
	public List<StudentPayments> getStudentpayments() {
		return studentpayments;
	}
	public void setStudentpayments(List<StudentPayments> studentpayments) {
		this.studentpayments = studentpayments;
	}
	public List<BatchStudentsModel> getBatchstudent() {
		return batchstudent;
	}
	public void setBatchstudent(List<BatchStudentsModel> batchstudent) {
		this.batchstudent = batchstudent;
	}
	public List<ScheduleAttendance> getScheduleattendance() {
		return scheduleattendance;
	}
	public void setScheduleattendance(List<ScheduleAttendance> scheduleattendance) {
		this.scheduleattendance = scheduleattendance;
	}
	
	
}

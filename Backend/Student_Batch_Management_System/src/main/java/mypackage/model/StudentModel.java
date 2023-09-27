package mypackage.model;

import java.util.ArrayList;
import java.util.List;



public class StudentModel {
	private int student_id;
	private String student_name;
	private String gender;
	private String mobile_number;
	private String email_address;
	private String password;
	private String date;
	private String profile_photo;
	private String qualification;
	private List<StudentRegistrationModel>studentregistrations; 
	private List<BatchStudents> batchstudents;
	
	public StudentModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public StudentModel(int student_id, String student_name, String gender, String mobile_number, String email_address,
			String password, String date, String profile_photo, String qualification,
			List<StudentRegistrationModel> studentregistrations, List<BatchStudents> batchstudents) {
		super();
		this.student_id = student_id;
		this.student_name = student_name;
		this.gender = gender;
		this.mobile_number = mobile_number;
		this.email_address = email_address;
		this.password = password;
		this.date = date;
		this.profile_photo = profile_photo;
		this.qualification = qualification;
		this.studentregistrations = studentregistrations;
		this.batchstudents = batchstudents;
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
	public List<StudentRegistrationModel> getStudentregistrations() {
		return studentregistrations;
	}
	public void setStudentregistrations(List<StudentRegistrationModel> studentregistrations) {
		this.studentregistrations = studentregistrations;
	}
	public List<BatchStudents> getBatchstudents() {
		return batchstudents;
	}
	public void setBatchstudents(List<BatchStudents> batchstudents) {
		this.batchstudents = batchstudents;
	}
	
}

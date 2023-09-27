package mypackage.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tblstudent_details")
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int student_id;
	private String student_name;
	private String gender;
	private String mobile_number;
	@Column(unique = true, nullable = false)
	private String email_address;
	private String password;
	private String date;
	private String profile_photo;
	private String qualification;
	
	
	@OneToMany(mappedBy = "student" ,fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JsonIgnoreProperties("student")
	private List<StudentRegistration>studentregistrations;


	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Student(int student_id, String student_name, String gender, String mobile_number, String email_address,
			String password, String date, String profile_photo, String qualification,
			List<StudentRegistration> studentregistrations) {
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


	public List<StudentRegistration> getStudentregistrations() {
		return studentregistrations;
	}


	public void setStudentregistrations(List<StudentRegistration> studentregistrations) {
		this.studentregistrations = studentregistrations;
	}

	
}

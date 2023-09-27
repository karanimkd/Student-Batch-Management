package mypackage.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@Entity
@Table(name= "tblstudent_registration")
public class StudentRegistration {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int registration_id ;
	private String registration_date;
	private float discount;

	
	@OneToMany(mappedBy = "studentpayment",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JsonIgnoreProperties("studentpayment")
	private List<StudentPayments>studentpayments;
	
	@OneToMany(mappedBy = "resgisterstudent",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JsonIgnoreProperties("resgisterstudent")
	private List<BatchStudents>batchstudent;
	
	@OneToMany(mappedBy = "scheduleattendanceregistration", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnoreProperties("scheduleattendanceregistration")
	private List<ScheduleAttendance> scheduleattendance;
	
	@ManyToOne(fetch = FetchType.LAZY,optional = false)
	@JoinColumn(name="student_id")
	private Student student;
	
	@ManyToOne(fetch =FetchType.LAZY,optional = false)
	@JoinColumn(name="course_id")
	private TrainingCourses trainingcourse;

	public StudentRegistration() {
		super();
		// TODO Auto-generated constructor stub
	}

	public StudentRegistration(int registration_id, String registration_date, float discount,
			List<StudentPayments> studentpayments, List<BatchStudents> batchstudent,
			List<ScheduleAttendance> scheduleattendance, Student student, TrainingCourses trainingcourse) {
		super();
		this.registration_id = registration_id;
		this.registration_date = registration_date;
		this.discount = discount;
		this.studentpayments = studentpayments;
		this.batchstudent = batchstudent;
		this.scheduleattendance = scheduleattendance;
		this.student = student;
		this.trainingcourse = trainingcourse;
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

	public List<StudentPayments> getStudentpayments() {
		return studentpayments;
	}

	public void setStudentpayments(List<StudentPayments> studentpayments) {
		this.studentpayments = studentpayments;
	}

	public List<BatchStudents> getBatchstudent() {
		return batchstudent;
	}

	public void setBatchstudent(List<BatchStudents> batchstudent) {
		this.batchstudent = batchstudent;
	}

	public List<ScheduleAttendance> getScheduleattendance() {
		return scheduleattendance;
	}

	public void setScheduleattendance(List<ScheduleAttendance> scheduleattendance) {
		this.scheduleattendance = scheduleattendance;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public TrainingCourses getTrainingcourse() {
		return trainingcourse;
	}

	public void setTrainingcourse(TrainingCourses trainingcourse) {
		this.trainingcourse = trainingcourse;
	}

	
}

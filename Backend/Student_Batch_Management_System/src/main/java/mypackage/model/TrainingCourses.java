package mypackage.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tbltraining_courses")
public class TrainingCourses {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int course_id;
	
	@Column(unique = true, nullable = false)
	private String course_name; 
	
	@OneToMany(mappedBy = "coursefees",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JsonIgnoreProperties("coursefees")
	private List<TrainingCourseFees>coursefees;
	
	@OneToMany(mappedBy = "trainingcourse",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JsonIgnoreProperties("trainingcourse")
	private List<StudentRegistration>studentregistration;

	public TrainingCourses() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TrainingCourses(int course_id, String course_name, List<TrainingCourseFees> coursefees,
			List<StudentRegistration> studentregistration) {
		super();
		this.course_id = course_id;
		this.course_name = course_name;
		this.coursefees = coursefees;
		this.studentregistration = studentregistration;
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

	public List<TrainingCourseFees> getCoursefees() {
		return coursefees;
	}

	public void setCoursefees(List<TrainingCourseFees> coursefees) {
		this.coursefees = coursefees;
	}

	public List<StudentRegistration> getStudentregistration() {
		return studentregistration;
	}

	public void setStudentregistration(List<StudentRegistration> studentregistration) {
		this.studentregistration = studentregistration;
	}
	
	
}

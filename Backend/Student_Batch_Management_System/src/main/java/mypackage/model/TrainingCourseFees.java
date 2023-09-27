package mypackage.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tbltraining_courses_fees")
public class TrainingCourseFees {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int fee_id;
	
	private float fees_amount;
	private float gst;
	private String fee_mode;
	
	@ManyToOne(fetch = FetchType.LAZY,optional = false)
	@JoinColumn(name = "course_id")
	private TrainingCourses coursefees;

	public TrainingCourseFees() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TrainingCourseFees(int fee_id, float fees_amount, float gst, String fee_mode, TrainingCourses coursefees) {
		super();
		this.fee_id = fee_id;
		this.fees_amount = fees_amount;
		this.gst = gst;
		this.fee_mode = fee_mode;
		this.coursefees = coursefees;
	}

	public int getFee_id() {
		return fee_id;
	}

	public void setFee_id(int fee_id) {
		this.fee_id = fee_id;
	}

	public float getFees_amount() {
		return fees_amount;
	}

	public void setFees_amount(float fees_amount) {
		this.fees_amount = fees_amount;
	}

	public float getGst() {
		return gst;
	}

	public void setGst(float gst) {
		this.gst = gst;
	}

	public String getFee_mode() {
		return fee_mode;
	}

	public void setFee_mode(String fee_mode) {
		this.fee_mode = fee_mode;
	}

	public TrainingCourses getCoursefees() {
		return coursefees;
	}

	public void setCoursefees(TrainingCourses coursefees) {
		this.coursefees = coursefees;
	}
	
	
}

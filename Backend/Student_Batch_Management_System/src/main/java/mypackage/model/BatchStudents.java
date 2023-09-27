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
@Table(name = "tblbatch_students")
public class BatchStudents {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int batch_student_id;
	
	@ManyToOne(fetch =FetchType.LAZY,optional = false )
	@JoinColumn(name = "batch_id")
	private Batch batchdetails;
	
	@ManyToOne(fetch =FetchType.LAZY,optional = false )
	@JoinColumn(name ="registration_id ")
	private StudentRegistration resgisterstudent;

	public BatchStudents() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BatchStudents(int batch_student_id, Batch batchdetails, StudentRegistration resgisterstudent) {
		super();
		this.batch_student_id = batch_student_id;
		this.batchdetails = batchdetails;
		this.resgisterstudent = resgisterstudent;
	}

	public int getBatch_student_id() {
		return batch_student_id;
	}

	public void setBatch_student_id(int batch_student_id) {
		this.batch_student_id = batch_student_id;
	}

	public Batch getBatchdetails() {
		return batchdetails;
	}

	public void setBatchdetails(Batch batchdetails) {
		this.batchdetails = batchdetails;
	}

	public StudentRegistration getResgisterstudent() {
		return resgisterstudent;
	}

	public void setResgisterstudent(StudentRegistration resgisterstudent) {
		this.resgisterstudent = resgisterstudent;
	}

	
}

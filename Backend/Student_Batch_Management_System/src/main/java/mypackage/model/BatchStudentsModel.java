package mypackage.model;

public class BatchStudentsModel {
	
	private int batch_student_id;
	private int batch_id;
	private int registration_id;
	
	
	public BatchStudentsModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BatchStudentsModel(int batch_student_id, int batch_id, int registration_id) {
		super();
		this.batch_student_id = batch_student_id;
		this.batch_id = batch_id;
		this.registration_id = registration_id;
	}
	public int getBatch_student_id() {
		return batch_student_id;
	}
	public void setBatch_student_id(int batch_student_id) {
		this.batch_student_id = batch_student_id;
	}
	public int getBatch_id() {
		return batch_id;
	}
	public void setBatch_id(int batch_id) {
		this.batch_id = batch_id;
	}
	public int getRegistration_id() {
		return registration_id;
	}
	public void setRegistration_id(int registration_id) {
		this.registration_id = registration_id;
	}
	
	
	
}

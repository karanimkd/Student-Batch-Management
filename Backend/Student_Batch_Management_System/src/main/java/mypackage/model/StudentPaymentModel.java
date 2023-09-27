package mypackage.model;

public class StudentPaymentModel {
	
	private int payment_id;
	private String payment_date;
	private float payment_amount;
	private String payment_mode;
	private String payment_description;
	private int registration_id;
	
	
	public StudentPaymentModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public StudentPaymentModel(int payment_id, String payment_date, float payment_amount, String payment_mode,
			String payment_description, int registration_id) {
		super();
		this.payment_id = payment_id;
		this.payment_date = payment_date;
		this.payment_amount = payment_amount;
		this.payment_mode = payment_mode;
		this.payment_description = payment_description;
		this.registration_id = registration_id;
	}
	public int getPayment_id() {
		return payment_id;
	}
	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}
	public String getPayment_date() {
		return payment_date;
	}
	public void setPayment_date(String payment_date) {
		this.payment_date = payment_date;
	}
	public float getPayment_amount() {
		return payment_amount;
	}
	public void setPayment_amount(float payment_amount) {
		this.payment_amount = payment_amount;
	}
	public String getPayment_mode() {
		return payment_mode;
	}
	public void setPayment_mode(String payment_mode) {
		this.payment_mode = payment_mode;
	}
	public String getPayment_description() {
		return payment_description;
	}
	public void setPayment_description(String payment_description) {
		this.payment_description = payment_description;
	}
	public int getRegistration_id() {
		return registration_id;
	}
	public void setRegistration_id(int registration_id) {
		this.registration_id = registration_id;
	}
	
	
}

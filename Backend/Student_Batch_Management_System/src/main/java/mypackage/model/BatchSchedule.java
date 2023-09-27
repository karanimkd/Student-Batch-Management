package mypackage.model;

import java.util.List;

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

@Entity
@Table(name = "tblbatch_schedule")
public class BatchSchedule {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int batch_schedule_id;
	private String expected_date;
	private String actual_date;
	
	@OneToMany(mappedBy = "batchscheduleattendance", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JsonIgnoreProperties("batchscheduleattendance")
	private List<BatchScheduleAttendance> attendance;
	
	@ManyToOne(fetch = FetchType.LAZY,optional = false)
	@JoinColumn(name = "batch_id")
	private Batch batchschedule;
	
	@ManyToOne(fetch = FetchType.LAZY,optional = false)
	@JoinColumn(name = "content_id")
	private TopicContent batchschedulecontent;

	public BatchSchedule() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BatchSchedule(int batch_schedule_id, String expected_date, String actual_date,
			List<BatchScheduleAttendance> attendance, Batch batchschedule, TopicContent batchschedulecontent) {
		super();
		this.batch_schedule_id = batch_schedule_id;
		this.expected_date = expected_date;
		this.actual_date = actual_date;
		this.attendance = attendance;
		this.batchschedule = batchschedule;
		this.batchschedulecontent = batchschedulecontent;
	}

	public int getBatch_schedule_id() {
		return batch_schedule_id;
	}

	public void setBatch_schedule_id(int batch_schedule_id) {
		this.batch_schedule_id = batch_schedule_id;
	}

	public String getExpected_date() {
		return expected_date;
	}

	public void setExpected_date(String expected_date) {
		this.expected_date = expected_date;
	}

	public String getActual_date() {
		return actual_date;
	}

	public void setActual_date(String actual_date) {
		this.actual_date = actual_date;
	}

	public List<BatchScheduleAttendance> getAttendance() {
		return attendance;
	}

	public void setAttendance(List<BatchScheduleAttendance> attendance) {
		this.attendance = attendance;
	}

	public Batch getBatchschedule() {
		return batchschedule;
	}

	public void setBatchschedule(Batch batchschedule) {
		this.batchschedule = batchschedule;
	}

	public TopicContent getBatchschedulecontent() {
		return batchschedulecontent;
	}

	public void setBatchschedulecontent(TopicContent batchschedulecontent) {
		this.batchschedulecontent = batchschedulecontent;
	}
	
	
}

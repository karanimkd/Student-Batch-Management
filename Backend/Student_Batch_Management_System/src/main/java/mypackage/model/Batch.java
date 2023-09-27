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
@Table(name = "tblbatches")
public class Batch {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int batch_id;
	private String batch_name;
	private String start_date;
	private String end_date;
	private String batch_time;
	private String status;
	
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "topic_id")
	private TrainingTopics trainingtopicsbatch;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "trainer_id")
	private Trainer trainerbatchs;
	
	
	@OneToMany(mappedBy = "batchdetails", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnoreProperties("batchdetails")
	private List<BatchStudents> batch;
	
	@OneToMany(mappedBy = "batchschedule", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnoreProperties("batchschedule")
	private List<BatchSchedule> batchschedules;

	public Batch() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Batch(int batch_id, String batch_name, String start_date, String end_date, String batch_time, String status,
			TrainingTopics trainingtopicsbatch, Trainer trainerbatchs, List<BatchStudents> batch,
			List<BatchSchedule> batchschedules) {
		super();
		this.batch_id = batch_id;
		this.batch_name = batch_name;
		this.start_date = start_date;
		this.end_date = end_date;
		this.batch_time = batch_time;
		this.status = status;
		this.trainingtopicsbatch = trainingtopicsbatch;
		this.trainerbatchs = trainerbatchs;
		this.batch = batch;
		this.batchschedules = batchschedules;
	}

	public int getBatch_id() {
		return batch_id;
	}

	public void setBatch_id(int batch_id) {
		this.batch_id = batch_id;
	}

	public String getBatch_name() {
		return batch_name;
	}

	public void setBatch_name(String batch_name) {
		this.batch_name = batch_name;
	}

	public String getStart_date() {
		return start_date;
	}

	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}

	public String getEnd_date() {
		return end_date;
	}

	public void setEnd_date(String end_date) {
		this.end_date = end_date;
	}

	public String getBatch_time() {
		return batch_time;
	}

	public void setBatch_time(String batch_time) {
		this.batch_time = batch_time;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public TrainingTopics getTrainingtopicsbatch() {
		return trainingtopicsbatch;
	}

	public void setTrainingtopicsbatch(TrainingTopics trainingtopicsbatch) {
		this.trainingtopicsbatch = trainingtopicsbatch;
	}

	public Trainer getTrainerbatchs() {
		return trainerbatchs;
	}

	public void setTrainerbatchs(Trainer trainerbatchs) {
		this.trainerbatchs = trainerbatchs;
	}

	public List<BatchStudents> getBatch() {
		return batch;
	}

	public void setBatch(List<BatchStudents> batch) {
		this.batch = batch;
	}

	public List<BatchSchedule> getBatchschedules() {
		return batchschedules;
	}

	public void setBatchschedules(List<BatchSchedule> batchschedules) {
		this.batchschedules = batchschedules;
	}
	
	
	
	
	
}

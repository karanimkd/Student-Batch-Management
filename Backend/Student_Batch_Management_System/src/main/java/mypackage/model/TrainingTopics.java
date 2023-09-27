package mypackage.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import mypackage.model.*;

@Entity
@Table(name = "tbltraining_topics")
public class TrainingTopics {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int topic_id;
	
	@Column(unique = true, nullable = false)
	private String topic_name;
	
	@OneToMany(mappedBy = "trainertopics" ,cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	@JsonIgnoreProperties("trainertopics")
	private List<TrainerTopics>trainertopic;
	
	@OneToMany(mappedBy = "trainingtopicsbatch" ,cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	@JsonIgnoreProperties("trainingtopicsbatch")
	private List<Batch>batch;

	public TrainingTopics() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TrainingTopics(int topic_id, String topic_name, List<TrainerTopics> trainertopic, List<Batch> batch) {
		super();
		this.topic_id = topic_id;
		this.topic_name = topic_name;
		this.trainertopic = trainertopic;
		this.batch = batch;
	}

	public int getTopic_id() {
		return topic_id;
	}

	public void setTopic_id(int topic_id) {
		this.topic_id = topic_id;
	}

	public String getTopic_name() {
		return topic_name;
	}

	public void setTopic_name(String topic_name) {
		this.topic_name = topic_name;
	}

	public List<TrainerTopics> getTrainertopic() {
		return trainertopic;
	}

	public void setTrainertopic(List<TrainerTopics> trainertopic) {
		this.trainertopic = trainertopic;
	}

	public List<Batch> getBatch() {
		return batch;
	}

	public void setBatch(List<Batch> batch) {
		this.batch = batch;
	}
	
	
	
	
	
	

}

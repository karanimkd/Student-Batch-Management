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
@Table(name = "tbltopic_contents")
public class TopicContent {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int content_id;
	
	private String content_name;
	
	@ManyToOne(fetch =FetchType.LAZY,optional = false)
	@JoinColumn(name = "topic_id")
	private TrainingTopics trainingtopic;
	
	
	@OneToMany(mappedBy ="batchschedulecontent",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JsonIgnoreProperties("batchschedulecontent")
	private List<BatchSchedule> batchschedule;


	public TopicContent() {
		super();
		// TODO Auto-generated constructor stub
	}


	public TopicContent(int content_id, String content_name, TrainingTopics trainingtopic,
			List<BatchSchedule> batchschedule) {
		super();
		this.content_id = content_id;
		this.content_name = content_name;
		this.trainingtopic = trainingtopic;
		this.batchschedule = batchschedule;
	}


	public int getContent_id() {
		return content_id;
	}


	public void setContent_id(int content_id) {
		this.content_id = content_id;
	}


	public String getContent_name() {
		return content_name;
	}


	public void setContent_name(String content_name) {
		this.content_name = content_name;
	}


	public TrainingTopics getTrainingtopic() {
		return trainingtopic;
	}


	public void setTrainingtopic(TrainingTopics trainingtopic) {
		this.trainingtopic = trainingtopic;
	}


	public List<BatchSchedule> getBatchschedule() {
		return batchschedule;
	}


	public void setBatchschedule(List<BatchSchedule> batchschedule) {
		this.batchschedule = batchschedule;
	}

}

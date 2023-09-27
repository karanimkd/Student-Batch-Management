package mypackage.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class TrainingTopicModel {

	private int topic_id;
	private String topic_name;
	private int tainer_topic_id;
	private int batch_id;
	
	public TrainingTopicModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public TrainingTopicModel(int topic_id, String topic_name, int tainer_topic_id, int batch_id) {
		super();
		this.topic_id = topic_id;
		this.topic_name = topic_name;
		this.tainer_topic_id = tainer_topic_id;
		this.batch_id = batch_id;
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
	public int getTainer_topic_id() {
		return tainer_topic_id;
	}
	public void setTainer_topic_id(int tainer_topic_id) {
		this.tainer_topic_id = tainer_topic_id;
	}
	public int getBatch_id() {
		return batch_id;
	}
	public void setBatch_id(int batch_id) {
		this.batch_id = batch_id;
	}

}

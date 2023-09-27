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
@Table(name = "tbltrainer_topics")
public class TrainerTopics {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int tainer_topic_id;

	
	@ManyToOne(fetch = FetchType.LAZY,optional = false)
	@JoinColumn(name = "topic_id")
	private TrainingTopics trainertopics;
	
	@ManyToOne(fetch = FetchType.LAZY,optional = false)
	@JoinColumn(name = "trainer_id")
	private Trainer trainers;

	public TrainerTopics() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TrainerTopics(int tainer_topic_id, TrainingTopics trainertopics, Trainer trainers) {
		super();
		this.tainer_topic_id = tainer_topic_id;
		this.trainertopics = trainertopics;
		this.trainers = trainers;
	}

	public int getTainer_topic_id() {
		return tainer_topic_id;
	}

	public void setTainer_topic_id(int tainer_topic_id) {
		this.tainer_topic_id = tainer_topic_id;
	}

	public TrainingTopics getTrainertopics() {
		return trainertopics;
	}

	public void setTrainertopics(TrainingTopics trainertopics) {
		this.trainertopics = trainertopics;
	}

	public Trainer getTrainers() {
		return trainers;
	}

	public void setTrainers(Trainer trainers) {
		this.trainers = trainers;
	}
}

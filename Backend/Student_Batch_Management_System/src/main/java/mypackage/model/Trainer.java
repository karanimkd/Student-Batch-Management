package mypackage.model;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tbltrainers")
public class Trainer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int trainer_id;
	private String trainer_name;
	private String qualification;
	@Column(unique = true, nullable = false)
	private String email_address;
	private String password;
	private String mobile_number;
	
	@OneToMany(mappedBy = "trainers",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnoreProperties("trainers")
	private List<TrainerTopics> trainertopic;
	
	@OneToMany(mappedBy = "trainerbatchs",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JsonIgnoreProperties("trainerbatchs")
	private List<Batch> batch;

	public Trainer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Trainer(int trainer_id, String trainer_name, String qualification, String email_address, String password,
			String mobile_number, List<TrainerTopics> trainertopic, List<Batch> batch) {
		super();
		this.trainer_id = trainer_id;
		this.trainer_name = trainer_name;
		this.qualification = qualification;
		this.email_address = email_address;
		this.password = password;
		this.mobile_number = mobile_number;
		this.trainertopic = trainertopic;
		this.batch = batch;
	}

	public int getTrainer_id() {
		return trainer_id;
	}

	public void setTrainer_id(int trainer_id) {
		this.trainer_id = trainer_id;
	}

	public String getTrainer_name() {
		return trainer_name;
	}

	public void setTrainer_name(String trainer_name) {
		this.trainer_name = trainer_name;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getEmail_address() {
		return email_address;
	}

	public void setEmail_address(String email_address) {
		this.email_address = email_address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobile_number() {
		return mobile_number;
	}

	public void setMobile_number(String mobile_number) {
		this.mobile_number = mobile_number;
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

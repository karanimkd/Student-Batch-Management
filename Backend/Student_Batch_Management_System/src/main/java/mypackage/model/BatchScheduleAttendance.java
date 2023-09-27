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
@Table(name = "tblbatch_schedule_attendance")
public class BatchScheduleAttendance {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int schedule_attendance_id;
	private String attendance_date;
	
	@ManyToOne(fetch = FetchType.LAZY,optional = false)
	@JoinColumn(name = "batch_schedule_id")
	private BatchSchedule batchscheduleattendance;
	
	@OneToMany(mappedBy = "scheduleattendance",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JsonIgnoreProperties("scheduleattendance")
	private List<ScheduleAttendance> scheduleattendances;
}

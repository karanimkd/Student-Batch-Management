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
@Table(name = "tblschedule_attendance")
public class ScheduleAttendance {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int attendance_id;
	private int is_present;

	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "schedule_attendance_id")
	private BatchScheduleAttendance scheduleattendance;
	
	@ManyToOne(fetch = FetchType.LAZY,optional = false)
	@JoinColumn(name = "registration_id")
	private StudentRegistration scheduleattendanceregistration;

	public ScheduleAttendance() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ScheduleAttendance(int attendance_id, int is_present, BatchScheduleAttendance scheduleattendance,
			StudentRegistration scheduleattendanceregistration) {
		super();
		this.attendance_id = attendance_id;
		this.is_present = is_present;
		this.scheduleattendance = scheduleattendance;
		this.scheduleattendanceregistration = scheduleattendanceregistration;
	}

	public int getAttendance_id() {
		return attendance_id;
	}

	public void setAttendance_id(int attendance_id) {
		this.attendance_id = attendance_id;
	}

	public int getIs_present() {
		return is_present;
	}

	public void setIs_present(int is_present) {
		this.is_present = is_present;
	}

	public BatchScheduleAttendance getScheduleattendance() {
		return scheduleattendance;
	}

	public void setScheduleattendance(BatchScheduleAttendance scheduleattendance) {
		this.scheduleattendance = scheduleattendance;
	}

	public StudentRegistration getScheduleattendanceregistration() {
		return scheduleattendanceregistration;
	}

	public void setScheduleattendanceregistration(StudentRegistration scheduleattendanceregistration) {
		this.scheduleattendanceregistration = scheduleattendanceregistration;
	}

	
}

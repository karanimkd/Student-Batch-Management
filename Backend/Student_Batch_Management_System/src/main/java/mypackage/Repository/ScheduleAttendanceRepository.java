package mypackage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.ScheduleAttendance;

public interface ScheduleAttendanceRepository extends JpaRepository<ScheduleAttendance, Integer>{

}

package mypackage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.BatchScheduleAttendance;

public interface BatchScheduleAttendanceRepository extends JpaRepository<BatchScheduleAttendance, Integer>{

}

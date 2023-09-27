package mypackage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.BatchSchedule;

public interface BatchScheduleRepository extends JpaRepository<BatchSchedule, Integer>{

}

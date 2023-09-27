package mypackage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.TrainingCourseFees;

public interface TrainingCourseFeesRepository extends JpaRepository<TrainingCourseFees, Integer>{

}

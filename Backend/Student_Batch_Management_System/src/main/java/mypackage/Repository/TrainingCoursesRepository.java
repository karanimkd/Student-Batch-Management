package mypackage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.TrainingCourses;

public interface TrainingCoursesRepository extends JpaRepository<TrainingCourses, Integer>{

}

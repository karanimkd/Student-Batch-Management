package mypackage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.BatchStudents;

public interface BatchStudentRepository extends JpaRepository<BatchStudents, Integer>{

}

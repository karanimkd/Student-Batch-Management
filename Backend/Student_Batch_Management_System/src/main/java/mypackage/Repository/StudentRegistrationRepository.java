package mypackage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.StudentRegistration;

public interface StudentRegistrationRepository extends JpaRepository<StudentRegistration, Integer>{

}

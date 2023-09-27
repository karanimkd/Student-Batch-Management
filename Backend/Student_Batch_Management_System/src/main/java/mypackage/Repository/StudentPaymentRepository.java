package mypackage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.StudentPayments;

public interface StudentPaymentRepository extends JpaRepository<StudentPayments, Integer>{

}

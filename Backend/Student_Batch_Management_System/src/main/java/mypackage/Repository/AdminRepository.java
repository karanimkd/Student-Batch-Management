package mypackage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

}

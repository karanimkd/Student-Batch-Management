package mypackage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.Batch;

public interface BatchRepository extends JpaRepository<Batch, Integer> {

}

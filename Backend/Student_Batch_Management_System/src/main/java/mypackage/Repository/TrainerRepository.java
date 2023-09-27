package mypackage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.Trainer;

public interface TrainerRepository extends JpaRepository<Trainer, Integer>{

}

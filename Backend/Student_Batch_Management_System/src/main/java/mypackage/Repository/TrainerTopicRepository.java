package mypackage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.TrainerTopics;

public interface TrainerTopicRepository extends JpaRepository<TrainerTopics, Integer> {

}

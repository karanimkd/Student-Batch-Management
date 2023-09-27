package mypackage.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import mypackage.model.TopicContent;

public interface TopicContentRepository extends JpaRepository<TopicContent, Integer>{

}

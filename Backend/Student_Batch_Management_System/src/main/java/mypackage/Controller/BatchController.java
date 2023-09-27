package mypackage.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import mypackage.Services.BatchService;
import mypackage.model.*;

@RestController
@CrossOrigin(origins="*",allowedHeaders = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE} )
public class BatchController {
	
	@Autowired
	BatchService bservice;
	
//	=======================================ADMIN========================================
	@GetMapping("api/admin")
	public List<Admin> GetAdmins(){
		return bservice.GetAdmin();
	}
//	=======================================Student========================================
	@GetMapping("api/student")
	public List<Student> GetStudent(){
		return bservice.GetStudents();
	}
	
	@GetMapping("api/student/{student_id}")
	public StudentModel GetStudentbyid(@PathVariable("student_id") int id){
		return bservice.GetStudentById(id);
	}
	
	
	@PostMapping("api/student")
	public Student AddStudent(@RequestBody Student st ) {
		return bservice.AddorUpdateStudent(st);
	}

	@DeleteMapping("api/student/{student_id}")
		public Student DeleteStudent(@PathVariable("student_id") int id) { 
		return bservice.DeleteStudent(id);
	}

//	@PostMapping("api/registerstudent")
//	public StudentRegistration RegisterStudent(@RequestBody StudentRegistration sr ) {
//		return bservice.AddorUpdateRegistration(sr);
//	}
	
	@GetMapping("api/registerstudent")
	public List<StudentRegistrationModel>getstudentregister(){
		return bservice.getRegisterData();
	}
	
	
	@GetMapping("api/registerstudent/{registration_id}")
	public StudentRegistrationModel getstudentregisterbyid(@PathVariable("registration_id") int id){
		return bservice.GetRegisterdatabyid(id);
	}
	
	@PostMapping("api/registerstudent")
	public StudentRegistration RegisterStudents(@RequestBody StudentRegistration sr) {
				return bservice.RegisterStudent(sr);
	}
	
	@GetMapping("api/studentpayments")
	public List<StudentPaymentModel> GetPaymentsdetailss(){
		return bservice.GetPaymentsdetails();
	}
	
	
//	=======================================Trainer========================================

	@GetMapping("api/trainer")
	public List<Trainer> Gettrainers(){
		return bservice.GetTrainer();
	}
	
	@PostMapping("api/trainer")
	public Trainer AddTrainer(@RequestBody Trainer Tr) {
		return bservice.AddOrUpdateTrainer(Tr);
	}
//	======================================= Batch ========================================
	@GetMapping("api/batch")
	public List<Batch>GetBatches(){
		return bservice.GetBatchData();
	}
	
//	=======================================Course========================================	
	@GetMapping("api/course")
	public List<TrainingCourses> GetCourse(){
		return bservice.GetCourses();
	}
	
	
	

	public TrainingCourses AddCourseDetail(@RequestBody TrainingCourses TC) {
		return bservice.AddCourse(TC);
	}

	
//	======================================= Topic ========================================	
	
	
	@GetMapping("api/topic")
	public List<TrainingTopics>GetTopicsDetails(){
		return bservice.GetTopics();
	}
	
	@PostMapping("api/topic")
	public TrainingTopics AddTopicsdetials(@RequestBody TrainingTopics tp) {
		return bservice.AddorUpdateTopics(tp);
	}
	
	@PutMapping("api/topic")
	public TrainingTopics UpdateTopicsdetials(@RequestBody TrainingTopics tp) {
		return bservice.AddorUpdateTopics(tp);
	}
	
	@GetMapping("api/topic/{topic_id}")
	public TrainingTopics GetTopicsbyid(@PathVariable("topic_id")int id) {
		return bservice.GetTopicsbyid(id);
	}
	
	@DeleteMapping("api/topic/{topic_id}")
	public TrainingTopics DeleteTopics(@PathVariable("topic_id")int id) {
		return bservice.DeleteTopic(id);
	}
	
//	=======================================Trainer Topic========================================	
	
}
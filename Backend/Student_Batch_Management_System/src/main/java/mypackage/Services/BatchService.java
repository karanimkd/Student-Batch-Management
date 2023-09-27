package mypackage.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import mypackage.Repository.AdminRepository;
import mypackage.Repository.BatchRepository;
import mypackage.Repository.BatchScheduleAttendanceRepository;
import mypackage.Repository.BatchScheduleRepository;
import mypackage.Repository.BatchStudentRepository;
import mypackage.Repository.ScheduleAttendanceRepository;
import mypackage.Repository.StudentPaymentRepository;
import mypackage.Repository.StudentRegistrationRepository;
import mypackage.Repository.StudentRepository;
import mypackage.Repository.TopicContentRepository;
import mypackage.Repository.TrainerRepository;
import mypackage.Repository.TrainerTopicRepository;
import mypackage.Repository.TrainigTopicsRepository;
import mypackage.Repository.TrainingCourseFeesRepository;
import mypackage.Repository.TrainingCoursesRepository;
import mypackage.model.Admin;
import mypackage.model.Batch;
import mypackage.model.BatchStudents;
import mypackage.model.BatchStudentsModel;

import mypackage.model.ScheduleAttendance;
import mypackage.model.Student;
import mypackage.model.StudentModel;
import mypackage.model.StudentPaymentModel;
import mypackage.model.StudentPayments;
import mypackage.model.StudentRegistration;
import mypackage.model.StudentRegistrationModel;
import mypackage.model.Trainer;
import mypackage.model.TrainerTopics;
import mypackage.model.TrainingCourseFees;
import mypackage.model.TrainingCourses;
import mypackage.model.TrainingTopicModel;
import mypackage.model.TrainingTopics;

@Service
public class BatchService {
		
		@Autowired
		AdminRepository adminrepo;
		@Autowired
		StudentRepository srepo;
		@Autowired
		StudentPaymentRepository studpayrepo;
		@Autowired
		StudentRegistrationRepository studregrepo;
		
		@Autowired
		BatchRepository brepo;
		@Autowired
		BatchScheduleAttendanceRepository bsarepo;
		@Autowired
		BatchScheduleRepository bschedrepo;
		@Autowired
		BatchStudentRepository bstudrepo;
		
		@Autowired
		ScheduleAttendanceRepository schedattrepo;
		
		@Autowired
		TopicContentRepository tcrepo;
		
		@Autowired
		TrainerRepository trepo;
		@Autowired
		TrainerTopicRepository ttrepo;
		
		@Autowired
		TrainigTopicsRepository ttprepo;
		@Autowired
		TrainingCourseFeesRepository trainfeesrepo;
		@Autowired
		TrainingCoursesRepository traincourserepo;
	
	
	

	//	=======================================ADMIN========================================
	
	public List<Admin> GetAdmin() {
		return adminrepo.findAll();
	}
//	=======================================STUDENT========================================
	public List<Student> GetStudents(){
		List<Student> lst = new ArrayList<Student>();
		
		for(Student st: srepo.findAll()) {
			Student sd = new Student(st.getStudent_id(), st.getStudent_name(), st.getGender(), st.getMobile_number(), st.getEmail_address(), st.getPassword(), st.getDate(), st.getProfile_photo(), st.getQualification(), null);
			lst.add(sd);
		}
		return lst;
	}
	
	public StudentModel GetStudentById(int id) {
	    Student st = srepo.findById(id).orElse(null);

	  
	        List<StudentRegistrationModel> srlst = new ArrayList<StudentRegistrationModel>();

	        for (StudentRegistration s : studregrepo.findAll()) {
	            if (st.getStudent_id() == s.getStudent().getStudent_id()) {
	               
	                List<StudentPayments> splist = new ArrayList<StudentPayments>();
	                for (StudentPayments sp : studpayrepo.findAll()) {
	                    if (s.getRegistration_id() == sp.getStudentpayment().getRegistration_id()) {
	                        StudentPayments sps = new StudentPayments(
	                            sp.getPayment_id(),
	                            sp.getPayment_date(),
	                            sp.getPayment_amount(),
	                            sp.getPayment_mode(),
	                            sp.getPayment_description(),
	                            null
	                        );
	                        splist.add(sps);
	                    }
	                }
	                List<BatchStudentsModel>bslist= new ArrayList<BatchStudentsModel>();
	    			for(BatchStudents bs:bstudrepo.findAll()) {
	    				if(s.getRegistration_id()==bs.getResgisterstudent().getRegistration_id()) {
	    					BatchStudentsModel b = new BatchStudentsModel(bs.getBatch_student_id(),bs.getBatchdetails().getBatch_id(),bs.getResgisterstudent().getRegistration_id());
	    					bslist.add(b);
	    				}
	    			}
	                List<ScheduleAttendance> salist = new ArrayList<ScheduleAttendance>();
	                for (ScheduleAttendance sa : schedattrepo.findAll()) {
	                    if (s.getRegistration_id() == sa.getScheduleattendanceregistration().getRegistration_id()) {
	                        ScheduleAttendance saa = new ScheduleAttendance(
	                            sa.getAttendance_id(),
	                            sa.getIs_present(),
	                            null,
	                            null
	                        );
	                        salist.add(saa);
	                    }
	                }

	                StudentRegistrationModel sr = new StudentRegistrationModel(s.getRegistration_id(),s.getRegistration_date(),s.getDiscount(), s.getStudent().getStudent_id(),  s.getStudent().getStudent_name(),  s.getStudent().getGender(), s.getStudent().getMobile_number(), s.getStudent().getEmail_address(),  s.getStudent().getPassword(), s.getStudent().getDate(), s.getStudent().getProfile_photo(),s.getStudent().getQualification(), s.getTrainingcourse().getCourse_id(),s.getTrainingcourse().getCourse_name(), splist, bslist,salist);
	                srlst.add(sr);
	            }
	        }

	        StudentModel sd = new StudentModel(
	            st.getStudent_id(),
	            st.getStudent_name(),
	            st.getGender(),
	            st.getMobile_number(),
	            st.getEmail_address(),
	            st.getPassword(),
	            st.getDate(),
	            st.getProfile_photo(),
	            st.getQualification(),
	            srlst,
	            null
	        );
	        return sd;
	    

	}

	
	

    
	
		public Student AddorUpdateStudent(Student st ){
//			String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
//	        st.setProfile_photo(fileName);
//			
//	        Student savedStudent = srepo.save(st);
//	
//	        
//	        String uploadDir = "student-photos/" + savedStudent.getStudent_id();
	        
	       
	        
			return srepo.save(st);
		}
	
	
	public Student GetStudentsById(int id) {
		 Student s = srepo.findById(id).get();
		 Student st = new Student(s.getStudent_id(),s.getStudent_name(),s.getGender(),s.getMobile_number(),s.getEmail_address(),s.getPassword(),s.getDate(),s.getProfile_photo(),s.getQualification(),null);
		 return st;
	}
	
	
	public Student DeleteStudent(int id) {
		Student st = GetStudentsById(id);
		srepo.delete(st);
		return st;
	}
	
	


	public List<StudentRegistrationModel> getRegisterData(){
		List<StudentRegistrationModel> lst = new ArrayList<StudentRegistrationModel>();
		for(StudentRegistration s : studregrepo.findAll()) {
			List<StudentPayments>sps = new ArrayList<StudentPayments>();
			for(StudentPayments sp:studpayrepo.findAll()) {
				if(s.getRegistration_id()==sp.getStudentpayment().getRegistration_id()) {
					StudentPayments spayment = new StudentPayments(sp.getPayment_id(),sp.getPayment_date(),sp.getPayment_amount(),sp.getPayment_mode(),sp.getPayment_description(), null);
					sps.add(spayment);
				}
			}
			
			List<BatchStudentsModel>bslist= new ArrayList<BatchStudentsModel>();
			for(BatchStudents bs:bstudrepo.findAll()) {
				if(s.getRegistration_id()==bs.getResgisterstudent().getRegistration_id()) {
					BatchStudentsModel b = new BatchStudentsModel(bs.getBatch_student_id(),bs.getBatchdetails().getBatch_id(),bs.getResgisterstudent().getRegistration_id());
					bslist.add(b);
				}
			}
			List<ScheduleAttendance>salist = new ArrayList<ScheduleAttendance>();
			for(ScheduleAttendance sa :schedattrepo.findAll()) {
				if(s.getRegistration_id()==sa.getScheduleattendanceregistration().getRegistration_id()) {
					ScheduleAttendance saa=new ScheduleAttendance(sa.getAttendance_id(),sa.getIs_present(), null, null);
					salist.add(saa);
				}
			}

			StudentRegistrationModel sr = new StudentRegistrationModel(s.getRegistration_id(),s.getRegistration_date(),s.getDiscount(), s.getStudent().getStudent_id(),  s.getStudent().getStudent_name(),  s.getStudent().getGender(), s.getStudent().getMobile_number(), s.getStudent().getEmail_address(),  s.getStudent().getPassword(), s.getStudent().getDate(), s.getStudent().getProfile_photo(),s.getStudent().getQualification(), s.getTrainingcourse().getCourse_id(),s.getTrainingcourse().getCourse_name(), sps, bslist,salist);
			lst.add(sr);
		}
		return lst;
	}
	
	public StudentRegistrationModel GetRegisterdatabyid(int id) { 
		StudentRegistration s = studregrepo.findById(id).get();	
				
		List<StudentPayments>splist = new ArrayList<StudentPayments>();
		for(StudentPayments sp :studpayrepo.findAll()) {
			if(s.getRegistration_id() ==sp.getStudentpayment().getRegistration_id()) {
			StudentPayments sps = new StudentPayments(sp.getPayment_id(),sp.getPayment_date(),sp.getPayment_amount(),sp.getPayment_mode(), sp.getPayment_description(),null);
			splist.add(sps);
			}
		}
		
		List<BatchStudentsModel>bslist= new ArrayList<BatchStudentsModel>();
		for(BatchStudents bs:bstudrepo.findAll()) {
			if(s.getRegistration_id()==bs.getResgisterstudent().getRegistration_id()) {
				BatchStudentsModel b = new BatchStudentsModel(bs.getBatch_student_id(),bs.getBatchdetails().getBatch_id(),bs.getResgisterstudent().getRegistration_id());
				bslist.add(b);
			}
		}
		
		List<ScheduleAttendance>salist = new ArrayList<ScheduleAttendance>();
		for(ScheduleAttendance sa :schedattrepo.findAll()) {
			if(s.getRegistration_id() == sa.getScheduleattendanceregistration().getRegistration_id()) {
			ScheduleAttendance saa = new ScheduleAttendance(sa.getAttendance_id(), sa.getIs_present(), null,null);
			salist.add(saa);}
		}
		

		StudentRegistrationModel sr = new StudentRegistrationModel(s.getRegistration_id(),s.getRegistration_date(),s.getDiscount(), s.getStudent().getStudent_id(),  s.getStudent().getStudent_name(),  s.getStudent().getGender(), s.getStudent().getMobile_number(), s.getStudent().getEmail_address(),  s.getStudent().getPassword(), s.getStudent().getDate(), s.getStudent().getProfile_photo(),s.getStudent().getQualification(), s.getTrainingcourse().getCourse_id(),s.getTrainingcourse().getCourse_name(), splist, bslist,salist);
		return sr;
	
	}
	
	public StudentRegistration RegisterStudent(StudentRegistration sr) {
		StudentRegistration str = new StudentRegistration(sr.getRegistration_id(),sr.getRegistration_date(), sr.getDiscount(), null, null, null, sr.getStudent(), sr.getTrainingcourse());
		StudentRegistration strs = studregrepo.save(str);
		
		for(StudentPayments sp : sr.getStudentpayments()) {
			StudentPayments sps = new StudentPayments(0,sp.getPayment_date(),sp.getPayment_amount(), sp.getPayment_mode(), sp.getPayment_description(),strs);
					studpayrepo.save(sps);
		}
		return str;
	}
	
	public List<StudentPaymentModel> GetPaymentsdetails(){
		List<StudentPaymentModel>lst = new ArrayList<StudentPaymentModel>();
		for(StudentPayments sp :studpayrepo.findAll() ) {
			StudentPaymentModel sps = new StudentPaymentModel(sp.getPayment_id(),sp.getPayment_date(),sp.getPayment_amount(), sp.getPayment_mode(), sp.getPayment_description(),sp.getStudentpayment().getRegistration_id());
			lst.add(sps);
		}
		return lst;
	}

//	======================================= TRAINER ========================================
	public List<Trainer> GetTrainer(){
		List<Trainer> lst = new ArrayList<Trainer>();
		for(Trainer t: trepo.findAll()) {
			List<TrainerTopics>ttlist = new ArrayList<TrainerTopics>();
			for(TrainerTopics tps :ttrepo.findAll() ) {
				if(t.getTrainer_id()==tps.getTrainers().getTrainer_id()) {
					TrainerTopics tp = new TrainerTopics(tps.getTainer_topic_id(),null,null);
					ttlist.add(tp);
				}
			}
			
			Trainer td = new Trainer(t.getTrainer_id(), t.getTrainer_name(), t.getQualification(), t.getEmail_address(), t.getPassword(), t.getMobile_number(), ttlist,null);
			lst.add(td);
		}
		return lst;
	}
	
	public Trainer AddOrUpdateTrainer(Trainer Tr) { 
//		Trainer t = new Trainer(Tr.getTrainer_id(),Tr.getTrainer_name(),Tr.getTrainer_name(),Tr.getEmail_address(), Tr.getPassword(), Tr.getMobile_number(), null,null);
//		Trainer trs = trepo.save(t);
//		
//		for(TrainerTopics ttp :Tr.getTrainertopic() ) {
//			TrainerTopics tps = new TrainerTopics(0, ttp.getTrainertopics(),trs);
//				ttrepo.save(tps);
//		}
		return trepo.save(Tr);
	}
//	======================================= TrainerTopic ========================================
	
//	======================================= BATCH ========================================
	
	public List<Batch>GetBatchData(){
		List<Batch>lst = new ArrayList<Batch>();
		for(Batch bt : brepo.findAll()) {
			Batch btdata = new Batch(bt.getBatch_id(),bt.getBatch_name(),bt.getStart_date(),bt.getEnd_date(), bt.getBatch_time(),bt.getStatus(),null, null,null,null);
			lst.add(btdata);
		}
		return lst;
	}
	
	
//	======================================= Course ========================================
	public List<TrainingCourses>GetCourses(){
		List<TrainingCourses>lst = new ArrayList<TrainingCourses>();
		for(TrainingCourses tc: traincourserepo.findAll()) {
			TrainingCourses tcs = new TrainingCourses(tc.getCourse_id(),tc.getCourse_name(),tc.getCoursefees(),null);
			lst.add(tcs);
		}
		return lst;
	}
	
//		public TrainingCourses AddCourse(TrainingCourses TC) {
//			return traincourserepo.save(TC);
//		}
//		
		
		public List<TrainingTopics>GetTopics(){
			List<TrainingTopics>lst = new ArrayList<TrainingTopics>();
			for(TrainingTopics tp:ttprepo.findAll()) {
				TrainingTopics ttp = new TrainingTopics(tp.getTopic_id(),tp.getTopic_name(),null, null);
				lst.add(ttp);
			}
			return lst;
		}
		
		
		public TrainingTopics AddorUpdateTopics(TrainingTopics tp) {
			return ttprepo.save(tp);
		}
		
		public TrainingTopics GetTopicsbyid(int id){
			return ttprepo.findById(id).get();	
		}
		
		public TrainingTopics DeleteTopic(int id) {
			TrainingTopics tp = GetTopicsbyid(id);
			return tp;
		}

	
	public TrainingCourses AddCourse(TrainingCourses TC) {
			TrainingCourses tcs = new TrainingCourses(0,TC.getCourse_name(),TC.getCoursefees(),null);
			TrainingCourses tc = traincourserepo.save(tcs);
			for(TrainingCourseFees tcm : TC.getCoursefees()) {
				TrainingCourseFees tcf = new TrainingCourseFees(0,tcm.getFees_amount(),tcm.getGst(),tcm.getFee_mode(), tc);
			trainfeesrepo.save(tcf);
			
			}
			return tc;
		}

//	======================================= Course ========================================

}

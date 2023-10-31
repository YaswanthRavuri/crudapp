package com.crudapp.springcrudapp.services;

import com.crudapp.springcrudapp.models.Student;
import com.crudapp.springcrudapp.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    StudentRepository studentRepository;

    @Transactional
    public boolean saveStudent(Student student){
        try{
            studentRepository.save(student);
        }
        catch (Exception e){
            return false;
        }
        return true;
    }

    public Page<Student> getAllStudentsinPage(int pageNumber, int pageSize){
        return studentRepository.findAll(PageRequest.of(pageNumber, pageSize));
    }

    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }

    public Student getStudentByID(long id){
        return studentRepository.findById(id).orElse(null);
    }

    @Transactional
    public boolean deleteStudent(long id){
        try{
            studentRepository.deleteById(id);
            return true;
        } catch (Exception e){
            System.out.println(e.getMessage());
            return false;
        }
    }

    @Transactional
    public String updateStudent(Student student){
        try{
            Student student1 = studentRepository.findById(student.getStudentRollNo()).orElse(null);
            if(student1!=null){
                student1.setStudentName(student.getStudentName());
                student1.setStudentEmail(student.getStudentEmail());
                studentRepository.save(student1);
                return "Updated Successfully";
            }
            return null;
        } catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

}

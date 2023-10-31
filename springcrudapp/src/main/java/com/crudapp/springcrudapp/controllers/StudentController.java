package com.crudapp.springcrudapp.controllers;


import com.crudapp.springcrudapp.models.Student;
import com.crudapp.springcrudapp.services.StudentService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudentController {

    @Autowired
    StudentService studentService;

    @PostMapping(path = "/savestudent")
    public String saveStudent(@RequestBody Student student, HttpServletResponse response){
        if(studentService.saveStudent(student)){
            return "Saved Student Data Successfully";
        }
        response.setStatus(503);
        return "Error while trying to save student data";
    }


    @GetMapping(path = "/getallstudents")
    public List<Student> getStudents(){
        return studentService.getAllStudents();
    }

    @GetMapping(path = "/getstudentsbypage")
    public Page<Student> getStudentsbyPage(
            @RequestParam(name = "pagesize", defaultValue = "5") int pageSize,
            @RequestParam(name = "pagenum", defaultValue = "0") int pageNumber
    ) {
        return studentService.getAllStudentsinPage(pageNumber, pageSize);
    }

    @GetMapping(path = "/getStudent/{id}")
    public ResponseEntity<Student> getStudentbyID(@PathVariable long id){
        Student student = studentService.getStudentByID(id);
        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    @PutMapping(path = "/updatestudent/{id}")
    public ResponseEntity<String> updateStudent(@PathVariable long id, @RequestBody Student student){
        student.setStudentRollNo(id);
        String updateRes = studentService.updateStudent(student);
        return updateRes!=null ? new ResponseEntity<>(updateRes, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(path = "/deletestudent/{id}")
    public String deleteStudent(@PathVariable long id){
        if(studentService.deleteStudent(id))
            return "Student deleted successfully";
        return "Issue while deleting student : please check again";
    }
}

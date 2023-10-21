package com.crudapp.springcrudapp.controllers;


import com.crudapp.springcrudapp.models.Student;
import com.crudapp.springcrudapp.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {

    @Autowired
    StudentService studentService;

    @PostMapping(path = "/savestudent")
    public String saveStudent(@RequestBody Student student){
        if(studentService.saveStudent(student)){
            return "saved student successfully";
        }
        return "Error while trying to save student";
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

    @PutMapping(path = "/updatestudent/{id}")
    public Student updateStudent(@PathVariable long id, @RequestBody Student student){
        student.setStudentRollNo(id);
        return studentService.updateStudent(student);
    }

    @DeleteMapping(path = "/deletestudent/{name}")
    public String deleteStudent(@PathVariable String name){
        if(studentService.deleteStudent(name))
            return "Student deleted successfully";
        return "Issue while deleting student : please check again";
    }
}

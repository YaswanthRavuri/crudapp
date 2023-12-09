package com.crudapp.springcrudapp.controllers;

import com.crudapp.springcrudapp.models.Response;
import com.crudapp.springcrudapp.models.Student;
import com.crudapp.springcrudapp.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudentGraphqlController {

    @Autowired
    StudentService studentService;

    @QueryMapping
    public List<Student> getStudents() {
        return studentService.getAllStudents();
    }

}

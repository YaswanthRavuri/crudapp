package com.crudapp.springcrudapp.repositories;

import com.crudapp.springcrudapp.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    int deleteByStudentNameContainingIgnoreCase(String name); //returns no of records deleted. it cannot return object of deleted row.
}

import React, { useState, useEffect, useRef, useContext } from 'react';
import {getallstudents, deleteStudentById} from '../services/StudentService'
import { useNavigate } from 'react-router-dom';
import { GraphqlToggleContext } from '../App';
import { getAllStudentListQuery } from '../services/GraphqlStudentService';

export default function ListStudentComponent() {

    const [studentList, setStudentList] = useState([])
    const [deleteCount, setDeleteCount] = useState(0)
    const navigate = useNavigate()
    const deltagRef = useRef(null)
    const {graphqlToggle} = useContext(GraphqlToggleContext)

    console.log("rendering list student")
    console.log(studentList)

    useEffect(()=>{
      if(!graphqlToggle){
        getallstudents()
        .then((res)=>setStudentList(res.data))
        .catch((error)=>{alert(error); console.log(error)})
      } else {
          getAllStudentListQuery().then(
            (result) => {
              console.log(result.data.getStudents);
              console.log(Array.isArray(result.data.getStudents));
              setStudentList(result.data.getStudents)
            }
            )
          .catch((err)=>console.log(err))
      }
    },[deleteCount, graphqlToggle])

    function updateStudent(id){
      navigate("/updatestudent/"+id)
    }

    function deleteStudent(id){
      deleteStudentById(id).then((response)=>{
        deltagRef.current.innerHTML= response.data;
        setDeleteCount(prev=>prev+1)
      })
    }

  return (
    <>
      <div>
        <h6 className='text-danger' ref={deltagRef}></h6>
        <div className='table-component'>
          <h2>Students List</h2>
          <div className='row'>
            <table className='table table-striped table-bordered'>
                <thead className='table-dark'>
                    <tr>
                        <th>Student Name</th>
                        <th>Student Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentList.map((student)=>
                        <tr key={student.studentRollNo}>
                            <td>{student.studentName}</td>
                            <td>{student.studentEmail}</td>
                            <td>
                              <button className='btn btn-info mx-3' onClick={()=>updateStudent(student.studentRollNo)}>Update</button>
                              <button className='btn btn-danger mx-3' onClick={()=>deleteStudent(student.studentRollNo)}>Delete</button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </>
  );
}
import React, { useState, useEffect, useRef } from 'react';
import { getStudentById, updateStudent } from '../services/StudentService';
import { useParams } from 'react-router-dom';

export default function UpdateStudentComponent() {

    const [updateState, setUpdateState] = useState(false)
    var [resData, setResData] = useState({})
    const {id} = useParams()
    const studentName = useRef(null)
    const studentEmail = useRef(null)

    function updateStudentData(event){
        event.preventDefault()
        updateStudent(id).then((response)=>{
            setUpdateState(true);
            setResData(response.data)
        })
    }

    useEffect(()=>{
        getStudentById(id).then((res)=>{
            studentName.current.value = res.data.studentName;
            studentEmail.current.value = res.data.studentEmail;
        })
    }, [])
  return (
    <div>
        {updateState && <div><br/><h3 className="text-success">{resData}</h3></div>}
        {!updateState && 
            <div>
            <br></br>
               <div className = "container">
               <h3>Update Student</h3>
                    <div className = "row">
                        <div className = "card col-md-4 offset-md-4 offset-md-3">
                            <div className = "card-body">
                                <form method='post'>
                                    <div className = "form-group mb-3">
                                        <b><label for="studentName" id='form-labels'> Student Name: </label></b>
                                        <input placeholder="Name" name="studentName" id='studentName' className="form-control" ref={studentName} required />
                                    </div>
                                    <div className = "form-group mb-3">
                                        <b><label for="studentEmail" id='form-labels'> Email Address: </label></b>
                                        <input placeholder="Email Address" name="studentEmail" id='studentEmail' className="form-control" ref={studentEmail} required/>
                                    </div>
                                    <div className='form-group'>
                                        <button class="btn btn-primary" type='submit' onClick={updateStudentData}>Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
        
               </div>
            </div>
        }
    </div>
  );
}

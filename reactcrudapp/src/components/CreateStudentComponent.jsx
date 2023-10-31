import React, { useState, useEffect } from 'react';
import { saveStudent } from '../services/StudentService';

export default function CreateStudentComponent() {

    const [postState, setPostState] = useState(false)
    var [resData, setResData] = useState({})

    function saveStudentData(event){
        event.preventDefault()
        saveStudent(event)
            .then((response)=> {setPostState(true); setResData(response.data); console.log(resData); console.log(response)})
            .catch((err)=>alert(err.data))
    }
  return (
    <div>
        {postState && <div><br/><h3 className="text-success">{resData}</h3></div>}
        {!postState && 
            <div>
            <br></br>
               <div className = "container">
               <h3>Register Student</h3>
                    <div className = "row">
                        <div className = "card col-md-4 offset-md-4 offset-md-3">
                            <div className = "card-body">
                                <form method='post'>
                                    <div className = "form-group mb-3">
                                        <b><label for="studentName" id='form-labels'> Student Name: </label></b>
                                        <input placeholder="Name" name="studentName" id='studentName' className="form-control" required />
                                    </div>
                                    <div className = "form-group mb-3">
                                        <b><label for="studentEmail" id='form-labels'> Email Address: </label></b>
                                        <input placeholder="Email Address" name="studentEmail" id='studentEmail' className="form-control" required/>
                                    </div>
                                    <div className='form-group'>
                                        <button class="btn btn-primary" type='submit' onClick={saveStudentData}>Save</button>
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

import axios from "axios";

const getStudentsApi = "http://localhost:8081/getallstudents"
const getStudentByIdApi = "http://localhost:8081/getStudent/"
const saveStudentApi = "http://localhost:8081/savestudent"
const updateStudentApi = "http://localhost:8081/updatestudent/"
const deleteStudentApi = "http://localhost:8081/deletestudent/"

function getallstudents(){
    return axios.get(getStudentsApi)
}

function saveStudent(event) {
    let postData = {
        studentName : document.getElementById("studentName").value,
        studentEmail : document.getElementById("studentEmail").value
    } 

    return axios.post(saveStudentApi, JSON.stringify(postData), {
        headers: {
        'Content-Type': 'application/json'
        }
      })

}

function updateStudent(id) {
    let postData = {
        studentName : document.getElementById("studentName").value,
        studentEmail : document.getElementById("studentEmail").value
    } 

    return axios.put(updateStudentApi+id, JSON.stringify(postData), {
        headers: {
        'Content-Type': 'application/json'
        }
      })

}

function getStudentById(id){
    return axios.get(getStudentByIdApi+id)
}

function deleteStudentById(id){
    return axios.delete(deleteStudentApi+id)
}

export {getallstudents, saveStudent, updateStudent, getStudentById, deleteStudentById}
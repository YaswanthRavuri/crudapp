import logo from './logo.svg';
import './App.css';
import ListStudentComponent from './components/ListStudentComponent'
import CreateStudentComponent from './components/CreateStudentComponent';
import HomeComponent from './components/HomeComponent';
import Header from './components/HeaderComponent';
import { Route, Routes } from 'react-router-dom';
import UpdateStudentComponent from './components/UpdateStudentComponent';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='/students' element={<ListStudentComponent/>}/>
        <Route path='/registerstudent' element={<CreateStudentComponent/>}/>
        <Route path='/updatestudent/:id' element={<UpdateStudentComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;

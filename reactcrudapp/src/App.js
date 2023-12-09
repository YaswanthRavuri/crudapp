import logo from './logo.svg';
import './App.css';
import ListStudentComponent from './components/ListStudentComponent'
import CreateStudentComponent from './components/CreateStudentComponent';
import HomeComponent from './components/HomeComponent';
import Header from './components/HeaderComponent';
import { Route, Routes } from 'react-router-dom';
import UpdateStudentComponent from './components/UpdateStudentComponent';
import { createContext, useState } from 'react';
import GraphqlToggleComponent from './components/GraphqlToggleComponent';

export var GraphqlToggleContext = createContext();


function App() {
  const [graphqlToggle, setGraphqlToggle] = useState(false)
  return (
    <>
      <div className="App">
        <Header/>
        <GraphqlToggleContext.Provider value={{graphqlToggle, setGraphqlToggle}}>
          <GraphqlToggleComponent/>
          <Routes>
            <Route path='/' element={<HomeComponent/>}/>
            <Route path='/students' element={<ListStudentComponent/>}/>
            <Route path='/registerstudent' element={<CreateStudentComponent/>}/>
            <Route path='/updatestudent/:id' element={<UpdateStudentComponent/>}/>
          </Routes>
        </GraphqlToggleContext.Provider>
      </div>
    </>
  );
}

export default App;

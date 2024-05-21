import './App.css';
import React, { useEffect, useState } from 'react';
import Student from './components/Student';
import students from './data/studentData';
import StudentList from './components/StudentList';


function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData(students);
  }, []);
  return (
    <div>
      <h1>Students</h1>
      {data.map((student, index) => <StudentList key={index} student={student} />)}
    </div>
  );
}

export default App;
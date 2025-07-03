import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { GradeProvider } from './context/GradeContext';
import './App.css'; // Import global CSS styles
import AddStudent from './components/AddStudent'; // Import the AddStudent component
import ManageStudents from './components/ManageStudents';
import ReportPage from './components/ReportPage'; // Import the ReportPage component
function App() {
  return (
    <GradeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-student" element={<AddStudent />} />
           <Route path="/manage-students" element={<ManageStudents />} />
           <Route path="/report" element={<ReportPage />} />
        </Routes>
      </Router>
    </GradeProvider>
  );
}

export default App;

import React, { useContext, useState } from 'react';
import { GradeContext } from '../context/GradeContext';
import './Dashboard.css';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  const { students, grades } = useContext(GradeContext);
  const [sortAsc, setSortAsc] = useState(true);
    console.log(students, grades);
  const averageGPA = grades.length
    ? (grades.reduce((sum, g) => sum + (g.gpa || 0), 0) / grades.length).toFixed(2)
    : 0;

  const totalSubjects = new Set(grades.map((g) => g.subject)).size;

  const sortedStudents = [...students].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return sortAsc ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
  });

  const subjects = ['Math', 'Science', 'History', 'English', 'Computers'];

  const getStudentSubjectGPA = (studentId, subject) => {
    const record = grades.find(
      (g) => g.studentId === studentId && g.subject === subject
    );
    return record ? record.gpa : '-';
  };

  const getStudentGPA = (studentId) => {
    const studentGrades = grades.filter((g) => g.studentId === studentId);
    if (studentGrades.length === 0) return '-';
    const total = studentGrades.reduce((sum, g) => sum + (g.gpa || 0), 0);
    return (total / studentGrades.length).toFixed(2);
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Student Grade Dashboard</h2>

      <div className="stats-grid">
        <div className="card stat-card">
          <h3 className="stat-label">Total Students</h3>
          <p className="stat-value">{students.length}</p>
        </div>
        <div className="card stat-card">
          <h3 className="stat-label">Total Subjects</h3>
          <p className="stat-value">{totalSubjects}</p>
        </div>
        <div className="card stat-card">
          <h3 className="stat-label">Average GPA</h3>
          <p className="stat-value">{averageGPA}</p>
        </div>
      </div>

      <div className="student-table-section">
        <div className="student-header">
          <h3>Student Grades</h3>
          <button onClick={() => setSortAsc(!sortAsc)} className="sort-button">
            Sort {sortAsc ? '↓' : '↑'}
          </button>
        </div>

        <table className="student-table">
          <thead>
            <tr>
              <th>Student</th>
              {subjects.map((sub, index) => (
                <th key={index}>{sub}</th>
              ))}
              <th>GPA</th>
            </tr>
          </thead>
          <tbody>
            {sortedStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                {subjects.map((subject, index) => (
                  <td key={index}>{getStudentSubjectGPA(student.id, subject)}</td>
                ))}
                <td><strong>{getStudentGPA(student.id)}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="quick-links">
        <button className="nav-button">
         <Link to="/add-student" style={{'text-decoration': 'none', 'color': 'white'}}>Add student</Link>
        </button>
        <button className="nav-button">
                  <Link to="/manage-students" style={{'text-decoration': 'none', 'color': 'white'}}>ManageStudents</Link>

        </button>
        <button className="nav-button">
                          <Link to="/report" style={{'text-decoration': 'none', 'color': 'white'}}>Get Report</Link>

        </button>
      </div>
    </div>
  );
};

export default Dashboard;


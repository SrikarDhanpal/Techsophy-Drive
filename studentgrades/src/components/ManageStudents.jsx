import React, { useContext } from 'react';
import { GradeContext } from '../context/GradeContext';

import { Link } from 'react-router-dom';

const ManageStudents = () => {
  const { students, setStudents, grades, setGrades } = useContext(GradeContext);

  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this student?');
    if (!confirmed) return;

    const updatedStudents = students.filter((s) => s.id !== id);
    const updatedGrades = grades.filter((g) => g.studentId !== id);

    setStudents(updatedStudents);
    setGrades(updatedGrades);
  };

  const getStudentGrades = (studentId) => {
    return grades
      .filter((g) => g.studentId === studentId)
      .map((g) => `${g.subject}: ${g.gpa}`)
      .join(', ');
  };

  return (
    <div className="manage-students">
      <div className="nav-links">
        <Link to="/" className="nav-link">← Back to Dashboard</Link>
        <Link to="/add-student" className="nav-link">+ Add Student</Link>
      </div>

      <h2>Manage Students</h2>

      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Grades</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{getStudentGrades(s.id)}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(s.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageStudents;

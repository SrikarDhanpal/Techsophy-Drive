import React, { useState, useContext } from 'react';
import { GradeContext } from '../context/GradeContext';
import { Link } from 'react-router-dom';
const AddStudent = () => {
  const { students, setStudents, grades, setGrades } = useContext(GradeContext);

  const subjects = ['Math', 'Science', 'History', 'English', 'Computers'];

  const [name, setName] = useState('');
  const [subjectGPA, setSubjectGPA] = useState({
    Math: '',
    Science: '',
    History: '',
    English: '',
    Computers: ''
  });

  const handleGPAChange = (subject, value) => {
    setSubjectGPA((prev) => ({
      ...prev,
      [subject]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('Student name is required!');
      return;
    }

    const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;

    const newStudent = { id: newId, name: name.trim() };
    const newGrades = subjects.map((subj) => ({
      studentId: newId,
      subject: subj,
      gpa: parseFloat(subjectGPA[subj]) || 0
    }));
    setStudents([...students, newStudent]);
    setGrades([...grades, ...newGrades]);
    
    console.log(students, grades);
    // Reset form
    setName('');
    setSubjectGPA({
      Math: '',
      Science: '',
      History: '',
      English: '',
      Computers: ''
    });

   

  };

  return (
    <div className="add-student-form">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <label>Student Name:</label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <div className="gpa-inputs">
          {subjects.map((subj) => (
            <div key={subj} className="gpa-row">
              <label>{subj} GPA:</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="10"
                value={subjectGPA[subj]}
                onChange={(e) => handleGPAChange(subj, e.target.value)}
                required
              />
            </div>
          ))}
        </div>

        <button type="submit">Add Student</button>
      </form>
       <div className="back-button-container">
  <Link to="/" className="back-button">← Back to Dashboard</Link>
</div>
    </div>
  );
};

export default AddStudent;

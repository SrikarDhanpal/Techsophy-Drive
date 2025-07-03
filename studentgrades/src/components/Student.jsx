import React, { useState } from 'react';
import './Student.css'; // Import CSS file

const Student = () => {
  const [grades, setGrades] = useState([]);
  const [task, setTask] = useState('');
  const [grade, setGrade] = useState('');

  const handleAddGrade = (e) => {
    e.preventDefault();

    if (!task || !grade) {
      alert('Please enter both task and grade.');
      return;
    }

    const newGrade = {
      id: Date.now(),
      task,
      grade: parseFloat(grade),
    };

    setGrades([...grades, newGrade]);
    setTask('');
    setGrade('');
  };

  return (
    <div className="grade-container">
      <h2 className="title">Enter Your Grades</h2>
      <form onSubmit={handleAddGrade} className="form">
        <input
          type="text"
          placeholder="Assignment/Task Name"
          className="input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="number"
          placeholder="Grade (e.g. 85)"
          className="input"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
        <button type="submit" className="button">
          Submit Grade
        </button>
      </form>

      <div className="grades-list">
        <h3 className="subtitle">Submitted Grades:</h3>
        {grades.length === 0 ? (
          <p className="empty">No grades submitted yet.</p>
        ) : (
          <ul>
            {grades.map((g) => (
              <li key={g.id} className="grade-item">
                <span className="task-name">{g.task}</span>
                <span className="task-grade">{g.grade}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Student;

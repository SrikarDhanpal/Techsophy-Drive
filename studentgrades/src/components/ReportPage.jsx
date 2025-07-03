import React, { useContext } from 'react';
import { GradeContext } from '../context/GradeContext';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, PieChart, Pie, Cell
} from 'recharts';
import { Link } from 'react-router-dom';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a29bfe'];

const ReportPage = () => {
  const { students, grades } = useContext(GradeContext);

  const getAverageGPA = (studentId) => {
    const studentGrades = grades.filter(g => g.studentId === studentId);
    const total = studentGrades.reduce((sum, g) => sum + g.gpa, 0);
    return studentGrades.length ? (total / studentGrades.length).toFixed(2) : 0;
  };

  const averageData = students.map((student) => ({
    name: student.name,
    gpa: parseFloat(getAverageGPA(student.id)),
  }));

  const chartData = students.map(student => {
    const subjectGPA = grades.filter(g => g.studentId === student.id);
    const entry = { name: student.name };
    subjectGPA.forEach(g => {
      entry[g.subject] = g.gpa;
    });
    return entry;
  });

  return (
    <div className="report-container">
      <h2>📈 GPA Report Analysis</h2>

      <div className="chart-section">
        <h3>Average GPA Per Student</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={averageData}
            dataKey="gpa"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {averageData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div className="chart-section">
        <h3>Student Subject-wise GPA</h3>
        <BarChart width={650} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 4]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Math" fill="#8884d8" />
          <Bar dataKey="Science" fill="#82ca9d" />
          <Bar dataKey="History" fill="#ffc658" />
          <Bar dataKey="English" fill="#ff8042" />
          <Bar dataKey="Computers" fill="#a29bfe" />
        </BarChart>
      </div>
      <div className="back-button-container">
  <Link to="/" className="back-button">← Back to Dashboard</Link>
</div>

    </div>
  );
};

export default ReportPage;

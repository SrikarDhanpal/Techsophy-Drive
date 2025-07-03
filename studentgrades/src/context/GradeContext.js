import React, { createContext, useState } from 'react';

export const GradeContext = createContext();

export const GradeProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ]);

  const [grades, setGrades] = useState([
    // Alice's grades
    { studentId: 1, subject: 'Math', gpa: 3.8 },
    { studentId: 1, subject: 'Science', gpa: 3.6 },
    { studentId: 1, subject: 'History', gpa: 3.9 },
    { studentId: 1, subject: 'English', gpa: 3.7 },
    { studentId: 1, subject: 'Computers', gpa: 4.0 },

    // Bob's grades
    { studentId: 2, subject: 'Math', gpa: 3.2 },
    { studentId: 2, subject: 'Science', gpa: 3.4 },
    { studentId: 2, subject: 'History', gpa: 3.5 },
    { studentId: 2, subject: 'English', gpa: 3.1 },
    { studentId: 2, subject: 'Computers', gpa: 3.3 },

    // Charlie's grades
    { studentId: 3, subject: 'Math', gpa: 2.8 },
    { studentId: 3, subject: 'Science', gpa: 2.9 },
    { studentId: 3, subject: 'History', gpa: 3.0 },
    { studentId: 3, subject: 'English', gpa: 2.7 },
    { studentId: 3, subject: 'Computers', gpa: 3.2 }
  ]);

  return (
    <GradeContext.Provider value={{ students, setStudents, grades, setGrades }}>
      {children}
    </GradeContext.Provider>
  );
};

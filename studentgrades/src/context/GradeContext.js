import React, { createContext, useState } from 'react';

export const GradeContext = createContext();

export const GradeProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Brown' },
    { id: 4, name: 'Daisy Miller' },
    { id: 5, name: 'Ethan Clark' },
    { id: 6, name: 'Fiona Lee' },
    { id: 7, name: 'George Martin' },
    { id: 8, name: 'Hannah Davis' },
    { id: 9, name: 'Isaac Thompson' },
    { id: 10, name: 'Julia Roberts' },
  ]);

  const [grades, setGrades] = useState([
    { studentId: 1, subject: 'Math', gpa: 3.9 },
    { studentId: 1, subject: 'Science', gpa: 3.7 },
    { studentId: 1, subject: 'History', gpa: 3.5 },
    { studentId: 1, subject: 'English', gpa: 3.8 },
    { studentId: 1, subject: 'Computers', gpa: 4.0 },

    { studentId: 2, subject: 'Math', gpa: 3.5 },
    { studentId: 2, subject: 'Science', gpa: 3.2 },
    { studentId: 2, subject: 'History', gpa: 3.1 },
    { studentId: 2, subject: 'English', gpa: 3.4 },
    { studentId: 2, subject: 'Computers', gpa: 3.9 },

    { studentId: 3, subject: 'Math', gpa: 3.0 },
    { studentId: 3, subject: 'Science', gpa: 3.1 },
    { studentId: 3, subject: 'History', gpa: 2.8 },
    { studentId: 3, subject: 'English', gpa: 3.2 },
    { studentId: 3, subject: 'Computers', gpa: 3.5 },

    { studentId: 4, subject: 'Math', gpa: 4.0 },
    { studentId: 4, subject: 'Science', gpa: 3.9 },
    { studentId: 4, subject: 'History', gpa: 3.7 },
    { studentId: 4, subject: 'English', gpa: 3.8 },
    { studentId: 4, subject: 'Computers', gpa: 4.0 },

    { studentId: 5, subject: 'Math', gpa: 2.9 },
    { studentId: 5, subject: 'Science', gpa: 3.1 },
    { studentId: 5, subject: 'History', gpa: 2.7 },
    { studentId: 5, subject: 'English', gpa: 3.0 },
    { studentId: 5, subject: 'Computers', gpa: 3.4 },

    { studentId: 6, subject: 'Math', gpa: 3.6 },
    { studentId: 6, subject: 'Science', gpa: 3.5 },
    { studentId: 6, subject: 'History', gpa: 3.2 },
    { studentId: 6, subject: 'English', gpa: 3.7 },
    { studentId: 6, subject: 'Computers', gpa: 3.9 },

    { studentId: 7, subject: 'Math', gpa: 2.8 },
    { studentId: 7, subject: 'Science', gpa: 2.6 },
    { studentId: 7, subject: 'History', gpa: 2.5 },
    { studentId: 7, subject: 'English', gpa: 2.9 },
    { studentId: 7, subject: 'Computers', gpa: 3.0 },

    { studentId: 8, subject: 'Math', gpa: 3.3 },
    { studentId: 8, subject: 'Science', gpa: 3.4 },
    { studentId: 8, subject: 'History', gpa: 3.2 },
    { studentId: 8, subject: 'English', gpa: 3.6 },
    { studentId: 8, subject: 'Computers', gpa: 3.8 },

    { studentId: 9, subject: 'Math', gpa: 4.0 },
    { studentId: 9, subject: 'Science', gpa: 3.8 },
    { studentId: 9, subject: 'History', gpa: 3.9 },
    { studentId: 9, subject: 'English', gpa: 4.0 },
    { studentId: 9, subject: 'Computers', gpa: 4.0 },

    { studentId: 10, subject: 'Math', gpa: 3.7 },
    { studentId: 10, subject: 'Science', gpa: 3.6 },
    { studentId: 10, subject: 'History', gpa: 3.5 },
    { studentId: 10, subject: 'English', gpa: 3.8 },
    { studentId: 10, subject: 'Computers', gpa: 3.9 },
  ]);

  return (
    <GradeContext.Provider value={{ students, setStudents, grades, setGrades }}>
      {children}
    </GradeContext.Provider>
  );
};

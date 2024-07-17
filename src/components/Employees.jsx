// src/components/Employees.jsx
import React from 'react';
import Employee from './Employee';

const Employees = () => {
  // Define employees data
  const employees = [
    { name: 'Employee 1', position: 'Manager', salary: 50000, status: 'Active' },
    { name: 'Employee 2', position: 'Developer', salary: 60000, status: 'Active' },
    { name: 'Employee 3', position: 'Designer', salary: 45000, status: 'Active' },
    { name: 'Employee 4', position: 'Developer', salary: 55000, status: 'Active' },
    { name: 'Employee 5', position: 'Manager', salary: 52000, status: 'Active' },
    { name: 'Employee 6', position: 'Developer', salary: 58000, status: 'Active' },
    { name: 'Employee 7', position: 'Developer', salary: 56000, status: 'Active' },
    { name: 'Employee 8', position: 'Designer', salary: 47000, status: 'Active' },
    { name: 'Employee 9', position: 'Manager', salary: 51000, status: 'Not Active' },
    { name: 'Employee 10', position: 'Developer', salary: 59000, status: 'Not Active' },
  ];

  return (
    <div>
      <h2>Employees Component</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>No.</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Employee Names</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Position</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Salary</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{index + 1}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.position}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.status === 'Active' ? `$${employee.salary}` : '-'}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;

// src/components/Employee.jsx
import React from 'react';

const Employee = ({ employee }) => {
  const { name, position, salary, status } = employee;

  return (
    <tr>
      <td>{name}</td>
      <td>{position}</td>
      <td>{status === 'Active' ? `$${salary}` : 'N/A'}</td>
      <td>{status}</td>
    </tr>
  );
};

export default Employee;

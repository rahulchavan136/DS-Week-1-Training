import React, { useReducer, useState } from 'react';
import { Table, Button, Card } from 'react-bootstrap'; // Assuming Card is imported from react-bootstrap

const initialState = [
  { id: 1, name: 'Nikhil Kumar', age: 30, isMarried: true },
  { id: 2, name: 'Rahul Smith', age: 28, isMarried: false },
  { id: 3, name: 'Govind Johnson', age: 35, isMarried: true },
  { id: 4, name: 'Nitesh Doe', age: 34, isMarried: true },
  { id: 5, name: 'Kailash Smith', age: 22, isMarried: false },
  { id: 6, name: 'Michael Johnson', age: 54, isMarried: true },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_EMPLOYEE':
      return state.filter(employee => employee.id !== action.payload);

    case 'CAPITALIZE_NAME':
      return state.map(employee => {
        if (employee.id === action.payload) {
          return { ...employee, name: employee.name.toUpperCase() };
        }
        return employee;
      });

    case 'INCREMENT_AGE':
      return state.map(employee => {
        if (employee.id === action.payload) {
          return { ...employee, age: employee.age + 1 };
        }
        return employee;
      });

    case 'SORT_BY_AGE':
      if (action.payload === 'asc') {
        return [...state].sort((a, b) => a.age - b.age);
      } else if (action.payload === 'desc') {
        return [...state].sort((a, b) => b.age - a.age);
      }
      return state;

    default:
      return state;
  }
};

function ReducersInfo() {
  const [employees, dispatch] = useReducer(reducer, initialState);
  const [sortOrder, setSortOrder] = useState(null);

  const [selectedEmployee, setSelectedEmployee] = useState(null); 

  const handleDeleteEmployee = id => {
    dispatch({ type: 'DELETE_EMPLOYEE', payload: id });
    if (selectedEmployee && selectedEmployee.id === id) {
      setSelectedEmployee(null); 
    }
  };

  const handleCapitalizeName = id => {
    dispatch({ type: 'CAPITALIZE_NAME', payload: id });
  };

  const handleIncrementAge = id => {
    dispatch({ type: 'INCREMENT_AGE', payload: id });
  };

  const handleSortByAge = () => {
    if (!sortOrder || sortOrder === 'desc') {
      dispatch({ type: 'SORT_BY_AGE', payload: 'asc' });
      setSortOrder('asc');
    } else {
      dispatch({ type: 'SORT_BY_AGE', payload: 'desc' });
      setSortOrder('desc');
    }
  };

  const handleSelectEmployee = id => {
    const selected = employees.find(employee => employee.id === id);
    setSelectedEmployee(selected);
  };

  return (
    <div>
      <div className="mb-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>
                Age
                {sortOrder === 'asc' && <span>&uarr;</span>}
                {sortOrder === 'desc' && <span>&darr;</span>}
              </th>
              <th>Marital Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.isMarried ? 'Married' : 'Single'}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDeleteEmployee(employee.id)}>Delete</Button> &nbsp;
                  <Button variant="warning" onClick={() => handleCapitalizeName(employee.id)}>Capitalize Name</Button>&nbsp;
                  <Button variant="success" onClick={() => handleIncrementAge(employee.id)}>Increment Age</Button>&nbsp;
                  <Button variant="primary" onClick={() => handleSelectEmployee(employee.id)}>Select</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="primary" onClick={handleSortByAge}>
          Sort by Age {sortOrder === 'asc' && '(Ascending)'}
          {sortOrder === 'desc' && '(Descending)'}
        </Button>
      </div>

       {selectedEmployee && (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Person Details</Card.Title>
            <Card.Text>
              <strong>ID:</strong> {selectedEmployee.id}<br />
              <strong>Name:</strong> {selectedEmployee.name}<br />
              <strong>Age:</strong> {selectedEmployee.age}<br />
              <strong>Marital Status:</strong> {selectedEmployee.isMarried ? 'Married' : 'Single'}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default ReducersInfo;

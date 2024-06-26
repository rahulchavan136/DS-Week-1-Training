import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import personsData from './PersonData';
import { Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';


export const Master = () => {
  const [persons, setPersons] = useState(personsData);

  const handleDelete = (id)=>{
    const updatedPersons = persons.filter((person)=>person.id!==id);
      setPersons(updatedPersons)
    }

  return (
    <div className='container'>
      <Table striped bordered hover size="sm" style={{ marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fll Name</th>
            <th>Department</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            persons.map((newData) => {
              return (
                <>
                  <tr key={newData.id}>
                    <td>{newData.id}</td>
                    <td>{newData.name}</td>
                    <td>{newData.department}</td>
                    <td>{newData.age}</td>
                    <td><Button variant="danger" onClick={()=>handleDelete(newData.id)} style={{ marginTop: 'auto', alignSelf: 'flex-end' }}><Trash/></Button>
                    </td>
                  </tr>
                </>
              )
            })
          }

        </tbody>
      </Table>
    </div>)
}

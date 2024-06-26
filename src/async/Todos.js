import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    // Function to fetch todos using axios
    const fetchTodos = () => {
        axios.get('http://localhost:4000/todos')
            .then(response => {
                setTodos(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching todos:', error);
                setLoading(false);
            });
    };

    // Function to delete a todo
    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/todos/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id));
            })
            .catch(error => {
                console.error('Error deleting todo:', error);
            });
    };

    // Function to update isDone status of a todo
    const handleIsDoneUpdate = (id, updatedIsDone) => {
        axios.patch(`http://localhost:4000/todos/${id}`, { isDone: updatedIsDone })
            .then(() => {
                fetchTodos();
            })
            .catch(error => {
                console.error('Error updating isDone status:', error);
            });
    };

    useEffect(() => {
        setTimeout(() => {
            fetchTodos();
        }, 1000);
    }, []);

    return (
        <Container>
            <div>
                <p>Run Json Server First</p>
                {loading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>TITLE</th>
                                    <th>VIEWS</th>
                                    <th>ISDONE</th>
                                    <th>DELETE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todos?.map(todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.title}</td>
                                        <td>{todo.views}</td>
                                        <td>
                                            <input
                                                type='checkbox'
                                                checked={todo.isDone}
                                                onChange={(e) => handleIsDoneUpdate(todo.id, e.target.checked)}
                                            />
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => handleDelete(todo.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="2"></td>
                                    <td><strong>Total Views: {todos.reduce((acc, curr) => acc + curr.views, 0)}</strong></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </>
                )}
            </div>
        </Container>
    );
};

export default Todos;

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
function ToDoForm({ addTask }) {
  const [newTask, setNewTask] = useState('');
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleFormClick = () => {
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };
  return (
    <Card className='bg-primary rounded-0 border border-0 p-5'>
      <Card.Body className='p-5 text-light d-flex flex-column align-items-end '>
        <Card.Title as="h1" className='fs-1'>To-Do App!</Card.Title>
        <Card.Text className='fs-5 m-0'>Add New To-Do</Card.Text>
        <Form.Control type="text" size="lg" placeholder="Enter New Task" className='todo my-3 text-primary placeholser-primary' value={newTask} required onChange={handleInputChange}/>
        <Button variant="primary" className='border border-light rounded px-3 fs-5' onClick={handleFormClick}>Add</Button>
      </Card.Body>
    </Card>
  );
}

export default ToDoForm;
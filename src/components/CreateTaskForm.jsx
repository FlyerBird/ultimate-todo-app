import React, { useState } from 'react'

export default function CreateTaskForm(props) {
  const {newTask} = props;

  const [name, setName] = useState ('');
  const [image, setImage] = useState ('');
  const [description, setDescription] = useState ('');
  const [urgency, setUrgency] = useState ('');
 

  const handleForm = (e) => {
    e.preventDefault();
    const task = {
      name: name,
      image: image,
      description: description,
      urgency: parseInt(urgency)
    
    }
    newTask(task); 
    setName('');
    setImage('');
    setDescription('');
    setUrgency('');
  }



  return (
    
      <form  onSubmit={handleForm}>
      <div className='addForm'>
        <input type="text" placeholder="Task Name" value={name} onChange={(e) => {setName(e.target.value)}}/>
        <input type="text" placeholder="Image url" value={image} onChange={(e) => {setImage(e.target.value)}}/>
        <input type="text" placeholder="Description" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
        <input type="number" placeholder="Urgency Number"value={urgency} onChange={(e) => {setUrgency(e.target.value)}}/>
      
        <button type="submit">Create</button>
      </div>
      </form>
    
  )
}

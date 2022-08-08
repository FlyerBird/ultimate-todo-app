import './App.css';
import SearchBar from './components/SearchBar';
import TaskCard from './components/TaskCard';
import CreateTaskForm from './components/CreateTaskForm';
import UrgentTasks from './components/UrgentTasks';
import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const taskData = [
    
    {
      "id": uuidv4(),
      "name": "Do the IronNutrition ironhack lab",
      "image": "https://www.datocms-assets.com/14946/1634728628-fotos-iron-hack-barcelona-jan-erra-14.jpg?auto=compress&fm=jpg",
      "useful_link": "https://github.com/ironhack-labs/lab-react-ironnutrition",
      "urgency": 10,
      "description": "Do the lab",
      "done": false
    },
    {
      "id": uuidv4(),
      "name": "Finish ReactTraining ironhack lab iterations",
      "image": "https://www.datocms-assets.com/14946/1634728628-fotos-iron-hack-barcelona-jan-erra-14.jpg?auto=compress&fm=jpg",
      "useful_link": "https://github.com/ironhack-labs/lab-react-training",
      "urgency": 10,
      "description": "Do the lab",
      "done": false
    },
    {
      "id": uuidv4(),
      "name": "Do this awesome application",
      "image": "https://www.aiche.org/sites/default/files/images/courses/shutterstock_605503388.jpg",
      "useful_link": "https://dribbble.com/search/to-do-list",
      "urgency": 10,
      "description": "Make the ultimate most bestest to-do app that you'll see in your life",
      "done": false
    },
    {
      "id": uuidv4(),
      "name": "Do the first codewars kata",
      "image": "https://i.pinimg.com/originals/4f/82/8d/4f828d05f82b8b7aedfe8be6a7d9d2a3.png",
      "useful_link": "https://www.codewars.com/kata/54ba84be607a92aa900000f1",
      "urgency": 9,
      "description": "Do the Isograms kata",
      "done": false
    },
    {
      "id": uuidv4(),
      "name": "Do the second codewars kata",
      "image": "https://i.redd.it/ax9c8oakm9f61.png",
      "useful_link": "https://www.codewars.com/kata/558fc85d8fd1938afb000014",
      "urgency": 9,
      "description": "Do the sum of two integers kata",
      "done": false
    }
    
  ]

  /************ ADD TASK ***************/

  const [tasks, setTasks] = useState(taskData);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateTask = (task) => {
    console.log(task)
    task.id = uuidv4();
    const copy = [...tasks];
    copy.push(task);
    setTasks(copy);
  }
  
  return (
    <div className="App">
    <h1>MY TO DO LIST</h1>

    <div className='Header'>
      <div>
          <button className='card__button' onClick={() => setShowCreateForm(prev => !prev)}>{!showCreateForm ? "Create New Task" : "Hide"}</button>
          {showCreateForm && <CreateTaskForm newTask={handleCreateTask}/>}
        </div>
        <div>
          <UrgentTasks />
        </div>
    </div>
   
        <div>
          <SearchBar />
        </div>

        <div className='cardContainer'>
          <h2>All Tasks</h2>
          <TaskCard tasks={tasks}/>
        </div>
        
    </div>
  );
}

export default App;

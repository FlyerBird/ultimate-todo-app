import './App.css';
import tasks from './list.json';
import SearchBar from './components/SearchBar';
import AllTasks from './components/AllTasks';
import CreateTask from './components/CreateTask';
import UrgentTasks from './components/UrgentTasks';

function App() {
  return (
    <div className="App">
    <h1>MY TO DO LIST</h1>

    <div className='Header'>
      <div>
          <CreateTask />
        </div>
        <div>
          <UrgentTasks />
        </div>
    </div>
   
        <div>
          <SearchBar />
        </div>
        <div>
          <AllTasks />
        </div>
        
    </div>
  );
}

export default App;

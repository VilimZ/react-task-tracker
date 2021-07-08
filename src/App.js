
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor Apointment',
        day: 'Jul 6th at 3:15 am',
        reminder: true,
    },
    {
        id: 2,
        text: 'School Investigation',
        day: 'Apr 11th at 2:30 pm',
        reminder: true,
    },    {
        id: 3,
        text: 'Construction Start',
        day: 'Jul 6th at 5:45 am',
        reminder: true,
    },
    
    
])

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}
  return (
   <div className="container">
      <Header />
      <Tasks tasks={  tasks  } onDelete = {deleteTask}/>
      </div>
   )
    

  }

export default App;

import React, { FC, useState, ChangeEvent } from 'react';
import './App.css';
import { ITask } from './interface'
import TodoTask from './Components/TodoTask';

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (e : ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value)
    } else {
      setDeadline(parseInt(e.target.value))
    }
  }

  const addTask = ():void => {
    const newTask = {taskName: task, deadline: deadline};
    setTodo([...todo, newTask])
    setTask('')
    setDeadline(0)
    console.log(todo)
  }
  return (
    <div className="App">
      <div className="header">
        <div className='inputContainer'>
          <input type="text" placeholder='Task...' name="task" onChange={handleChange} value={task}></input>
          <input type="number" placeholder='Deadline (in Days)...' name="deadline" onChange={handleChange} value={deadline}></input>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        {todo.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task}/>
        })}
      </div>
    </div>
  );
}

export default App;

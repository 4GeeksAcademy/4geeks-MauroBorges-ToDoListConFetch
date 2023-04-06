import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [task, setTask]=useState("")
  const [todos, setTodos]=useState(["Tarea1", "Tarea2"])
  function addTask (e){
      if (e.code==="Enter"){
        setTodos([...todos, task])
        setTask("")
      }
  }

  function delTask(index){
      let newTodos=[...todos]
      newTodos.splice(index,1)
      setTodos(newTodos)

  }
	return ( 
  <>
<div className="card">
<div className="card-header">
  <input
    type="text"
  className="for control border 0"
  placeholder="Escriba una nueva tarea"
  value={task}
  onChange={(e)=>setTask(e.target.value)}
  onKeyDown={addTask}
  />
  <ul className="list-group list-group-flush">
    {
      todos.map((todo, index)=>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {todo}
        <button onClick={()=>delTask(index)} className="btn btn-outline-danger btn-sm rounded-pill">X</button>

        </li>
        


      )
    }
    
  </ul>
  <div className="card-footer">
    {todos.length} items
  </div>
</div>
</div>
</>		
  
	);
};

export default Home;

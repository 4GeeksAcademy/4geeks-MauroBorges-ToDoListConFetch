import React, { useState } from "react";
//create your first component
const Home = () => {
	const [task, setTask] = useState("")
	const [todos, setTodos] = useState([
		{label: "Dormir", done: false}, 
		{label: "Trabajar", done: false},
		{label: "ver tele", done: false},
		{label: "preguntar", done: false}
	])
	function addTask(e){
		if(e.code=="Enter"){
			//aqui se agrega la tarea
			setTodos([...todos, {label: task, done:false}])
			console.log(task)
			setTask("")
		}
	}

	function delTask(index){
		//aqui se elimina la tarea
		let newTodos = [...todos]
		newTodos.splice(index,1)
		setTodos(newTodos)
	}
	function checkTodo(index){
		let newTodos=[...todos]
		newTodos[index].done=!newTodos[index].done
		console.log(todos)
		setTodos(newTodos)
	}

	return (
		<>
	
			<p className="fs-1 text-center">ToDo's</p>
			<div className="card">
				<div className="card-header">
				<div className="mb-3">
					<input type="email"
					className="form-control border-0" 
					id="exampleFormControlInput1" 
					placeholder="Escribe una tarea"
					value={task}
					onChange={(e) => setTask(e.target.value)}
					onKeyDown={addTask}
					/>
				</div>
				</div>
				<ul className="list-group">
					{todos.map((todo, index) =>(
						<li key={index} className="item list-group-item d-flex justify-content-between align-items-center">
						<div className="form-check form-switch">
							<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={()=>checkTodo(index)} checked={todo.done}/>
							<label className="form-check-label" htmlFor="flexSwitchCheckDefault">{todo.label}</label>
						</div>
						<button onClick={()=> delTask(index)} type="button" className="btn btn-sm rounded-pill btn-outline-danger">x</button>
						</li>
					))}	
				</ul>
				<div className="card-footer">
					{todos.length} tasks left m8 <strong>les goo!!</strong>
				</div>
			</div>
		</>
	);
};

export default Home;
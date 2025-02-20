import React, { useState, useEffect } from "react";


//create your first component
const Home = () => {
	const [task, setTask] = useState("")
	const [todos, setTodos] = useState([])
	const apiURL = "https://assets.breatheco.de/apis/fake/todos/user/mauroborgesm"

	async function updateList(e, todos) {

		if ( e.key == "Enter") {
			// let value;
			// if(index != null){
			// 	deleteList(index)
			// 	value=todos;
			// }else{

				let myTask = { label: task, done: false }
				let value = todos;
				value.push(myTask);
			

			let response = await fetch(apiURL, {
				body: JSON.stringify(value),
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				}

			})

			if (response.ok) {
				loadList();
			}
			return response.status


		}
	}
	// async function deleteList(index) {
	// 	setTodos(current => [
	// 		...current.slice(0, index),
	// 		...current.slice(index + 1, current.length)
			
	// 	]);
		
		
	// }

	async function deleteList(index) {
		try {
			const newTodos = [...todos];
			newTodos.splice(index, 1);
	
			const response = await fetch(apiURL, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newTodos),
			});
			if (!response.ok) {
				throw new Error("Error al borrar la tarea");
			}
			setTodos(newTodos);
		} catch (error) {
			console.error(error);
		}
	}

	async function loadList() {
		let response = await fetch(apiURL)
		if (response.ok) {
			let data = await response.json()
			setTodos(data)
		}
		return response.status

	}
	async function newList() {
		let response = await fetch(apiURL, {
			body: JSON.stringify([]),
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			}

		}).then(response => console.log(response.json()))
		//  .then(res)=>{
		// 		if (res.ok) {
		// 			loadList()

		// 		}else {
		// 			console.log("No se pudo obtener los datos")
		// 		}
		//  })


	}

	useEffect(() => {
		newList();
		loadList();


	}, [])


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
							onKeyDown={(e) => updateList(e, todos)}
						/>
					</div>
				</div>
				<ul className="list-group">
					{todos.map((todo, index) => (
						<li key={index} className="item list-group-item d-flex justify-content-between align-items-center">
							<div className="form-check form-switch">
								<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={todo.done} />
								<label className="form-check-label" htmlFor="flexSwitchCheckDefault">{todo.label}</label>
							</div>
							<button onClick={() => deleteList(index)} type="button" className="btn btn-sm rounded-pill btn-outline-danger">x</button>
						</li>
					))}
				</ul>
				<div className="card-footer">
					{todos.length} tasks left <strong>lets goo!!</strong>
				</div>
			</div>
		</>
	);
}



// useEffect(() => {
// 	loadList().then(async status => {
// 		if (status == 404) {

// 			let response = await fetch(apiURL, {
// 			method: "POST",
// 			body: "[]",
// 			headers: {
// 					"Content-Type": "application/json"
// 				}
// 			})
// 			if (response.ok) return loadList();
// 	})
// }, [])








// return (
// 	<>

// 		<p className="fs-1 text-center">ToDo's</p>
// 		<div className="card">
// 			<div className="card-header">
// 				<div className="mb-3">
// 					<input type="email"
// 						className="form-control border-0"
// 						id="exampleFormControlInput1"
// 						placeholder="Escribe una tarea"
// 						value={task}
// 						onChange={(e) => setTask(e.target.value)}
// 						onKeyDown={addTask}
// 					/>
// 				</div>
// 			</div>
// 			<ul className="list-group">
// 				{todos.map((todo, index) => (
// 					<li key={index} className="item list-group-item d-flex justify-content-between align-items-center">
// 						<div className="form-check form-switch">
// 							<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={() => checkTodo(index)} checked={todo.done} />
// 							<label className="form-check-label" htmlFor="flexSwitchCheckDefault">{todo.label}</label>
// 						</div>
// 						<button onClick={() => delTask(index)} type="button" className="btn btn-sm rounded-pill btn-outline-danger">x</button>
// 					</li>
// 				))}
// 			</ul>
// 			<div className="card-footer">
// 				{todos.length} tasks left <strong>lets goo!!</strong>
// 			</div>
// 		</div>
// 	</>
// );


export default Home;
import { useState } from "react"

function ManageList(){
	const [lista, setLista] = useState(["Gabriel", "Arthur", "Clei", "Luana", "Guilherme"])
	const [users, setUsers] = useState([{id: 0, name: "Luana", age: 19}, {id: 1, name: "Giovana", age: 21}])

	function renderNome(nome, index){
		return <li key={index}>{nome}</li>
	}

	function renderUsers(user){
		return (
			<li key={user.id}>
				<p>ID: {user.id} - Nome: {user.name} - Idade: {user.age}</p>
			</li>
		)
	}

  	return (
    	<div>
			<ul>
				{lista.map(renderNome)}
			</ul>
			<ul>
				{users.map(renderUsers)}
			</ul>
		</div>
	)
}

export default ManageList
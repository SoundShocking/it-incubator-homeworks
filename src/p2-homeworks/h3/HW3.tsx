import { useState } from 'react'
import GreetingContainer from './GreetingContainer'
import { v4 } from "uuid";

// types
export type UserType = {
	_id: string
	name: string
}

// уровень работы с глобальными данными
function HW3() {
	const [users, setUsers] = useState<UserType[]>([])

	const addUserCallback = (name: string) => {
		const newUser: UserType = {
			_id: v4(),
			name
		}
		setUsers([...users, newUser])
	}

	return (
		<div>
			<div className="homework__title">Homework 3</div>

			<GreetingContainer users={ users } addUserCallback={ addUserCallback } />

			<hr />
		</div>
	)
}

export default HW3

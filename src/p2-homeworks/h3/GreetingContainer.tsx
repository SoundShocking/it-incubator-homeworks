import { ChangeEvent, FC, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
	users: UserType[]
	addUserCallback: (name: string) => void
}

const GreetingContainer: FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => { // деструктуризация пропсов
	const [name, setName] = useState<string>('')
	const [error, setError] = useState<string>('')

	const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.currentTarget.value.trim()) {
			setError('name is required')
		} else {
			setError('')
		}
		setName(e.currentTarget.value)
	}

	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			addUser()
		}
	}

	const addUser = () => {
		if (name) {
			alert(`Hello ${ name }!`)
			addUserCallback(name)
			setName('')
		}
	}

	const totalUsers = users.length

	return (
		<Greeting
			name={ name }
			setNameCallback={ setNameCallback }
			addUser={ addUser }
			error={ error }
			totalUsers={ totalUsers }
			onKeyPressHandler={ onKeyPressHandler }
		/>
	)
}

export default GreetingContainer

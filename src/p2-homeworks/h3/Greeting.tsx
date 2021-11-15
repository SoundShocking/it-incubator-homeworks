import { ChangeEvent, FC, KeyboardEvent } from 'react'
import clsx from "clsx";
import styles from './Greeting.module.css'

type GreetingPropsType = {
	name: string
	setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
	addUser: () => void
	error: string
	totalUsers: number
	onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

const Greeting: FC<GreetingPropsType> = (
	{ name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler } // деструктуризация пропсов
) => {
	const inputClass = clsx([error && styles.error], [styles.input])

	return (
		<div>
			<div className={ styles.inputRow }>
				<input value={ name } onChange={ setNameCallback } className={ inputClass } onKeyPress={ onKeyPressHandler } />
				<button onClick={ addUser } className={ styles.addButton }>add</button>
			</div>

			{ error && <div className={ styles.errorText }>{ error }</div> }

			<div className={ styles.countUsers }>Users: { totalUsers }</div>
		</div>
	)
}

export default Greeting

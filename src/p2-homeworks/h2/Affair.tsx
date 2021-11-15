import { FC } from 'react'
import clsx from "clsx";
import { AffairType } from "./HW2";
import styles from './Affairs.module.css'

type AffairPropsType = {
	affair: AffairType
	deleteAffairCallback: (id: number) => void
}

const Affair: FC<AffairPropsType> = (props) => {
	const deleteCallback = () => {
		props.deleteAffairCallback(props.affair._id)
	}// need to fix

	return (
		<div className={ styles.affair }>
			<div>{ props.affair.name }</div>
			<div className={ clsx(
				[props.affair.priority === 'low' && styles.low],
				[props.affair.priority === 'middle' && styles.middle],
				[props.affair.priority === 'high' && styles.high]
			) }
			>{ props.affair.priority }</div>

			<button onClick={ deleteCallback } className={styles.btnDelete}>X</button>
		</div>
	)
}

export default Affair

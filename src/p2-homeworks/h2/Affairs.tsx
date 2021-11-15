import { FC } from "react";
import Affair from './Affair'
import { AffairType, FilterType } from './HW2'
import styles from './Affairs.module.css'
import clsx from "clsx";

type AffairsPropsType = {
	data: AffairType[]
	setFilter: (filter: FilterType) => void
	deleteAffairCallback: (id: number) => void
	filter: FilterType
}

const Affairs: FC<AffairsPropsType> = (props) => {
	const mappedAffairs = props.data.map((affair: AffairType) => (
		<Affair
			key={ affair._id }
			affair={ affair }
			deleteAffairCallback={ props.deleteAffairCallback }
		/>
	))

	const setAll = () => props.setFilter('all')
	const setHigh = () => props.setFilter('high')
	const setMiddle = () => props.setFilter('middle')
	const setLow = () => props.setFilter('low')

	return (
		<div>
			{ mappedAffairs }

			<div className={ styles.filters }>
				<button onClick={ setAll } className={ clsx([styles.btn], [props.filter === 'all' && styles.btnActive]) }>All</button>
				<button onClick={ setHigh } className={ clsx([styles.btn], [props.filter === 'high' && styles.btnActive]) }>High</button>
				<button onClick={ setMiddle } className={ clsx([styles.btn], [props.filter === 'middle' && styles.btnActive]) }>Middle</button>
				<button onClick={ setLow } className={ clsx([styles.btn], [props.filter === 'low' && styles.btnActive]) }>Low</button>
			</div>
		</div>
	)
}

export default Affairs

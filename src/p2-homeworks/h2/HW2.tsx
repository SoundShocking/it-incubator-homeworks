import { FC, useState } from 'react'
import Affairs from './Affairs'
import styles from './Affairs.module.css'

// types
export type AffairPriorityType = 'low' | 'middle' | 'high'
export type AffairType = {
	_id: number
	name: string
	priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
	{ _id: 1, name: 'React', priority: 'high' },
	{ _id: 2, name: 'anime', priority: 'low' },
	{ _id: 3, name: 'games', priority: 'low' },
	{ _id: 4, name: 'work', priority: 'high' },
	{ _id: 5, name: 'html & css', priority: 'middle' },
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
	if (filter === 'all') {
		return affairs
	} else {
		return affairs.filter(affair => affair.priority === filter)
	}
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
	return affairs.filter(affair => affair._id !== _id)
}

const HW2: FC = () => {
	const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
	const [filter, setFilter] = useState<FilterType>('all')

	const filteredAffairs = filterAffairs(affairs, filter)
	const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

	return (
		<div>
			<div className="homework__title">Homework 2</div>

			<div className={ styles.affairs }>
				<Affairs
					data={ filteredAffairs }
					setFilter={ setFilter }
					deleteAffairCallback={ deleteAffairCallback }
					filter={filter}
				/>
			</div>
			<hr />
		</div>
	)
}

export default HW2
import React, { FC } from 'react'
import styles from './Message.module.css'

type PropsType = {
	avatar: string
	name: string
	message: string
	time: string
}

const Message: FC<PropsType> = (props) => {
	return (
		<div className={styles.message}>
			<div className={styles.avatar}>
				<img src={props.avatar} alt={props.name} />
			</div>

			<div className={styles.messageBox}>
				<div className={styles.username}>
					{props.name}
				</div>

				<div className={styles.messageText}>
					{props.message}
				</div>

				<div className={styles.messageTime}>
					{props.time}
				</div>
			</div>
		</div>
	)
}

export default Message

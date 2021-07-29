import React from 'react'
import intl from 'src/i18n'
import './styles.scss'

export const Completed = ({ onClose }) => {
	const styles = {
		container: 'completed__container',
		description: 'completed__description'
	}

	return (
		<div className={styles.container}>
			<span className={styles.description}>{intl.completed}</span>
		</div>
	)
}

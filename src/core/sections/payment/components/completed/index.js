import React from 'react'
import intl from 'src/i18n'
import { colors } from 'src/helpers/constants'
import { Close } from '@material-ui/icons'

import './styles.scss'

export const Completed = ({ onClose }) => {
	const styles = {
		container: 'completed__container',
		description: 'completed__description',
		header: 'completed__header',
		content: 'completed__content'
	}

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Close
					fontSize="large"
					onClick={onClose}
					style={{ color: colors.blue }}
				/>
			</div>
			<div className={styles.content}>
				<span className={styles.description}>{intl.completed}</span>
			</div>
		</div>
	)
}

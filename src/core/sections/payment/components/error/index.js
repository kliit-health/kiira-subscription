import React from 'react'
import intl from 'src/i18n'
import { colors } from 'src/helpers/constants'
import { Close } from '@material-ui/icons'

import './styles.scss'

export const Error = ({ onClose }) => {
	const styles = {
		container: 'error__container',
		description: 'error__description',
		header: 'error__header',
		content: 'error__content'
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
				<span className={styles.description}>{intl.somethingWentWrong}</span>
			</div>
		</div>
	)
}

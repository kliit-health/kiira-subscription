import React from 'react'
import intl from 'src/i18n'
import './styles.scss'

export const Error = () => {
	const styles = {
		container: 'error__container',
		description: 'error__description'
	}

	return (
		<div className={styles.container}>
			<span className={styles.description}>{intl.somethingWentWrong}</span>
		</div>
	)
}

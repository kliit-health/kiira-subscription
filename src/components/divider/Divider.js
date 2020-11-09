import React from 'react'
import classnames from 'classnames'
import './styles.scss'

export const Divider = ({ classes = {}, bold, gradient }) => {
	const modifiers = {
		'divider--bold': bold,
		'divider--gradient': gradient
	}

	const styles = {
		divider: classnames('divider', classes.root, modifiers)
	}

	return <div className={styles.divider} />
}

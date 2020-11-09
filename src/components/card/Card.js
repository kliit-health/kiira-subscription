import React from 'react'
import classnames from 'classnames'
import './styles.scss'

export const Card = ({ classes = {}, onClick, children }) => {
	const styles = {
		root: classnames('card', classes.root),
		container: classnames('card__header-container', classes.container)
	}

	return (
		<div onClick={onClick} className={styles.root}>
			{children}
		</div>
	)
}

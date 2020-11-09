import React from 'react'
import classnames from 'classnames'
import './styles.scss'

export const Stepper = ({ current, classes = {}, total = 4, hidden }) => {
	const modifiers = {
		'stepper--hidden': hidden
	}

	const styles = {
		root: classnames('stepper', classes.root, { ...modifiers }),
		text: classnames('stepper__text', classes.text)
	}

	return (
		<div className={styles.root}>
			<span className={styles.text}>{`Step ${current + 1} of ${total}`}</span>
		</div>
	)
}

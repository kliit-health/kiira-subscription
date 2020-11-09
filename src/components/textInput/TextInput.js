import React from 'react'
import classnames from 'classnames'
import './styles.scss'

export const TextInput = ({ classes = {}, title, error, style, ...rest }) => {
	const styles = {
		root: classnames('text-input', classes.root),
		input: classnames('text-input__input', classes.input),
		title: classnames('text-input__title', classes.title),
		error: classnames('text-input__error', classes.error)
	}

	return (
		<div style={style} className={styles.root}>
			{title && <label className={styles.title}>{title}</label>}
			<input className={styles.input} {...rest} />
			<p className={styles.error}>{error}</p>
		</div>
	)
}

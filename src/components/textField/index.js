import React from 'react'
import classnames from 'classnames'
import './styles.scss'

export const TextField = ({
	label,
	helperText,
	name,
	error,
	styles,
	...rest
}) => {
	const classes = {
		root: 'text-field',
		label: 'text-field__label',
		input: classnames('text-field__input', {
			'text-field__input--error': error
		}),
		helper: classnames('text-field__helper', {
			'text-field__helper--error': error
		})
	}

	return (
		<div style={styles} className={classes.root}>
			<label htmlFor={name} className={classes.label}>
				{label}
			</label>
			<input
				autoComplete={Math.random().toString()}
				className={classes.input}
				name={name}
				{...rest}
			/>
			<p className={classes.helper}>{helperText}</p>
		</div>
	)
}

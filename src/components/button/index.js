import React from 'react'
import './styles.scss'

export const Button = ({ children, color, ...rest }) => {
	const classes = {
		root: 'form-button'
	}

	return (
		<button className={classes.root} {...rest}>
			{children}
		</button>
	)
}

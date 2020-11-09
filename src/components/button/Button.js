import React from 'react'
import { ArrowBackIos } from '@material-ui/icons'
import { CircularProgress } from 'src/components'
import classnames from 'classnames'
import './styles.scss'

export const Button = ({
	children,
	outlined,
	link,
	underlined,
	hidden,
	classes = {},
	disabled,
	back,
	loading,
	...rest
}) => {
	const modifiers = {
		'button--outlined': outlined,
		'button--link': link,
		'button--underlined': underlined,
		'button--hidden': hidden,
		'button--disabled': disabled,
		'button--loading': loading
	}

	const styles = {
		root: classnames('button', classes.root, modifiers),
		text: classnames('button__text', classes.text, modifiers)
	}

	return (
		<button className={styles.root} disabled={disabled || loading} {...rest}>
			{loading && <CircularProgress />}
			{back && <ArrowBackIos style={{ fontSize: 20 }} />}
			<span className={styles.text}>{children}</span>
		</button>
	)
}

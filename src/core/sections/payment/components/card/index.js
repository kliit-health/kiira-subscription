import React from 'react'
import classnames from 'classnames'
import { Card as CardBase } from 'src/components'
import './styles.scss'

const Card = props => {
	const { description, title, price, active } = props
	const modifiers = {
		'selected-plan--active': active
	}

	const styles = {
		card: { root: classnames('selected-plan', { ...modifiers }) },
		title: 'selected-plan__title',
		price: 'selected-plan__price',
		description: 'selected-plan__description'
	}

	return (
		<CardBase classes={styles.card}>
			<p className={styles.title}>{title}</p>
			<p className={styles.price}>{`$${price}`}</p>
			<p className={styles.description}>{description}</p>
		</CardBase>
	)
}

export default Card

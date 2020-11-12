import React from 'react'
import classnames from 'classnames'
import { Card as CardBase } from 'src/components'
import './styles.scss'

const Card = props => {
	const { onClick, description, title, price, active, mobile } = props
	const handleClick = () => {
		if (onClick) {
			onClick(props)
		}
	}

	const modifiers = {
		'plan-card--active': active & mobile,
		'plan-card--mobile': mobile
	}

	const styles = {
		card: { root: classnames('plan-card', { ...modifiers }) },
		title: 'plan-card__title',
		price: 'plan-card__price',
		description: 'plan-card__description'
	}

	return (
		<CardBase classes={styles.card} onClick={handleClick}>
			<p className={styles.title}>{title}</p>
			<p className={styles.price}>{`$${price}`}</p>
			<p className={styles.description}>{description}</p>
		</CardBase>
	)
}

export default Card

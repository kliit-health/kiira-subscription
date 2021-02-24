import React from 'react'
import classnames from 'classnames'
import { Card as CardBase } from 'src/components'
import model from './model'
import './styles.scss'

const Card = props => {
	const { onClick, title, price, active, mobile, benefits } = props

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
		details: 'plan-card__price-details',
		description: 'plan-card__description',
		item: 'plan-card__item',
		image: 'plan-card__image',
		container: 'plan-card__container'
	}

	return (
		<CardBase classes={styles.card} onClick={handleClick}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.price}>
				{`$${price}`}
				<span className={styles.details}>/mo</span>
			</p>
			<div className={styles.container}>
				{benefits.map(({ id, description }) => (
					<div key={id} className={styles.item}>
						<img className={styles.image} src={model[id].image} />
						<p className={styles.description}>{description}</p>
					</div>
				))}
			</div>
		</CardBase>
	)
}

export default Card

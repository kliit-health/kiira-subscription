import React from 'react'
import { Button, Divider } from 'src/components'
import { switchCase } from 'src/helpers/functions'
import { Computer, Message, Penguin } from 'src/svgs'
import intl from 'src/i18n'
import './styles.scss'

export const Card = ({ title, price, color, benefits, onSelect, id }) => {
	const styles = {
		root: 'card',
		title: 'card__title',
		price: 'card__price',
		benefitsContent: 'card__benefits-content',
		benefitsTitle: 'card__benefits-title',
		benefitsDescription: 'card__benefits-description',
		benefitsContainer: 'card__benefits-container',
		button: {
			root: 'card__button'
		}
	}

	const handleClick = () => {
		onSelect(id)
	}

	return (
		<div className={styles.root}>
			<span className={styles.title}>{title}</span>
			<span className={styles.price}>{`$${price}/mo`}</span>
			<Divider color={color} />
			{benefits.map(({ description, id, title }) => (
				<div key={id} className={styles.benefitsContent}>
					{switchCase({
						[benefit.care]: <Penguin fill={color} />,
						[benefit.visits]: <Computer fill={color} />,
						[benefit.messaging]: <Message fill={color} />
					})(null)(id)}
					<div className={styles.benefitsContainer}>
						<span className={styles.benefitsTitle}>{title}</span>
						<span className={styles.benefitsDescription}>{description}</span>
					</div>
				</div>
			))}
			<Button color={color} onClick={handleClick}>
				{intl.select}
			</Button>
		</div>
	)
}

const benefit = {
	visits: 'visits',
	messaging: 'messaging',
	care: 'care'
}

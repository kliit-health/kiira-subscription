import React from 'react'
import { Divider } from 'src/components'
import { switchCase } from 'src/helpers/functions'
import { Computer, Message, Penguin } from 'src/svgs'
import intl from 'src/i18n'
import './styles.scss'

export const Card = ({
	title,
	price,
	color,
	benefits,
	onSelect,
	id,
	trial
}) => {
	const styles = {
		root: 'card',
		header: 'card__header',
		title: 'card__title',
		titleContainer: 'card__title-container ',
		price: 'card__price',
		contentContainer: 'card__content-container',
		benefitsContent: 'card__benefits-content',
		benefitsDescription: 'card__benefits-description',
		benefitsContainer: 'card__benefits-container',
		button: 'card__button',
		buttonTitle: 'card__button-title',
		trialText: 'card__trial-text',
		trialContainer: 'card__trial-container'
	}

	const handleClick = id => {
		if (onSelect) {
			onSelect(id)
		}
	}

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<div className={styles.titleContainer}>
					<span className={styles.title}>{title}</span>
				</div>
				<span className={styles.price}>{`$${price}/mo`}</span>
				{trial.days > 0 && (
					<div className={styles.trialContainer}>
						<span className={styles.trialText}>
							{`${trial.days} Day Free Trial!`}
						</span>
					</div>
				)}
			</div>
			<Divider color={color} />
			<div className={styles.contentContainer}>
				{benefits.map(({ description, id }) => (
					<div key={id} className={styles.benefitsContent}>
						{switchCase({
							[benefit.care]: <Penguin fill={color} />,
							[benefit.visits]: <Computer fill={color} />,
							[benefit.messaging]: <Message fill={color} />
						})(null)(id)}
						<div className={styles.benefitsContainer}>
							<span className={styles.benefitsDescription}>{description}</span>
						</div>
					</div>
				))}
			</div>
			<div
				className={styles.button}
				onClick={() => handleClick(id)}
				style={{ backgroundColor: color }}
			>
				<span className={styles.buttonTitle}>{intl.select}</span>
			</div>
		</div>
	)
}

const benefit = {
	visits: 'visits',
	messaging: 'messaging',
	care: 'care'
}

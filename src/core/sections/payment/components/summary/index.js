import React, { useContext } from 'react'
import { CoreContext } from 'src/core'
import intl from 'src/i18n'
import './styles.scss'

export const Summary = () => {
	const { plan } = useContext(CoreContext)

	const styles = {
		root: 'summary',
		title: 'summary__title',
		container: 'summary__container',
		fee: 'summary__fee',
		due: 'summary__due',
		description: 'summary__description',
		content: 'summary__content',
		header: 'summary__header',
		footer: 'summary__footer'
	}

	return Boolean(plan) ? (
		<div className={styles.root}>
			<div className={styles.header}>
				<span className={styles.title}>{`${plan.title} Plan`}</span>
			</div>
			<div className={styles.content}>
				<div className={styles.container}>
					<p className={styles.fee}>{intl.monthlyFee}</p>
					<p className={styles.fee}>{`$${plan.price}`}</p>
				</div>
				<div className={styles.container}>
					<p className={styles.due}>{intl.totalDue}</p>
					<p className={styles.due}>{`$${plan.price}`}</p>
				</div>
			</div>
			<div className={styles.footer}>
				<p className={styles.description}>{intl.membershipStart}</p>
			</div>
		</div>
	) : null
}

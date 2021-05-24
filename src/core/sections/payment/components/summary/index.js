import React, { useContext } from 'react'
import { CoreContext } from 'src/core'
import { Card, makeStyles } from '@material-ui/core'
import intl from 'src/i18n'
import { colors } from 'src/helpers/constants'
import './styles.scss'

const useStyles = makeStyles(theme => ({
	card: {
		[theme.breakpoints.down('sm')]: {
			marginBottom: theme.spacing(4),
			marginLeft: 0,
			width: 260
		},
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: colors.lightBlue,
		padding: theme.spacing(4),
		marginLeft: theme.spacing(4),
		alignItems: 'center',
		borderRadius: 12,
		justifyContent: 'space-between'
	}
}))

export const Summary = () => {
	const { plan } = useContext(CoreContext)
	const classes = useStyles()

	const styles = {
		root: 'summary',
		title: 'summary__title',
		container: 'summary__container',
		content: 'summary__content',
		fee: 'summary__fee',
		due: 'summary__due',
		description: 'summary__description'
	}

	return Boolean(plan) ? (
		<Card className={classes.card}>
			<span className={styles.title}>{`${plan.title} Plan`}</span>
			<div className={styles.content}>
				<div className={styles.container}>
					<span className={styles.fee}>{intl.monthlyFee}</span>
					<span className={styles.fee}>{`$${plan.price}`}</span>
				</div>
				<div className={styles.container}>
					<span className={styles.due}>{intl.totalDue}</span>
					<span className={styles.due}>{`$${plan.price}`}</span>
				</div>
			</div>
			<span className={styles.description}>{intl.membershipStart}</span>
		</Card>
	) : null
}

import React, { useContext, useEffect, useState } from 'react'
import { Modal, Backdrop, Fade, Grid, makeStyles } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { Form, Summary, Error, Completed } from './components'
import { switchCase } from 'src/helpers/functions'
import { colors } from 'src/helpers/constants'
import { useSelector, useDispatch } from 'react-redux'
import { resetPaymentReducer } from 'src/redux/actions'
import { CoreContext } from 'src/core'
import intl from 'src/i18n'
import './styles.scss'

const useStyles = makeStyles(theme => ({
	container: {
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column-reverse'
		}
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	grid: {
		[theme.breakpoints.down('sm')]: {
			marginBottom: theme.spacing(4)
		},
		display: 'flex'
	}
}))

export const Payment = () => {
	const { plan, selectPlan } = useContext(CoreContext)
	const [screen, setScreen] = useState(state.initial)
	const paymentError = useSelector(state => state.payment.error)
	const completed = useSelector(state => state.payment.completed)
	const dispatch = useDispatch()
	const classes = useStyles()

	const styles = {
		title: 'payment__title',
		modal: 'payment__modal',
		container: 'payment__container',
		header: 'payment__header'
	}

	useEffect(() => {
		setScreen(
			completed ? state.success : paymentError ? state.error : state.initial
		)
	}, [completed, paymentError])

	const handleClose = () => {
		selectPlan(null)
		dispatch(resetPaymentReducer())
	}

	return (
		<Modal
			className={classes.modal}
			open={Boolean(plan)}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{ timeout: 500 }}
		>
			<Fade in={Boolean(plan)}>
				{switchCase({
					[state.initial]: (
						<div className={styles.container}>
							<div className={styles.header}>
								<span className={styles.title}>{intl.confirmPay}</span>
								<Close
									fontSize="large"
									onClick={handleClose}
									style={{ color: colors.blue }}
								/>
							</div>
							<Grid container className={classes.container} spacing={2}>
								<Grid className={classes.grid} item md={7} sm={12} xs={12}>
									<Form />
								</Grid>
								<Grid item md={5}>
									<Summary />
								</Grid>
							</Grid>
						</div>
					),
					[state.error]: <Error onClose={handleClose} />,
					[state.success]: <Completed onClose={handleClose} />
				})(null)(screen)}
			</Fade>
		</Modal>
	)
}

const state = {
	error: 'error',
	initial: 'initial',
	success: 'success'
}

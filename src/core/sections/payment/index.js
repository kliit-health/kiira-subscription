import React, { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Modal from 'react-modal'
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
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative'
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
		controls: 'payment__controls',
		form: 'payment__form',
		title: 'payment__title',
		modal: 'payment__modal',
		container: 'payment__container',
		header: 'payment__header',
		content: 'payment__content'
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
			isOpen={Boolean(plan)}
			onRequestClose={handleClose}
			style={modalStyles}
		>
			<div className={styles.form}>
				<div className={styles.controls}>
					<Close
						fontSize="large"
						onClick={handleClose}
						style={{ color: colors.blue }}
					/>
				</div>
				{switchCase({
					[state.initial]: (
						<div className={styles.container}>
							<div className={styles.header}>
								<span className={styles.title}>{intl.confirmPay}</span>
							</div>
							<div className={styles.content}>
								<Form />
								<Summary />
							</div>
						</div>
					),
					[state.error]: (
						<div className={styles.container}>
							<Error onClose={handleClose} />
						</div>
					),
					[state.success]: (
						<div className={styles.container}>
							<Completed onClose={handleClose} />
						</div>
					)
				})(null)(screen)}
			</div>
		</Modal>
	)
}

const state = {
	error: 'error',
	initial: 'initial',
	success: 'success'
}

const modalStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		padding: 0,
		transform: 'translate(-50%, -50%)'
	}
}

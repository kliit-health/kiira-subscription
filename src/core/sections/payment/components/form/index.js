import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	useElements,
	useStripe,
	CardNumberElement
} from '@stripe/react-stripe-js'
import { useFormik } from 'formik'
import { string, object } from 'yup'
import { Button } from 'src/components'
import { cleanPhoneNumber, getState } from 'src/helpers/functions'
import { verifyEmailAddress } from 'src/firebase/functions'
import { CoreContext } from 'src/core'
import { colors } from 'src/helpers/constants'
import intl from 'src/i18n'
import model from './model'
import {
	createPaymentMethod,
	submitPayment,
	confirmCardPayment
} from 'src/redux/actions'
import './styles.scss'

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
const zipRegex = RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/)

export const Form = () => {
	const elements = useElements()
	const dispatch = useDispatch()
	const stripe = useStripe()

	const loading = useSelector(state => state.payment.loading)
	const paymentMethod = useSelector(state => state.payment.paymentMethod)
	const requiresAction = useSelector(state => state.payment.requiresAction)
	const clientSecret = useSelector(state => state.payment.clientSecret)
	const details = useSelector(state => state.payment.details)

	const { plan } = useContext(CoreContext)

	const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
		useFormik({
			onSubmit: async ({ phoneNumber, ...rest }) => {
				const numberElement = elements.getElement(CardNumberElement)

				dispatch(
					createPaymentMethod({
						numberElement,
						stripe,
						details: {
							phoneNumber: cleanPhoneNumber(phoneNumber),
							...rest
						}
					})
				)
			},
			validationSchema: object({
				displayName: string().required(intl.nameRequired),
				email: string()
					.email(intl.invalidEmailFormat)
					.test('test-email-existence', intl.emailInUse, value =>
						value ? verifyEmailAddress(value) : true
					)
					.required(intl.emailRequired),
				phoneNumber: string()
					.matches(phoneRegex, intl.invalidPhoneNumber)
					.required(intl.phoneNumberRequired),
				postalCode: string()
					.matches(zipRegex, intl.invalidZipCode)
					.test('test-availability', intl.planNotAvailable, value => {
						if (!value) return true

						const selectedState = getState(`${value}`)

						console.log(selectedState, value)

						if (selectedState) {
							return plan.states.some(state => state === selectedState.code)
						}
					})
					.required(intl.zipCodeRequired)
			}),
			validateOnChange: false,
			validateOnBlur: false,
			initialValues: {
				displayName: '',
				email: '',
				phoneNumber: '',
				postalCode: ''
			}
		})

	useEffect(() => {
		if (paymentMethod) {
			dispatch(submitPayment({ paymentMethod, ...details, plan }))
		}
	}, [paymentMethod])

	useEffect(() => {
		if (requiresAction && clientSecret) {
			dispatch(
				confirmCardPayment({
					stripe,
					clientSecret
				})
			)
		}
	}, [requiresAction, clientSecret])

	const styles = {
		root: 'details',
		button: { root: 'details__submit-button' },
		terms: 'details__terms',
		link: 'details__link'
	}

	return (
		<form className={styles.root} onSubmit={handleSubmit}>
			{model.map(
				({ dataKey, title, styles, component: TextField, ...rest }) => (
					<TextField
						styles={styles}
						onChange={handleChange}
						helperText={touched[dataKey] && errors[dataKey]}
						label={title}
						value={values[dataKey]}
						onBlur={handleBlur}
						name={dataKey}
						id={dataKey}
						key={dataKey}
						error={Boolean(touched[dataKey] && errors[dataKey])}
						{...rest}
					/>
				)
			)}
			<p className={styles.terms}>
				{intl.consent}
				<a className={styles.link} href="https://www.kiira.io/terms-conditions">
					{intl.terms}
				</a>
			</p>
			<Button disabled={loading} type="submit" color={colors.blue}>
				{loading ? intl.validating : intl.submit}
			</Button>
		</form>
	)
}

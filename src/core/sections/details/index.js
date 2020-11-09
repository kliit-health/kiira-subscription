import React from 'react'
import { connect } from 'react-redux'
import { useFormik } from 'formik'
import { TextInput, Button } from 'src/components'
import { cleanPhoneNumber } from 'src/helpers/functions'
import validationSchema from './validationSchema'
import { setDetails } from 'src/redux/actions'
import intl from 'src/i18n'
import model from './model'
import './styles.scss'

const Details = ({ data, setDetails, loading, error }) => {
	const {
		handleChange,
		handleSubmit,
		handleBlur,
		errors,
		touched,
		initialValues,
		isValid
	} = useFormik({
		isInitialValid: validationSchema.isValidSync(initialValues),
		onSubmit: ({ phoneNumber, ...rest }) => {
			const number = cleanPhoneNumber(phoneNumber)
			setDetails({ ...rest, phoneNumber: number })
		},
		initialValues: { ...data.profileInfo, ...data.address },
		validationSchema
	})

	const handleErrors = (touched, dataKey, errors, emailError) => {
		if (touched[dataKey] && errors[dataKey]) {
			return errors[dataKey]
		} else if (emailError) {
			if (dataKey === 'email') {
				return emailError
			}
		}
	}

	const styles = {
		root: 'details',
		form: 'details__form',
		container: 'details__container',
		title: 'details__title',
		description: 'details__description',
		keyword: 'details__keyword',
		button: { root: 'details__submit-button' }
	}

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<h1 className={styles.title}>
					{intl.startYour}
					<span className={styles.keyword}>{intl.kiira}</span>
					{intl.membershipToday}
				</h1>
				<p className={styles.description}>{intl.flexiblePlans}</p>
			</div>
			<form className={styles.form} onSubmit={handleSubmit}>
				{model.map(({ dataKey, ...rest }) => (
					<TextInput
						onChange={handleChange}
						name={dataKey}
						key={dataKey}
						id={dataKey}
						onBlur={handleBlur}
						error={handleErrors(touched, dataKey, errors, error)}
						{...rest}
					/>
				))}
				<Button
					type="submit"
					disabled={!isValid}
					loading={loading}
					classes={styles.button}
				>
					{loading ? intl.validating : intl.next}
				</Button>
			</form>
		</div>
	)
}

const mapStateToProps = state => ({
	loading: state.details.loading,
	error: state.details.error,
	data: state.details.data
})

const mapDispatchToProps = dispatch => ({
	setDetails: details => dispatch(setDetails(details))
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)

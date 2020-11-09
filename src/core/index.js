import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import SwipeableViews from 'react-swipeable-views'
import { Button, Stepper } from 'src/components'
import intl from 'src/i18n'
import { Details, Plans, Payment, Success } from './sections'
import { setPreviousPage, getPlans, setPlan } from 'src/redux/actions'
import oval from 'src/assets/images/oval.svg'

import './styles.scss'

const Core = ({
	index,
	setPreviousPage,
	getPlans,
	setPlan,
	plans,
	loading
}) => {
	useEffect(() => {
		getPlans()
	}, [])

	useEffect(() => {
		if (plans.length > 0) {
			setPlan(plans[1])
		}
	}, [plans])

	const handleBack = () => {
		setPreviousPage()
	}

	const styles = {
		root: 'core',
		oval: 'core__oval',
		container: 'core__container',
		back: { root: 'core__button-back' }
	}

	return (
		<div className={styles.root}>
			<img src={oval} className={styles.oval} />
			<div className={styles.container}>
				<Stepper current={index} hidden={index === 4 || loading} />
				<Button
					hidden={index === 0 || loading || index === 3}
					classes={styles.back}
					onClick={handleBack}
					link
					back
				>
					{intl.back}
				</Button>
				<SwipeableViews
					style={{ display: 'flex', flex: 1, width: '100%' }}
					containerStyle={{
						display: 'flex',
						flex: 1,
						width: '100%'
					}}
					index={index}
					slideStyle={{ display: 'flex' }}
				>
					<Details />
					<Plans />
					<Payment />
					<Success />
				</SwipeableViews>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	index: state.navigator.index,
	plans: state.plans.data,
	loading: state.payment.loading
})

const mapDispatchToProps = dispatch => ({
	setPreviousPage: () => dispatch(setPreviousPage()),
	getPlans: () => dispatch(getPlans()),
	setPlan: details => dispatch(setPlan(details))
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(Core)

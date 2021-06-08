import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CoreContext } from 'src/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { colors } from 'src/helpers/constants'
import { switchCase } from 'src/helpers/functions'
import { useDidMount } from 'src/hooks'
import { getPlans } from 'src/redux/actions'
import { Card } from './components'
import './styles.scss'

export const Plans = () => {
	const dispatch = useDispatch()

	const { selectPlan } = useContext(CoreContext)
	const plans = useSelector(state => state.plans.data)

	useDidMount(() => {
		dispatch(getPlans())
	})

	const styles = {
		root: 'plans',
		container: 'plans__container'
	}

	const handleSelect = plan => {
		selectPlan(plan)
	}

	return (
		<div className={styles.root}>
			{plans.map(plan => (
				<Card
					key={plan.title}
					color={switchCase({
						[subscription.basic]: colors.blue,
						[subscription.pro]: colors.purple,
						[subscription.premium]: colors.teal
					})(colors.blue)(plan.title)}
					onSelect={() => handleSelect(plan)}
					{...plan}
				/>
			))}
		</div>
	)
}

const subscription = {
	basic: 'Basic',
	pro: 'Pro',
	premium: 'Pro+'
}

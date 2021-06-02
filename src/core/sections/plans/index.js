import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CoreContext } from 'src/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Carousel from 'react-multi-carousel'
import { colors } from 'src/helpers/constants'
import { switchCase } from 'src/helpers/functions'
import { useDidMount } from 'src/hooks'
import { getPlans } from 'src/redux/actions'
import { Card } from './components'
import './styles.scss'

import 'react-multi-carousel/lib/styles.css'

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1
	},
	tablet: {
		breakpoint: { max: 1024, min: 700 },
		items: 1
	},
	mobile: {
		breakpoint: { max: 700, min: 0 },
		items: 1
	}
}

export const Plans = () => {
	const dispatch = useDispatch()
	const tablet = useMediaQuery('(min-width:980px)')
	const mobile = useMediaQuery('(max-width:700px)')

	const { selectPlan } = useContext(CoreContext)
	const plans = useSelector(state => state.plans.data)

	useDidMount(() => {
		dispatch(getPlans())
	})

	const styles = {
		root: 'plans',
		carousel: 'plans__carousel',
		container: 'plans__container'
	}

	const handleSelect = plan => {
		selectPlan(plan)
	}

	return tablet ? (
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
	) : (
		<Carousel
			removeArrowOnDeviceType={['tablet', 'mobile']}
			responsive={responsive}
			centerMode={!mobile}
			infinite
			showDots
		>
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
		</Carousel>
	)
}

const subscription = {
	basic: 'Basic',
	pro: 'Pro',
	premium: 'Pro+'
}

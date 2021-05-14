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
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'

export const Plans = () => {
	const dispatch = useDispatch()
	const tablet = useMediaQuery('(min-width:1280px)')
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

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 1,
		centerMode: true,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 880,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
					infinite: true
				}
			}
		]
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
		<Slider
			{...settings}
			children={plans.map(plan => (
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
		/>
	)
}

const subscription = {
	basic: 'Basic',
	pro: 'Pro',
	premium: 'Premium'
}

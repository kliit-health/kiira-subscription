import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CoreContext } from 'src/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Carousel from 'react-slick'
import { colors } from 'src/helpers/constants'
import { switchCase } from 'src/helpers/functions'
import { useDidMount } from 'src/hooks'
import { getPlans } from 'src/redux/actions'
import { Card } from './components'
import './styles.scss'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 1,
		centerMode: true,
		infinite: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					centerMode: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
					variableWidth: true,
					centerMode: true
				}
			},
			{
				breakpoint: 576,
				settings: {
					centerMode: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: true
				}
			},
			{
				breakpoint: 400,
				settings: {
					centerMode: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: true
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
		<Carousel {...settings}>
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

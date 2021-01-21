import React, { useEffect, useState } from 'react'
import intl from 'src/i18n'
import { connect } from 'react-redux'
import { Button } from 'src/components'
import { Card } from './components'
import { setNextPage, setPlan } from 'src/redux/actions'
import { useDidMount } from 'src/hooks'
import { getState } from 'src/helpers/functions'
import classnames from 'classnames'
import Coverflow from 'react-coverflow'
import './styles.scss'

const Plans = ({ setNextPage, setPlan, plans, plan, state }) => {
	const [mobile, setMobile] = useState(true)

	useDidMount(() => {
		checkWidth()
	})

	useEffect(() => {
		window.addEventListener('resize', checkWidth)
		return () => window.removeEventListener('resize', checkWidth)
	})

	const handleSubmit = () => {
		setNextPage()
	}

	const checkWidth = () => {
		const matches = window.matchMedia(`(max-width: 640px)`).matches
		setMobile(matches)
	}

	const modifiers = {
		'plans--error': state ? !plan.states.includes(state) : true
	}

	const styles = {
		root: 'plans',
		container: 'plans__container',
		title: 'plans__title',
		button: { root: 'plans__submit-button' },
		carousel: 'plans__carousel',
		mobile: 'plans__mobile',
		error: classnames('plans__error', { ...modifiers })
	}

	const handleSelection = plan => {
		setPlan(plan)
	}

	return (
		<div className={styles.root}>
			{plans.length > 0 && (
				<div className={styles.container}>
					<h1 className={styles.title}>{intl.selectPlan}</h1>
					<div style={{ width: mobile ? 0 : 640, height: mobile ? 0 : 400 }}>
						<Coverflow
							height="500"
							width="400"
							displayQuantityOfSide={1}
							navigation={false}
							enableScroll={false}
							clickable={true}
							enableHeading={false}
							otherFigureScale={0.7}
							currentFigureScale={1.2}
							active={0}
						>
							{plans.map((props, index) => (
								<Card onClick={handleSelection} key={index} {...props} />
							))}
						</Coverflow>
					</div>
					<div
						className={styles.mobile}
						style={{ display: mobile ? 'flex' : 'none' }}
					>
						{plans.map(({ title, ...props }, index) => (
							<Card
								mobile={true}
								onClick={handleSelection}
								key={index}
								active={plan.title === title}
								title={title}
								{...props}
							/>
						))}
					</div>
				</div>
			)}
			<p className={styles.error}>{intl.planNotAvaiable}</p>
			<Button
				disabled={state ? !plan.states.includes(state) : true}
				classes={styles.button}
				onClick={handleSubmit}
			>
				{intl.next}
			</Button>
		</div>
	)
}

const mapStateToProps = state => ({
	plans: state.plans.data,
	plan: state.plan,
	state: getState(state.details.data.address.postalCode).code
})

const mapDispatchToProps = dispatch => ({
	setNextPage: () => dispatch(setNextPage()),
	setPlan: details => dispatch(setPlan(details))
})

export default connect(mapStateToProps, mapDispatchToProps)(Plans)

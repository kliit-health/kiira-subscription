import React from 'react'
import intl from 'src/i18n'
import { connect } from 'react-redux'
import { Button } from 'src/components'
import { Card } from './components'
import { setNextPage, setPlan } from 'src/redux/actions'
import Coverflow from 'react-coverflow'
import './styles.scss'

const Plans = ({ setNextPage, setPlan, plans }) => {
	const handleSubmit = () => {
		setNextPage()
	}

	const styles = {
		root: 'plans',
		container: 'plans__container',
		title: 'plans__title',
		button: { root: 'plans__submit-button' },
		carousel: 'plans__carousel'
	}

	const handleSelection = plan => {
		setPlan(plan)
	}

	return (
		<div className={styles.root}>
			{plans.length > 0 && (
				<div className={styles.container}>
					<h1 className={styles.title}>{intl.simplePlan}</h1>
					<Coverflow
						height="500"
						width="400"
						className={styles.carousel}
						displayQuantityOfSide={1}
						navigation={false}
						enableScroll={false}
						clickable={true}
						enableHeading={false}
						otherFigureScale={0.7}
						currentFigureScale={1.2}
						active={1}
					>
						{plans.map((props, index) => (
							<Card onClick={handleSelection} key={index} {...props} />
						))}
					</Coverflow>
				</div>
			)}
			<Button classes={styles.button} onClick={handleSubmit}>
				{intl.next}
			</Button>
		</div>
	)
}

const mapStateToProps = state => ({
	plans: state.plans.data
})

const mapDispatchToProps = dispatch => ({
	setNextPage: () => dispatch(setNextPage()),
	setPlan: details => dispatch(setPlan(details))
})

export default connect(mapStateToProps, mapDispatchToProps)(Plans)

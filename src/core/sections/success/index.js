import React from 'react'
import { connect } from 'react-redux'
import intl from 'src/i18n'
import kiira from 'src/assets/images/kiira_logo_white.svg'

import './styles.scss'

const Success = ({ details }) => {
	const styles = {
		root: 'success',
		container: 'success__container',
		text: 'success__text',
		kiira: 'success__kiira'
	}

	const message = `${details.firstName}, ${intl.thankYou}`

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<img className={styles.kiira} src={kiira} />
				<p className={styles.text}>{message}</p>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	details: state.details.data.profileInfo
})

export default connect(mapStateToProps)(Success)

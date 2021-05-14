import React from 'react'
import classnames from 'classnames'
import './styles.scss'

export const Divider = ({ classes = {}, color }) => {
	const styles = {
		root: classnames('divider', classes.root)
	}

	return <div className={styles.root} style={{ backgroundColor: color }} />
}

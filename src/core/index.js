import React, { createContext, useState } from 'react'
import { Plans, Payment } from './sections'

import './styles.scss'

export const CoreContext = createContext()
const { Provider } = CoreContext

export const Core = () => {
	const [plan, selectPlan] = useState(null)

	const styles = {
		root: 'core'
	}

	return (
		<div className={styles.root}>
			<Provider
				value={{
					plan,
					selectPlan
				}}
			>
				<Plans />
				<Payment />
			</Provider>
		</div>
	)
}

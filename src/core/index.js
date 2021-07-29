import React, { createContext, useState } from 'react'
import { ThemeProvider } from '@material-ui/core'
import theme from 'src/theme'
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
			<ThemeProvider theme={theme}>
				<Provider
					value={{
						plan,
						selectPlan
					}}
				>
					<Plans />
					<Payment />
				</Provider>
			</ThemeProvider>
		</div>
	)
}

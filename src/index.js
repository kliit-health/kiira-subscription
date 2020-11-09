import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Elements } from '@stripe/react-stripe-js'
import { stripe } from 'src/stripe/initializer'
import store from 'src/redux/store'
import Core from 'src/core'
import 'src/styles/globals.scss'

const App = () => (
	<Elements stripe={stripe}>
		<Provider store={store}>
			<Core />
		</Provider>
	</Elements>
)

ReactDOM.render(
	React.createElement(App, {}, null),
	document.getElementById('react-target')
)

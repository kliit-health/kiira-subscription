import React from 'react'
import { TextField } from '@material-ui/core'
import './styles.scss'

export const TextInput = ({ inputComponent, inputProps, ...rest }) => (
	<TextField
		InputProps={{
			inputComponent,
			inputProps
		}}
		{...rest}
	/>
)

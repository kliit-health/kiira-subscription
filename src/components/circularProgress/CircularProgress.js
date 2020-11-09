import React from 'react'
import { CircularProgress as LoadingIndicator } from '@material-ui/core'
import './styles.scss'

export const CircularProgress = ({ classes = {}, ...rest }) => {
	return <LoadingIndicator size={16} {...rest} />
}

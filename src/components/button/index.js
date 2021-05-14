import React from 'react'
import { Button as MaterialButton, makeStyles } from '@material-ui/core'
import './styles.scss'

const useStyles = makeStyles(theme => ({
	button: {
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(4)
		},
		marginTop: 'auto'
	}
}))

export const Button = ({ color, ...rest }) => {
	const classes = useStyles()

	return (
		<MaterialButton
			fullWidth
			variant="contained"
			style={{ backgroundColor: color, color: 'white' }}
			className={classes.button}
			{...rest}
		/>
	)
}

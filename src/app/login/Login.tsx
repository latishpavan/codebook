import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		height: '25vh'
	},
}));

const LoginButton = withStyles((theme) => ({
	root: {
		color: 'white',
		backgroundColor: green[500]
	}
}))(Button);

export default function LoginPage(): JSX.Element {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<TextField label="Username" variant="standard" />
			<TextField label="Password" variant="standard" />
			<LoginButton>Login</LoginButton>
		</div>
	);
}

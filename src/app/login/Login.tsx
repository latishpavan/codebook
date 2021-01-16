import React from 'react';
import { 
	Button, 
	FormControl, 
	TextField, 
	Theme, 
	withStyles,
	Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';
import { AccountCircle, Lock } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		height: '25vh'
	},
}));

const LoginButton = withStyles((theme: Theme) => ({
	root: {
		color: theme.palette.getContrastText(green[800]),
		backgroundColor: green[500],
		'&:hover': {
			backgroundColor: green[700]
		}
	}
}))(Button);

export default function LoginPage(): JSX.Element {
	const classes = useStyles();
	const [showPassword, setShowPassword] = React.useState<boolean>(false);

	const handleClickShowPassword = React.useCallback<() => void>(() => {
		setShowPassword((show) => !show);
	}, [setShowPassword]);

	return (
		<div className={classes.root}>
			<FormControl>
				<Grid container alignItems="flex-end" spacing={1}>
					<Grid item>
						<AccountCircle />
					</Grid>
					<Grid item>
						<TextField label="Username" variant="standard" />
					</Grid>
				</Grid>
			</FormControl>
			<FormControl>
				<Grid container alignItems="flex-end" spacing={1}>
					<Grid item>
						<Lock />
					</Grid>
					<Grid item>
						<TextField
							label="Password"
							id="login-password"
							type={showPassword ? 'text': 'password'}
						/>
					</Grid>
				</Grid>
			</FormControl>
			<LoginButton>Login</LoginButton>
		</div>
	);
}

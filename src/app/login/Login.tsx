import React from 'react';
import { TextField } from '@material-ui/core';

export default function LoginPage(): JSX.Element {
	return (
		<div className="login-form">
			<form noValidate autoComplete="off">
				<TextField label="Username" variant="outlined" />
				<TextField label="password" variant="outlined" />
			</form>
		</div>
	);
}

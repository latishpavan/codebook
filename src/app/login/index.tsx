import * as React from 'react';
import classnames from 'classnames';
import Login from './Login';
import Signup from './Signup';
import { Paper, makeStyles, Grid, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(10)
    },
    tab: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        cursor: 'pointer',
        color: 'lightgray',
        fontSize: '20px',
        borderTopLeftRadius: '4px',
        borderBottom: '1px solid'
    },
    activeTab: {
        backgroundColor: '#764abc',
        color: 'white'
    },
    paper: {
        width: '25%',
        minHeight: '25vh'
    }
}));

const components: Array<React.ComponentType> = [
    Login,
    Signup
];

enum ActivState {
    LOGIN = 0,
    SIGNUP = 1
}

export function LoginPage(): JSX.Element {
    const classes = useStyles();
    const [active, setActive] = React.useState(ActivState.LOGIN);

    return (
        <div className={classes.root}>
            <Paper elevation={6} className={classes.paper}>
                <Grid container>
                    <Grid item xs={6}>
                        <div className={classnames(classes.tab, {
                            [classes.activeTab]: active === ActivState.LOGIN
                        })}
                        onClick={() => setActive(ActivState.LOGIN)}
                        data-testid="login"
                        >
                            Login
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classnames(classes.tab, {
                            [classes.activeTab]: active === ActivState.SIGNUP
                        })}
                        onClick={() => setActive(ActivState.SIGNUP)}
                        data-testid="signup"
                        >
                            Sign Up
                        </div>
                    </Grid>
                </Grid>
                { React.createElement(components[active]) }
            </Paper>
        </div>
    );
}

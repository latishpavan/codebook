import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%'
    }
}));

export default function Header() {
    const classNames = useStyles();
    
    return (
        <div className={classNames.root}>
            <Typography variant="h1">
                CodeBook
            </Typography>
            <Typography variant="subtitle2">
                Practise coding, prepare for interviews with friends
            </Typography>
        </div>
    );
}

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export default function Header() {
    const classNames = useStyles();
    
    return (
        <div className={classNames.root}>
            <Typography variant="h2">
                CodeBook
            </Typography>
        </div>
    );
}

"use client"
import React from 'react';
import {Button} from "react-bootstrap";
import classes from './index.module.css';

const LogOut = ({setShowLog}: {setShowLog: React.Dispatch<React.SetStateAction<boolean>>}) => {
    return(
        <Button
            className={classes.logout}
            variant='secondary'
            onClick={() => {
                localStorage.setItem("token", '');
                setShowLog(true);
            }}
        >
            Выйти
        </Button>
    );
}

export {LogOut};
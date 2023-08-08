"use client"
import React from 'react';
import {Button} from "react-bootstrap";
import classes from './index.module.css';
import Router from 'next/router'

const LogOut = () => {
    return(
        <Button
            className={classes.logout}
            variant='secondary'
            onClick={() => {
                localStorage.setItem("token", '');
                Router.reload();
            }}
        >
            Выйти
        </Button>
    );
}

export {LogOut};
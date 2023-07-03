import React, {useState} from 'react';
import {Toast} from "react-bootstrap";

const AlertToast = ({show, setShow}) => {
    return (
        <Toast onClose={() => setShow(false)} show={show} delay={1000} autohide>
            <Toast.Body>Запрос отправлен</Toast.Body>
        </Toast>
    );
};

export default AlertToast;
"use client"
import React, {useEffect, useState } from 'react';
import {Modal} from 'react-bootstrap';

const BaseModal = ({children, header, show, setShow}: {children: React.ReactNode, header: string, show: boolean, setShow: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [client, setClient] = useState(false);

    useEffect(() => {
        setClient(true)
    }, []);

    if (!client) {
        return (<div></div>);
    }

    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            backdrop="static"
        >
            <Modal.Header>
                <Modal.Title>{header}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    );
};

export {BaseModal};
import React from 'react';
import { Modal, Button } from 'react-bootstrap'

const BaseModal = ({children, header, conditional, show, setShow}) => {
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

            <Modal.Footer>
                <Button
                    variant="primary"
                    onClick={() => {
                        conditional()
                            ? setShow(false)
                            : setShow(true)
                    }}
                >
                    Подтвердить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BaseModal;
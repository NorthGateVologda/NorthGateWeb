import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import BaseModal from '../UI/BaseModal/BaseModal';

const Auth = ({name, setName, password, setPassword, sendRequest}) => {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(true);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        setValidated(true);

        if(form.checkValidity() === true) {
            sendRequest();
            setShow(false);
        }
    };

    return (
        <BaseModal
            show={show}
            setShow={setShow}
            header="Регистрация"
        >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            value={name}
                            onChange={setName}
                        />
                        <Form.Control.Feedback type="invalid">
                            Не верный адрес электронной почты
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            value={password}
                            onChange={setPassword}
                        />
                        <Form.Control.Feedback type="invalid">
                            Не допустимый пароль
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </BaseModal>
    );
}
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import BaseModal from '../UI/BaseModal/BaseModal';
import classes from "./Auth.module.css";

const Auth = ({name, setName, password, setPassword, registration, login}) => {
    const [validatedReg, setValidatedReg] = useState(false);
    const [validatedLog, setValidatedLog] = useState(false);
    const [showReg, setShowReg] = useState(true);
    const [showLog, setShowLog] = useState(false);

    const handleSubmitReg = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        setValidatedReg(true);

        if(form.checkValidity() === true) {
            if(await registration() !== undefined)
            setShowReg(false);
        }
    };

    const handleSubmitLog = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        setValidatedLog(true);

        if(form.checkValidity() === true) {
            if(await login() !== undefined)
            setShowLog(false);
        }
    };

    return (
        <>
            <BaseModal
                show={showReg}
                setShow={setShowReg}
                header="Регистрация"
            >
                <Form 
                    noValidate 
                    validated={validatedReg} 
                    onSubmit={handleSubmitReg}
                >
                    <Row className={classes.fields}>
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                value={name}
                                onChange={(e) =>{
                                    setName(e.target.value);
                                }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Не верное имя пользователя
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Не допустимый пароль
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <div className={classes.buttons}>
                        <Button 
                            type="submit"
                            className={classes.button}
                        >
                            Зарегистрироваться
                        </Button>
                        <Button
                            className={classes.button}
                            variant="secondary"
                            onClick={() => {
                                setShowReg(false);
                                setShowLog(true);
                            }}
                        >
                            Вход
                        </Button>
                    </div>
                </Form>
            </BaseModal>
            
            <BaseModal
                show={showLog}
                setShow={setShowLog}
                header="Вход"
            >
                <Form noValidate validated={validatedLog} onSubmit={handleSubmitLog}>
                    <Row className={classes.fields}>
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                value={name}
                                onChange={(e) =>{
                                    setName(e.target.value);
                                }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Не верное имя пользователя
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Не допустимый пароль
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <div className={classes.buttons}>
                        <Button 
                            type="submit"
                            className={classes.button}
                        >
                            Войти
                        </Button>
                        <Button 
                            className={classes.button}
                            variant="secondary"
                            onClick={() => {
                                setShowLog(false);
                                setShowReg(true);
                            }}
                        >
                            Регистрация
                        </Button>
                    </div>
                </Form>
            </BaseModal>
        </>
    );
}

export default Auth;
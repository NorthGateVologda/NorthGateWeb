import React from 'react';
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import {Formik} from 'formik';
import {object, string} from "yup";
import classes from "@/entities/user/ui/registration-form/index.module.css";
import {FormikHelpers} from "formik/dist/types";

const LoginForm = ({onSubmit, setRegister, setLogin}
    : {onSubmit: (values: { username: string; password: string; }, 
                            formikHelpers: FormikHelpers<{ username: string; password: string; }>) => void | Promise<any>,
       setRegister: React.Dispatch<React.SetStateAction<boolean>>,
       setLogin: React.Dispatch<React.SetStateAction<boolean>>}) => {

    const schema = object().shape({
        username: string().required(),
        password: string().required()
    });

    return (
        <Formik
            validationSchema={schema}
            onSubmit={onSubmit}
            initialValues={{
                username: '',
                password: ''
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group controlId="validationFormikUsername">
                            <Form.Label>Имя</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    aria-describedby="inputGroupPrepend"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    isInvalid={!!errors.username}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Введите имя
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group controlId="validationFormikPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder=""
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                isInvalid={!!errors.password}
                            />

                            <Form.Control.Feedback type="invalid">
                                Введите пароль
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <div className={classes.buttons}>
                        <Button
                            className={classes.button}
                            type="submit"
                        >
                            Войти
                        </Button>

                        <Button
                            className={classes.button}
                            variant="secondary"
                            onClick={() => {
                                setRegister(true);
                                setLogin(false);
                            }}
                        >
                            Регистрация
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export {LoginForm};
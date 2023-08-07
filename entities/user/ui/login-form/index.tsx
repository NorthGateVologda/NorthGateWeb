import React from 'react';
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import formik from 'formik';
import yup from 'yup';
import classes from "@/entities/user/ui/registration-form/index.module.css";
import {FormikHelpers} from "formik/dist/types";

const LoginForm = ({onSubmit}: {onSubmit: (values: { username: string; password: string; }, formikHelpers: FormikHelpers<{ username: string; password: string; }>) => void | Promise<any>}) => {
    const { Formik } = formik;

    const schema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required()
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
                        <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                            <Form.Label>Имя</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
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
                        <Form.Group as={Col} md="6" controlId="validationFormikPassword">
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
import React from 'react'
import '../styles/App.css'
import BaseModal from "./UI/BaseModal/BaseModal";
import {Form} from "react-bootstrap";

const PseudoRegistration = ({ setName, name }) => {
  return (
    <BaseModal
        header="Зарегистрируйтесь, пожалуйста"
        conditional={() => name !== ""}
    >
        <Form>
            <Form.Group>
                <Form.Label>
                    Введите имя
                </Form.Label>

                <Form.Control
                    type="text"
                    placeholder="Name"
                    autoFocus
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
            </Form.Group>
        </Form>
    </BaseModal>
  )
}

export default PseudoRegistration

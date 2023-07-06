import React, {useState} from 'react'
import '../styles/App.css'
import BaseModal from "./UI/BaseModal/BaseModal";
import {Form} from "react-bootstrap";

const PseudoRegistration = ({ setName, name }) => {
    const [show, setShow] = useState(true)

  return (
    <BaseModal
        header="Зарегистрируйтесь, пожалуйста"
        conditional={() => name !== ""}
        show={show}
        setShow={setShow}
    >
        <Form
            onSubmit={(e) => {
                e.preventDefault()
                setShow(false)
            }}
        >
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

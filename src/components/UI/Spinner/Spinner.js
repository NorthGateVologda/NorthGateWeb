import React from 'react';
import Form from 'react-bootstrap/Form';
import classes from "./Spinner.module.css";

const Spinner = ({setCity}) => {
    return (
        <div className={classes.spinner}>
            <Form.Select
                onChange={(e) => {
                    setCity(e.target.value);
                }}
            >
                <option>Выберите город</option>
                <option value="Архангельск">Архангельск</option>
            </Form.Select>
        </div>
    );
}

export default Spinner;
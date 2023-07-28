import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import classes from "./Spinner.module.css";

const Spinner = ({setCity}) => {
    return (
        <div className={classes.spinner}>
            <Form.Select
                onChange={e => {
                    setCity(e.target.value);
                    console.log(e.target);
                    console.log(e.target.value);
                }}
                defaultValue="Default"
            >
                <option value="Default" disabled={true}>Выберите город</option>
                <option value="Архангельск">Архангельск</option>
            </Form.Select>
        </div>
    );
}

export default Spinner;
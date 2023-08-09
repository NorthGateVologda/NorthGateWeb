import React from 'react';
import {BaseModal} from "@/shared/ui";
import {Button} from "react-bootstrap";
import classes from './index.module.css';

const Info = ({show, setShow}: {show: boolean, setShow:React.Dispatch<React.SetStateAction<boolean>>}) => {
    return (
        <BaseModal
            header='Информация'
            show={show}
            setShow={setShow}
        >
            <div>
                Используя карту и таблицу  &quot;Анализ полигонов&quot;, определите Id полигонов, в которых необходимо размещение парка.
                Введите ID полигона в поле &quot;ID Полигона&quot; между таблицей и картой, отфильтруйте нужный полигон.
                Используйте карту и таблицу &quot;Анализ полигонов&quot; для исследования.
            </div>
            <div className={classes.buttonContainer}>
                <Button
                    className={classes.button}
                    onClick={() => setShow(false)}>
                    Ок
                </Button>
            </div>
        </BaseModal>
    );
};

export default Info;
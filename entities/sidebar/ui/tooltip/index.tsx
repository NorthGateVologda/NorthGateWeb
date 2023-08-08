import React from 'react';
import classes from './index.module.css';

const CustomTooltip = ({ active, payload, label }: {active?: boolean, payload?: {length: number, 0: {value: number}}, label?: number}) => {
    if (active && payload && payload.length) {
        return (
            <div className={classes.tooltip}>
                <p>ID парка: {label}</p>
                <p>Рейтинг: {payload[0].value}</p>
            </div>
        );
    }
    
    return null;
};

export {CustomTooltip};
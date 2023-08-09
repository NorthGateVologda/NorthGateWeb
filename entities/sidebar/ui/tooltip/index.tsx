import React from 'react';
import classes from './index.module.css';

const CustomTooltip = ({ 
    active, 
    payload, 
    label,
    name
}: {
    active?: boolean, 
    payload?: {length: number, 0: {value: number}}, 
    label?: number,
    name?: string
}) => {
 if (active && payload && payload.length) {
     return (
         <div className={classes.tooltip}>
             <p>ID полигона: {label}</p>
             <p>{name}: {payload[0].value}</p>
         </div>
     );
 }
    
    return null;
};

export {CustomTooltip};
import React, {useState} from 'react';
import {Button, Dropdown} from 'react-bootstrap';
import classes from './index.module.css';

const Filer = ({
    hexagonsIds,
    filterPolygonId, 
    setFilterPolygonId, 
    resetPaginationToggle, 
    setResetPaginationToggle
} : {
    hexagonsIds: number[],
    filterPolygonId: number, 
    setFilterPolygonId: React.Dispatch<React.SetStateAction<number>>,
    resetPaginationToggle: boolean, 
    setResetPaginationToggle: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const [selectedOption, setSelectedOption] = useState<number>(-1);

    const handleOptionSelect = (option: number) => {
        setSelectedOption(option);
        setFilterPolygonId(option);
    };

    const handleClearSelection = () => {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterPolygonId(-1);
        setSelectedOption(-1);
    };

    const menuHeight = hexagonsIds.length > 5 ? '200px' : 'auto';
    
    return (
     <>
         {hexagonsIds.length > 0 ? (
             <Dropdown className={classes.dropdown}>
             <Dropdown.Toggle variant="success" id="dropdown-basic">
                 {filterPolygonId === -1 ?  'Выберите ID полигона' : `ID полигона ${filterPolygonId}`}
             </Dropdown.Toggle>
             <Dropdown.Menu style={{ maxHeight: menuHeight, overflowY: 'auto' }}>
                    {hexagonsIds.map((option, index) => (
                      <Dropdown.Item key={index} onClick={() => handleOptionSelect(option)}>
                        {option}
                      </Dropdown.Item>
                    ))}
             </Dropdown.Menu>
             {selectedOption !== -1 ? (
               <Button variant="secondary" onClick={handleClearSelection}>
                 Очистить выбор
               </Button>
             ) : null}
             </Dropdown>
         ) : (
            <Dropdown.Toggle variant="success" id="dropdown-basic" disabled>
              Выберите значение
            </Dropdown.Toggle>
         )}
     </>
    );
};

export default Filer;
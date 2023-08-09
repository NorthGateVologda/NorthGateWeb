import React, {useState} from 'react';
import {Button, ButtonGroup, Dropdown, Form} from "react-bootstrap";


const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }: {children: React.ReactNode, style:React.CSSProperties, className: string, 'aria-labelledby': {labeledBy: string | undefined}}, ref: React.ForwardedRef<HTMLDivElement>) => {
        const [value, setValue] = useState('');

        return (
            <>
                {
                    // @ts-ignore
                    <div
                        ref={ref}
                        style={style}
                        className={className}
                        aria-labelledby={labeledBy}
                    >
                        <Form.Control
                            autoFocus
                            className="mx-3 my-2 w-auto"
                            onChange={(e) => setValue(e.target.value)}
                            value={value}
                        />
                        <ul className="list-unstyled">
                            {React.Children.toArray(children).filter(
                                (child) => {
                                    // @ts-ignore
                                    return !value || child.props.children.toString().startsWith(value.toString());
                                },
                            )}
                        </ul>
                    </div>
                }
            </>
        );
    },
);

CustomMenu.displayName = 'CustomMenu';

const FilterTableDropdown = ({hexagonsIds, hexagonFilterId, setHexagonFilterId}: {hexagonsIds: number[], hexagonFilterId: number, setHexagonFilterId: React.Dispatch<React.SetStateAction<number>>}) => {
    return (
        <ButtonGroup>
            <Dropdown>
                <Dropdown.Toggle style={{borderBottomRightRadius: '0', borderTopRightRadius: '0'}}>
                    {hexagonFilterId === -1 ? 'Все полигоны' : `Полигон ${hexagonFilterId}`}
                </Dropdown.Toggle>

                <Dropdown.Menu
                    as={CustomMenu}
                    style={{ maxHeight: '200px', overflowY: 'scroll'}}
                >
                    {hexagonsIds.map((val, i) => (<Dropdown.Item onClick={() => {setHexagonFilterId(val)}} key={val} eventKey={val}>{val}</Dropdown.Item>))}
                </Dropdown.Menu>
            </Dropdown>

            <Button
                variant='secondary'
            >
                Очистить
            </Button>
        </ButtonGroup>
    );
};

export {FilterTableDropdown};
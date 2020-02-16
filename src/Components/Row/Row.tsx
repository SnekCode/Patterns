import React, {Dispatch, SetStateAction} from 'react';
import Cell from "../Cell/Cell";
import {ICell, IPattern} from "../../types";
import {IState} from "../../initState";

interface IRowProps {
    cells: ICell[]
    pattern: IPattern
    rowIndex:number
    state:  [IState, Dispatch<SetStateAction<IState>>]
}

const Row:React.FC<IRowProps> = ({state,cells,pattern,rowIndex}) => {

    return (
        <div className={'flex'}>
            {cells.map((cell,index) => <Cell appState={state} cell={cell} rowIndex={rowIndex} cellIndex={index} pattern={pattern}/>)}
        </div>
);
};

export default Row;

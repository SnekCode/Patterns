import React, {Dispatch, SetStateAction, useState} from 'react';
import {ICell, IPattern} from "../../types";
import {IState} from "../../initState";

interface ICellProps {
    rowIndex:number,
    cellIndex:number,
    pattern:IPattern,
    cell:ICell
    appState:  [IState, Dispatch<SetStateAction<IState>>]
}

const Cell:React.FC<ICellProps> = ({appState,rowIndex,cell,cellIndex,pattern}) => {

    const [state,setState] = appState;

    const handleColorChange = () => {
        const newRow = state.pattern.rows;
        const color = state.currentColor;
        newRow[rowIndex].cells[cellIndex].color = color;

        if(state.xSym && !state.ySym){
            const xSymPartner = newRow[rowIndex].cells.length - 1 - cellIndex;
            newRow[rowIndex].cells[xSymPartner].color = color;
        }
        else if(state.ySym && !state.xSym){
            const ySymPartner = newRow.length - 1 - rowIndex;
            newRow[ySymPartner].cells[cellIndex].color = color;
        }else if (state.xSym && state.ySym) {
            const ySymPartner = newRow.length - 1 - rowIndex;
            const xSymPartner = newRow[rowIndex].cells.length - 1 - cellIndex;
            // set the x sym color
            newRow[rowIndex].cells[xSymPartner].color = color;
            // set the y sym color
            newRow[ySymPartner].cells[cellIndex].color = color;
            //set the x y sym color
            newRow[ySymPartner].cells[xSymPartner].color = color;
        }

        setState({
            ...state,
            pattern: {
                rows: newRow
            }
            });
        console.log(state)
    };

    return (
        <div className={`h2 w2 ba`} style={{backgroundColor: cell.color}} onMouseOver={e => {e.buttons === 1 && handleColorChange()}} onMouseDown={handleColorChange}/>
    );
};

export default Cell;

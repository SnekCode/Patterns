import React, {Dispatch, SetStateAction, useState} from 'react';
import {IPattern} from "../../types";
import Row from "../Row/Row";
import {IState} from "../../initState";
import {clearColumn, clearRow, generatePattern} from "../../Utils/utils";

interface IPatternProps {
    pattern:IPattern
    state: [IState, Dispatch<SetStateAction<IState>>]
}

const Pattern:React.FC<IPatternProps> = ({pattern,state}) => {

    const [appState,setState] = state;

    return (
        <div className={'no-select'}>
            <div className={'flex'}>
                <button className={'f7 w2'}
            // Clears whole pattern
                onClick={() => setState({...appState,pattern: generatePattern(appState.numberRows,appState.numberColumns)})}
                > x all </button>


            {pattern.rows[0].cells.map((cell,index) =>
                <div >
                    <button
                        className={'h2 w2 ma0 pa0'}
                    // Clears individual columns
                        onClick={() => setState({...appState, pattern: clearColumn(index,appState.pattern)})}
                    > x </button>
                </div>
            )}
            </div>

            {pattern.rows.map((row,index) =>
                <div className={'flex'}>
                    <button className={'w2'}
                            onClick={() => setState({...appState, pattern: clearRow(index,appState.pattern)})}
                    > x </button>
                    <Row state={state} cells={row.cells} rowIndex={index} pattern={pattern} />
                </div>)}
        </div>
    );
};

export default Pattern;

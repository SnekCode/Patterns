import {IPattern} from "./types";
import {generatePattern} from "./Utils/utils";

export interface IState {
    numberRows: number,
    numberColumns: number,
    xSym: boolean,
    ySym: boolean,
    pattern:IPattern,
    currentColor: string,
}

export const initState:IState = {
    currentColor: 'red',
    xSym: true,
    ySym: true,
    numberColumns: 10,
    numberRows: 10,
    pattern: generatePattern(10,10),
};
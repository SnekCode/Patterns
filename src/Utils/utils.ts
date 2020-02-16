import {ICell, IPattern, IRow} from "../types";

export const generatePattern = (rows:number,columns:number) => {
    const patternArray:IPattern = {rows: []};
        for (let i = 0; i < rows; i++) {
            const row: IRow = {cells: []};
            for (let j = 0; j < columns; j++) {
                const cell: ICell = {color: 'white'};
                row.cells.push(cell)
            }
            patternArray.rows.push(row);
        }
    return patternArray;
};


export const updatePatternRows = (rows:number,pattern:IPattern) => {
    const patternArray:IPattern = {rows: []};
    for (let i = 0; i < rows; i++) {
        let row: IRow;
            if(i < pattern.rows.length){
                row = pattern.rows[i]
            }else {
                row = {cells: []};
                for (let j = 0; j < pattern.rows[0].cells.length; j++) {
                    const cell: ICell = {color: 'white'};
                    row.cells.push(cell)
                }
            }
        patternArray.rows.push(row);
    }
    return patternArray;
};

export const updatePatternColumns = (columns:number,pattern:IPattern) => {
    const patternArray:IPattern = {rows: []};
    for (let i = 0; i < pattern.rows.length; i++) {
        const row: IRow = {cells:[]};
            for (let j = 0; j < columns; j++) {
                let cell: ICell;
                if(j < pattern.rows[i].cells.length) {
                    cell = pattern.rows[i].cells[j]
                }else {
                    cell = {color: 'white'};
                }
                row.cells.push(cell)
        }
        patternArray.rows.push(row);
    }
    return patternArray;
};

export const clearColumn = (index:number,pattern:IPattern) => {
    const newRows = pattern.rows;
    newRows.forEach(r => r.cells[index] = {color: 'white'});
    const newPattern:IPattern = {rows: newRows}
    return newPattern
};

export const clearRow = (index:number,pattern:IPattern) => {
    const newPattern = pattern;
    newPattern.rows[index].cells.forEach(c => c.color = 'white');
    return newPattern
};
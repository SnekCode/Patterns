export interface IPattern {
    rows: IRow[]
}

export interface IRow {
    cells: ICell[]
}

export interface ICell {
    color: string
}
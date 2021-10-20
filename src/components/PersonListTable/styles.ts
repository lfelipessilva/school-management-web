import styled from "styled-components";

export const Table = styled.table`
    font-size: 1rem;
    width: 80%;
    margin: auto;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    background-color: #fff;
    border-spacing:0;
`

export const TableHeadRow = styled.tr`

`

export const TableHead = styled.th<{width: number}>`
    width: ${props => props.width}%;
    color: #4c4c4c;
    background: #e5e5e5;
    text-align: center;
    padding: 11px;
    border-bottom: 1px solid #d3d3d3;
`

export const TableRow = styled.tr`
    padding: 0px;
    margin: 0px;
        &:hover {
        background: #e5e5e5;
    }
`

export const TableItem = styled.td<{width: number}>`
    width: ${props => props.width}%;
    text-align: center;
    color: #3d3d3d;
    padding: 9px;
    border-bottom: 1px solid #d3d3d3;
`
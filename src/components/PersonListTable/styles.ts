import styled from "styled-components";

export const Table = styled.table`
    width: 80%;
    margin: auto;
    border: 1px solid #b3b3b3;
    border-radius: 4px;
    box-shadow: 5px 4px 17px -7px rgba(0,0,0,0.52);
    background-color: #a9a9a9;
`

export const TableHeadRow = styled.tr`

`

export const TableHead = styled.th<{width: number}>`
    width: ${props => props.width}%;
    text-align: center;
    padding: 10px 0px 30px 0px;
`

export const TableRow = styled.tr`
`

export const TableItem = styled.td<{width: number}>`
    width: ${props => props.width}%;
    text-align: center;
    padding: 6px;
`
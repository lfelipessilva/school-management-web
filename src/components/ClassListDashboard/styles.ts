import styled from "styled-components";

export const Container = styled.div`
    max-width: 80vw;
    max-height: 80vh;
    display: grid;
    grid-row: column;
    grid-template-columns: 20vw 20vw 20vw 20vw;
    grid-template-rows: 250px;
    align-items: center;
    margin: auto;
`

export const ClassBlock = styled.div`
    position: relative; 
    height: 20vh;
    margin: 20px;
    padding: 10px;
    border: 1px solid #f29215;
    border-radius: 10px;
`
export const ClassName = styled.div`
    margin-left: -10px; 
    padding: 8px 25px;
    position: absolute;
    top: 25px;
    background-color: #d3d3d3;
`

export const TeacherName = styled.div`
    position: absolute;
    bottom: 15px;
    left: 5px;
`
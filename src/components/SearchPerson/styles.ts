import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
    font-size: 20px;
    
    >input {
        font-size: 15px;
        width: 250px;
        height: 25px;
        padding: 5px;
        outline: none;
        border: 0;
        border-bottom: 1px solid #9e9e9e;
    }

    >button {
        font-size: 15px;
        margin: 10px;
        width: 150px;
        height: 39px;
        padding: 5px;
    }

    .react-icons {
        height: 30px;
        width: 30px;
        vertical-align: middle;
        margin-left: 10px;
        color: #9e9e9e;
        cursor: pointer;
        &:hover {
            color: #666;
            transition: 200ms;
        }
    }
`
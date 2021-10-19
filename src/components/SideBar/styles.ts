import styled from "styled-components";

export const Container = styled.div`

    width: 100px;
    transition: 300ms;

    p { 
        display: none;
    }

    &:hover {
        width: 220px;
        p { 
            padding: 4.5px;
            margin-top: -55px;
            margin-left: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: black;
            font-size: 1.3rem;
        }
    }

    .navbar {
        height: 100vh;
        background-color: #C0C2C9;
    }

    .react-icons {
        display: block;
        margin: 0px 5px 0px 5px;
        height: 85px;
        width: 85px;
        color: #36454F;
    }

    .link-class {
        display: absolute;
        height: 90px;
        text-decoration: none;
    }

`   
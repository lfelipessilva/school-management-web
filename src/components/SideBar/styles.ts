import styled from "styled-components";

export const Container = styled.div`

    width: 90px;
    transition: 300ms;

    p { 
        display: none;
    }

    &:hover {
        width: 200px;
        p { 
            padding: 0px;
            margin: 5px;
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
        margin: 5px;
        height: 85px;
        width: 85px;
        color: #36454F;
    }

    .link-class {
        display: flex;
        height: 90px;
        text-decoration: none;
    }

`   
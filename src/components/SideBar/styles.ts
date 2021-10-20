import styled from "styled-components";

export const Container = styled.div`

    width: 80px;
    transition: 300ms;

    p { 
        display: none;

    }

    &:hover {
        width: 200px;
        p { 
            padding: 4.5px;
            margin-top: -45px;
            margin-left: 80px;
            display: flex;
            color: black;
            font-size: 1.3rem;
        }
    }

    .navbar {
        height: 100vh;
        background-color: #1e1e1e   ;
    }

    .react-icons {
        display: block;
        margin: 0px 5px 0px 5px;
        height: 65px;
        width: 65px;
        color: #777777;
    }

    .link-class {
        text-decoration: none;
        p {
            color: #777777;
        }
    }

`   

export const LinkArea = styled.div`
    display: absolute;
    height: 90px;

    &:hover {
        .react-icons {
            color: #FFF;
        }

        p{
            color: #FFF;
        }
    }
`
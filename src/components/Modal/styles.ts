import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

export const CloseButton = styled.button`
  background-color: #000;
  color: #FFF;
  position: absolute;
  right: 0;
`
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 150%;
    height: 35px;
    outline: none;
    box-shadow: none;
    border: none;
    border-bottom: 2px solid #e5e5e5;
    margin: 5px;
    font-size: 1.3rem;
    color: #333;
    &:hover {
      color: #000;
      border-bottom: 2px solid #000;
      transition: 500ms;
    }
  }

  button {
    width: 130%;
    height: 50px;
    font-size: 1rem;
    border: none;
    background: #e1e1e1;
    border-radius: 10px;
    cursor: pointer;
    margin: 10px;

    &:hover {
      background: #b6ffb2;
    }
  }
`;
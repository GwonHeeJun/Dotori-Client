import styled from 'styled-components';

export const Postioner = styled.div`
    position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
  z-index: 1050;
`
export const ModalWrapper = styled.div<{ width : number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: auto;
  overflow-y: scroll;
  border-radius: 7px;
  box-shadow: 4px 6px 20px 0 rgba(0, 0, 0, 0.09);
  transform: translate(-50%, -50%);
  background-color: #fff;
  min-width: ${props => props.width }px;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.span`
  position: relative;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const Button = styled.div<{ isClose : boolean }>`
    margin-right: 6px;
    padding: 7px 16px;
    background-color: ${props => props.isClose ? "#fff" : "#0f4c81"};
    border-radius: 10px;
    color: ${props => props.isClose ? "#8b8b8b" : "#fff"};
    font-weight: bold;
    cursor: pointer;
`

export const Message = styled.span`
  font-size: 20px;
  color: #000;
  margin-top: 45px;
  margin-bottom: 53px;
`
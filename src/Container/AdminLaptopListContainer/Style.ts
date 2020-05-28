import styled from 'styled-components';

interface StyledProps {
    isActive?: boolean
}

export const Postioner = styled.div`
    background-color: #fff;
    border-radius: 20px;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    padding: 20px;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
`

export const Header = styled.header`
    display: flex;

    .left {
        flex: 1;
        display: flex;
        flex-direction: column;

        span {
            font-size: 24px;
            font-weight: bold;
        }
    }

    .center {
        flex: 1;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        font-size: 20px;
    }

    .right {
        flex: 1;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        color: #0f4c81;
        font-size: 18px;
    }
`

export const ViewBtnWrapper = styled.div`
    display: flex;
    margin-top: 4px;
`

export const SelectUser = styled.div<StyledProps>`
    background-color: ${props => props.isActive ? "#0f4c81" : "#fff"};
    border-radius: 10px;
    padding: 5px 7.5px;
    color: ${props => props.isActive ? "#fff" : "#0f4c81"};;
    border: ${props => props.isActive ? "none" : "1px solid #0f4c81"};;
    margin-right: 5px;

    span {
        font-size: 16px !important;
    }

    small {
        margin-left: 2.5px;
    }   
`
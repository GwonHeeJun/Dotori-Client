import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid #a0a0a0a0;

    &:last-child {
        border-bottom: none;
    }

    div {
        font-size: 18px;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`

export const StatusWrapper = styled.p<{ status : boolean }>`
    padding: 3px 24px;
    border-radius: 10px;
    background-color: ${props => props.status ? '#d9f6de' : '#fcecec'};
    display: flex;
    align-items: center;
    justify-content: center;
    
    span {
        font-size: 16px;
        color: ${props => props.status ? '#28c842' : '#e11a1a'};
    }


` 
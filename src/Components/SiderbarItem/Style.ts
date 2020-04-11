import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface StyleProps {
    active: boolean
}

export const LinkWrapper = styled(Link)<StyleProps>`
    text-decoration: none;
    display: flex;
    width: 100%;
    align-items: center;
    color: ${props => props.active ? '#0F4C81' : '#BBBBBE'};
    margin-bottom: 18%;

    svg {
        width: 25px;
        height: 23.64px;
        fill: ${props => props.active ? '#0F4C81' : '#BBBBBE'};
    }
`

export const MenuTitle = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-left: 21px;
`
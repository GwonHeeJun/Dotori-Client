import React from 'react';
import * as S from './Style';

interface LaptopSeatProps {
    id : number;
}

const LaptopSeat : React.FC<LaptopSeatProps> = ({ id }) => {
    return (
        <S.Postioner id={`${id + 1}`}>
            <span>{id + 1}</span>
        </S.Postioner>
    )
}

export default LaptopSeat;
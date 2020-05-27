import React from 'react';
import * as S from './Style';

interface LaptopSeatProps {
    id : number;
}

const onClickRoomSeat = (id : number) => {
    alert("노트북 대여 좌석 번호 : " + id);
}

const LaptopSeat : React.FC<LaptopSeatProps> = ({ id }) => {
    return (
        <S.Postioner id={`${id + 1}`} onClick={() => onClickRoomSeat(id+1)}>
            <span>{id + 1}</span>
        </S.Postioner>
    )
}

export default LaptopSeat;
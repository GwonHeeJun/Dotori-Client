import React from 'react';
import * as S from './Style';
import { ManufactureDate } from '../../../Utils/ManufactureDate';

interface LaptopProps {
    laptop: {
        laptopRoom: string,
        laptopSeat: string
    }
}

const LaptopEvent: React.FC<LaptopProps> = ({ laptop }) => {
    return (
        <S.Postioner laptopObj={laptop}>
            <S.ContentWrapper>
                <S.Header>
                    <span>{ManufactureDate('M')} / {ManufactureDate('D')} 노트북 대여</span>
                    <time>22:00 ~ 23:50</time>
                </S.Header>
                <S.Content>
                    <span>{laptop.laptopRoom}, {laptop.laptopSeat}번 좌석</span>
                </S.Content>
            </S.ContentWrapper>
        </S.Postioner>
    )
}

export default LaptopEvent;
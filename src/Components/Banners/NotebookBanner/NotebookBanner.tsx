import React, { useState } from 'react';
import { IilustNotebook } from '../../../Assets/Svg';
import * as G from '../BannerStyle';
import * as S from './Style';

const NotebookBanner: React.FC = () => {
    const [isRent, setIsRent] = useState(true)

    return (
        <S.Postioner rent={isRent}>
            <G.TextWrapper>
                <span>12월 21일 토요일</span>
                {isRent ?
                    <S.RentWrapper>
                        <h2>Lab 1실, 2번 좌석에 노트북 대여를 신청했어요.</h2>
                        <span onClick={() => setIsRent(!isRent)}>취소</span>
                    </S.RentWrapper>
                    :
                    <h2>오늘은 아직 노트북 대여를 신청하지 않았어요.</h2>
                }
            </G.TextWrapper>
            <G.IlustWrapper>
                <IilustNotebook />
            </G.IlustWrapper>
        </S.Postioner>
    )
}

export default NotebookBanner;
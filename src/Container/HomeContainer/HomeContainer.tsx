import React from 'react';
import * as S from './Style';
import BannerContainer from '../BannerContainer/BannerContainer';
import { MatchType } from '../../Utils/GlobalType';
import { ManufactureDate } from '../../Utils/ManufactureDate';

interface HomeProps {
    match: MatchType
}

const HomeContainer: React.FC<HomeProps> = ({ match }) => {
    return (
        <S.Postioner>
            <S.Wrapper>
                <S.Title>
                    홈
                    <strong>{ManufactureDate('Y')}년 {ManufactureDate('M')}월 {ManufactureDate('D')}일 {ManufactureDate('W')}요일</strong>
                </S.Title>
                <S.Banner>
                    <BannerContainer nowUrl={match.path} />
                </S.Banner>
                <S.Content>
                    <S.UserProfile></S.UserProfile>
                    <S.BoardWrapper>
                       <div />
                       <div />
                       <div />
                       <div />
                    </S.BoardWrapper>
                </S.Content>
            </S.Wrapper>
        </S.Postioner>
    )
}

export default HomeContainer;
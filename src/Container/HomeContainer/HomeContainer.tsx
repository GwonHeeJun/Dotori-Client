import React from 'react';
import * as S from './Style';
import BannerContainer from '../BannerContainer/BannerContainer';
import { MatchType } from '../../Utils/GlobalType';

const now = new Date();

interface HomeProps {
    match: MatchType
}

const HomeContainer: React.FC<HomeProps> = ({ match }) => {
    return (
        <S.Postioner>
            <S.Wrapper>
                <S.Title>홈<strong>2020년 1월 1일 월요일</strong></S.Title>
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
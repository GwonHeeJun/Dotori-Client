import React from 'react';
import * as S from './Style';
import BannerContainer from '../BannerContainer/BannerContainer';
import { MatchType } from '../../Utils/GlobalType';
import { ManufactureDate } from '../../Utils/ManufactureDate';
import { PageTemplate } from '..';
import { UserProfile } from '../../Components';

interface HomeProps {
    match: MatchType
}

const testProfile = {
    name: "권희준",
    grade: "2",
    class: '3'
};

const HomeContainer: React.FC<HomeProps> = ({ match }) => {
    return (
        <PageTemplate match={match}>
            <S.UserProfile>
                <UserProfile logoutFunc={() => console.log("logout")} userProfile={testProfile} />
            </S.UserProfile>
            <S.BoardWrapper>
                <div />
                <div />
                <div />
                <div />
            </S.BoardWrapper>
        </PageTemplate>
    )
}

export default HomeContainer;
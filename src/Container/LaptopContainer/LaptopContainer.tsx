import React from 'react';
import { PageTemplate } from '..'
import { LaptopRoom } from '../../Components'
import * as S from './Style';
import { MatchType } from '../../Utils/GlobalType';

const roomDummyData = [
    {
        roomName: "자기주도학습",
        maxSeat: 40,
        minSeat: 15
    },
    {
        roomName: "LAB 1",
        maxSeat: 24,
        minSeat: 9
    },
    {
        roomName: "LAB 2",
        maxSeat: 24,
        minSeat: 3
    },
    {
        roomName: "LAB 3",
        maxSeat: 24,
        minSeat: 18
    },
    {
        roomName: "LAB 4",
        maxSeat: 24,
        minSeat: 13
    },

]

interface LaptopProps {
    match: MatchType
}

const LaptopContainer: React.FC<LaptopProps> = ({ match }) => {
    return (
        <PageTemplate match={match}>
            <LaptopRoom roomData={roomDummyData} />
            {/* <S.LaptopSeat>
                /
            </S.LaptopSeat> */}
        </PageTemplate>
    )
}

export default LaptopContainer;
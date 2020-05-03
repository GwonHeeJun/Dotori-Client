import React from 'react';
import { RoomItem } from '..'
import * as S from './Style';

type roomObj = {
    roomName: string,
    maxSeat: number,
    minSeat: number
}

interface LaptopProps {
    roomData: roomObj[]
}

const mappingBoardList = (roomList: roomObj[]) => roomList.map((item, ix) => returnBoardListComponent(item, ix))

const returnBoardListComponent = (roomDetail: roomObj, ix: number) => <RoomItem room={roomDetail} roomNowIx={ix} key={`room-list-${ix}`} />;

const LaptopRoom: React.FC<LaptopProps> = ({ roomData }) => {
    return (
        <S.Postioner>
            <label>학습실 선택</label>
            <S.ScrollWrapper>
                {mappingBoardList(roomData)}
            </S.ScrollWrapper>
        </S.Postioner>
    )
}

export default LaptopRoom;
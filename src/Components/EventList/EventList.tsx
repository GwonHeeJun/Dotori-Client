import React from 'react';
import { LaptopEvent, SongEvent } from '..'
import * as S from './Style';

type EventObj = {
    laptop: {
        laptopRoom: string,
        laptopSeat: string
    },
    song: {
        songAuthor: string,
        songName: string,
        arriTime: string,
        thumbnailKey: string
    }
}

interface EventListProps {
    eventObject?: EventObj
}

const EventList: React.FC<EventListProps> = ({ eventObject }) => {
    return (
        <S.Postioner>
            <LaptopEvent laptop={eventObject.laptop}/>
            <SongEvent song={eventObject.song}/>
        </S.Postioner>
    )
}

export default EventList;
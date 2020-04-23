import React from 'react';
import * as S from './Style';
import { ManufactureDate } from '../../../Utils/ManufactureDate';

interface SongProps {
    song: {
        songAuthor: string,
        songName: string,
        arriTime: string,
        thumbnailKey: string
    }
}

const SongEvent: React.FC<SongProps> = ({ song }) => {
    return (
        <S.Postioner thumbnailKey={song.thumbnailKey}>
            <S.ContentWrapper>
                <S.Header>
                    <span>{ManufactureDate('M')} / {ManufactureDate('D')} 기상음악 신청</span>
                    <time>{song.arriTime}</time>
                </S.Header>
                <S.Content>
                    <span>{song.songAuthor} - {song.songName}</span>
                </S.Content>
            </S.ContentWrapper>
        </S.Postioner>
    )
}

export default SongEvent;
import React from 'react';
import { PostType } from '../../Utils/GlobalType';
import * as S from './Style'
import { More } from '../../Assets/Svg';
import { BoardItem } from '..';

const BoardList: React.FC = () => {

    return (
        <S.Postioner>
            <S.ListHeader>
                <h2>메인 게시판 리스트</h2>
                <div>
                    <span>더보기</span>
                    <More />
                </div>
            </S.ListHeader>
            <S.ListContent>
                <BoardItem />
                <BoardItem />
            </S.ListContent>
        </S.Postioner>
    )
}

export default BoardList;
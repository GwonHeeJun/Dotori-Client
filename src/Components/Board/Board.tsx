import React from 'react';
import * as S from './Style';
import { BoardObj } from '../../Utils/GlobalType';
import { BoardList } from '..';

interface BoardProps {
    boardPostList: BoardObj[]
}

const mappingBoardList = (boardPostList : BoardObj[]) => boardPostList.map(item => returnBoardListComponent(item))


const returnBoardListComponent = (board : BoardObj) => <BoardList board={board} />;

const Board: React.FC<BoardProps> = ({ boardPostList }) => {
   
    return (
        <S.Postioner>
            {mappingBoardList(boardPostList)}
        </S.Postioner>
    )
}

export default Board;
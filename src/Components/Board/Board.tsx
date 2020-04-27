import React from 'react';
import * as S from './Style';
import { BoardObj } from '../../Utils/GlobalType';
import { BoardList } from '..';

interface BoardProps {
    boardPostList: BoardObj[]
}

const mappingBoardList = (boardPostList : BoardObj[]) => boardPostList.map((item, ix) => returnBoardListComponent(item, ix))


const returnBoardListComponent = (board : BoardObj, ix : number) => <BoardList board={board} key={`board-list-${ix}`}/>;

const Board: React.FC<BoardProps> = ({ boardPostList }) => {
   
    return (
        <S.Postioner>
            {mappingBoardList(boardPostList)}
        </S.Postioner>
    )
}

export default Board;
import React from 'react';
import * as S from './Style';
import { PostType } from '../../Utils/GlobalType';
import { BoardList } from '..';

type BoardObj = [
    {
        notice: {
            title: "기숙사 공지사항"
            list: PostType[]
        }
    },
    {
        song: {
            title: "기숙사 공지사항"
            list: PostType[]
        }
    },
    {
        forest: {
            title: "기숙사 공지사항"
            list: PostType[]
        }
    }
]

interface BoardProps {
    // boardPostList: BoardObj[]
    boardPostList?: any
}

// const mappingBoardList = (list?: any) => list.map((item, ix) => {
//     return <BoardList lists={item} key={ix}/>
// })

const Board: React.FC<BoardProps> = ({ boardPostList }) => {
    return (
        <S.Postioner>
            {/* {mappingBoardList(boardPostList)}
             */}
            <BoardList />
            <BoardList />
            <BoardList />
            <BoardList />
        </S.Postioner>
    )
}

export default Board;
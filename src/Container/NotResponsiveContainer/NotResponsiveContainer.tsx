import React from 'react';
import * as S from './Style';

const NotResponsiveContainer: React.FC = () => {
    return (
        <S.Postioner>
            <h2>안녕하세요!</h2>
            <h2>기숙사 관리 시스템 담당 부서, </h2>
            <h2>Team. DOTORI입니다.</h2>
            <div />
            <span>다름이 아니라! 현재 해상도는 지원을 하지 않습니다!</span>
            <span>저희의 현재 최소 지원 해상도는 1520 x 800입니다.</span>
            <span>참고 부탁드립니다 :)</span>
        </S.Postioner>
    )
}

export default NotResponsiveContainer;
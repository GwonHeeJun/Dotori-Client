import React from "react";
import * as S from "./Style";
import { MatchType } from "../../../Utils/GlobalType";
import { LaptopHeader } from "../Header/model/CombineAdminHeader";

type User = {
  name: string;
  grade: number;
  class: number;
  num: number;
  laptopRoom: string;
  seat: number;
  status: boolean;
  bringTime: string;
};

interface ListProps {
  userObj: User[];
  match: MatchType;
}

const onlyCompareThisHeader = (match: MatchType) => {
  switch (match.path) {
    case "/laptop":
      return LaptopHeader;
    default:
      break;
  }
};


const mappingUserList = (userObj: User[], match: MatchType) =>
    userObj.map((item, ix) => 
    <S.Wrapper>
                <div style={{ flex: onlyCompareThisHeader(match).list[0].flex }}>{item.name}</div>
                <div style={{ flex: onlyCompareThisHeader(match).list[1].flex  }}>{item.grade}</div>
                <div style={{ flex: onlyCompareThisHeader(match).list[2].flex  }}>{item.class}</div>
                <div style={{ flex: onlyCompareThisHeader(match).list[3].flex  }}>{item.num}</div>
                <div style={{ flex: onlyCompareThisHeader(match).list[4].flex  }}>{item.laptopRoom}</div>
                <div style={{ flex: onlyCompareThisHeader(match).list[5].flex  }}>{item.seat}</div>
                <div style={{ flex: onlyCompareThisHeader(match).list[6].flex  }}>
                    <S.StatusWrapper status={item.status}>
                        <span>{item.status ? '이용가능' : '적발'}</span>
                    </S.StatusWrapper>
                </div>
                <div style={{ flex: onlyCompareThisHeader(match).list[7].flex  }}>{item.bringTime}</div>
                <div style={{ flex: onlyCompareThisHeader(match).list[8].flex  }}>OK</div>
    </S.Wrapper>)


const List: React.FC<ListProps> = ({ userObj, match }) => {
  return <>{mappingUserList(userObj, match)}</>;
};

export default List;

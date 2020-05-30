import React, { useState } from "react";
import * as S from "./Style";
import BannerContainer from "../BannerContainer/BannerContainer";
import { MatchType } from "../../Utils/GlobalType";
import { ManufactureDate } from "../../Utils/ManufactureDate";
import { ChangeLaptopType } from "../../Components";
import { AdminLaptopListContainer } from "../";

interface TemplateProps {
  match: MatchType;
}

const returnPageType = (routerName: string) => {
  switch (routerName) {
    case "/":
      return "홈";
    case "/laptop":
      return "노트북 대여";
    default:
      break;
  }
};

const PageTemplate: React.FC<TemplateProps> = ({ match, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <S.Postioner>
      <S.Wrapper>
        <S.Title>
          {returnPageType(match.path)}
          <strong>
            {ManufactureDate("Y")}년 {ManufactureDate("M")}월{" "}
            {ManufactureDate("D")}일 {ManufactureDate("W")}요일
          </strong>
          {match.path === "/laptop" && (
            <ChangeLaptopType
              active={isActive}
              setActive={(value: boolean) => setIsActive(value)}
            />
          )}
        </S.Title>
        {!isActive ? (
          <>
            <S.Banner>
              <BannerContainer nowUrl={match.path} />
            </S.Banner>
            <S.Content>{children}</S.Content>
          </> 
        ) : <AdminLaptopListContainer match={match}  />}
      </S.Wrapper>
    </S.Postioner>
  );
};

export default PageTemplate;

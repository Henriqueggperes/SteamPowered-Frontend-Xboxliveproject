import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgColor2};
    height: 10vh;
    width: 100%;
    display: flex;
  `}
`;

export const HeaderImgContainer = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const HeaderProfileCardContainer = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: end;
    align-items: center;
  `}
`;

export const HeaderProfileCard = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgColor1};
    height: 60%;
    width: 30%;
    display: flex;
    margin: 30px 80px 10px;
    justify-content: start;
    align-items: center;
  `}
`;

export const CardProfileImage = styled.img`
  ${({ theme }) => css`
    //MUDAR CONSTANTS DEPOIS
    height: 80%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
export const CardProfileContainer = styled.div`
  ${({ theme }) => css`
    height: 90%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 2px solid;
    border-radius: ;
    border-color: ${theme.colors.bgColor2};
  `}
`;
export const CardProfileName = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.cardProfileNameColor};
    font-size: ${theme.constants.profileNameFontSize};
  `}
`;
export const CardProfileAdminSettings = styled.span`
${({theme})=>css`
 color: ${theme.colors.headerTextColor};
 font-size:${theme.constants.adminSettingsFontSize} ;
`}
`
export const CardProfileCurrencyContainer = styled.div`
${({theme})=>css`
 height: 100%;
 width: 40%;
 display: flex;
 justify-content: center;
 align-items: center;
`}
`
export const CardProfileCurrency = styled.span`
${({theme})=>css`
  color: ${theme.colors.btnTextColor2};
  font-weight: ${theme.constants.fontWheight};
  font-size: ${theme.constants.currencyFontSize};
`}
`

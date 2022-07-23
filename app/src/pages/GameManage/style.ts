import styled, { css } from "styled-components";

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  `}
`;
export const ManageTitleContainer = styled.section`
  ${({ theme }) => css`
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
  `}
`;
export const ManageTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.headerTextColor};
    font-size: 3rem;
    margin: 0 0 0 5rem;
  `}
`;

export const FormSectionsContainer = styled.section`
  ${({ theme }) => css`
    height: 90%;
    width: 100%;
    display: flex;
  `}
`;

export const GameFormContainerSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center ;
    height: 100%;
    width: 50%;
  `}
`;
export const GenreFormContainerSection = styled.section`
  ${({ theme }) => css`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  `}
`;
export const AddGameForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 85%;
    width: 50%;
    background-color: ${theme.colors.bgColor2};
    border-radius: 1rem;
  `}
`;

export const GenreForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-evenly;
    margin-top: 1rem;
    height: 20%;
    width: 45%;
    background-color: ${theme.colors.bgColor2};
    border-radius: .6rem;
    box-sizing: border-box;
  `}
`;

export const GobackArrow = styled.img`
${({theme})=>css`

 height: 100%;
 width: 100%; 
`}
`

export const TextInput = styled.input`
${({theme})=>css`
height: 30%;
width: 100%;
color: #CECECE;
margin-top: .5rem;
margin-left: 2rem;
background-color: #32353C;
border-radius: .3rem;
outline-style:none;
border-style: none;
`}
`
export const FormTitle =  styled.h2`
${({theme})=>css`
  position: relative;
  bottom:20px;
  color: #ffff;
  margin: 0;
  padding: 0;
`}
`

export const FormCreateButton = styled.button`
${(theme)=>css`
  position: relative;
  border-radius: .2rem;
  background-color:#398CC8;
  font-size: 1rem;
  color:#FFFFFF;
  top:25px;
  height: 2.5rem;
  width: 6rem;
  border-style: none;
  cursor: pointer;
`}
`
export const GenreButtonsContainer = styled.div`
${({theme})=>css`
  display: flex;
  justify-content: ;
  height: 35%;
  width: 100%;
`}
`

export const FormUpdateButton = styled.button`
${(theme)=>css`
  position: relative;
  border-radius: .2rem;
  background-color:#016918;
  font-size: 1rem;
  color:#FFFFFF;
  top:25px;
  height: 2rem;
  width: 6rem;
  border-style: none;
  cursor: pointer;
`}
`
export const FormDeleteButton = styled.button`
${(theme)=>css`
  position: relative;
  margin-left: .5rem;
  border-radius: .2rem;
  background-color:#4E040C;
  font-size: 1rem;
  color:#FFFFFF;
  top:25px;
  height: 2rem;
  width: 6rem;
  border-style: none;
  cursor: pointer;
`}
`

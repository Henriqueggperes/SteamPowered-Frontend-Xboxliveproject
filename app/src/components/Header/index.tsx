import logo from "./../../assets/img/logo_steam.svg";
import Crown from "./../../assets/icons/crown.svg"
import Frenchie from "./../../assets/img/Frenchie.png"
import * as S from "./style";
import ProfileCard from "components/ProfileCard";

const Header = ({profile}:any) => {
  return (
    <>
      <S.HeaderContainer>
        {" "}
        {/*HEADER*/}
        <S.HeaderImgContainer>
          <S.HeaderImgLogo src={logo}/>
        </S.HeaderImgContainer>
        {profile?<ProfileCard profileInfo={profile}/>: ""}
      </S.HeaderContainer>
      {/*HEADER*/}
    </>
  );
};

export default Header;

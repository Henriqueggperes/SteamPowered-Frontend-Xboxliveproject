import { ReactComponent as Logo } from "./../../assets/img/logo_steam.svg";
import Crown from "./../../assets/icons/crown.svg"
import Frenchie from "./../../assets/img/Frenchie.png"
import * as S from "./style";

const Header = () => {
  return (
    <>
      <S.HeaderContainer>
        {" "}
        {/*HEADER*/}
        <S.HeaderImgContainer>
          <Logo />
        </S.HeaderImgContainer>
      </S.HeaderContainer>
      {/*HEADER*/}
    </>
  );
};

export default Header;

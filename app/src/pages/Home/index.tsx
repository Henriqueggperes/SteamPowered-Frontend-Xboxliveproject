import * as S from "./style";
import {ReactComponent as Logo} from './../../assets/img/logo_steam.svg'
import GamesList from "components/GamesList";
import Header from "components/Header";
const HomePage = () => { 
  return (
    <S.Home>
      <Header></Header>
      <S.HomeContentContainer>
        <GamesList></GamesList>
      </S.HomeContentContainer>
    </S.Home>
  );
};

export default HomePage;

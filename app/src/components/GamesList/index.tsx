import { useParams } from "react-router-dom";
import * as S from "./style";

const GamesList = () => {
  const params = useParams();
  

  return (
    <>
      <S.FavoritesGenresListContainer>
        {/*FAVORTITOS*/}
        <S.FavoritesGenresTitle>
          <S.FavoritesGenresTitle>FAVORITOS</S.FavoritesGenresTitle>
        </S.FavoritesGenresTitle>
        <S.GamesGenresContainer>
          {/* {games.map((game) => (
            <S.GameGenreCard>
              
              <span>{game.gameName}</span>
            </S.GameGenreCard>
          ))} */}
        </S.GamesGenresContainer>
      </S.FavoritesGenresListContainer>

      <S.FavoritesGenresListContainer>
        {/*GENEROS*/}
        <S.FavoritesGenresTitle>
          <S.FavoritesGenresTitle>GÊNEROS</S.FavoritesGenresTitle>
        </S.FavoritesGenresTitle>
        <S.GamesGenresContainer>
            {/* {genres.map((genre) => (
              <S.GameGenreCard>
                
                <span>{genre.genreName}</span>
              </S.GameGenreCard>
            ))} */}
        </S.GamesGenresContainer>
      </S.FavoritesGenresListContainer>
    </>
  );
};

export default GamesList 

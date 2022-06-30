import * as S from "./style";
const GamesList = () => {
  return (
    <>
      <S.FavoritesGenresListContainer>{/*FAVORTITOS*/}
        <S.FavoritesGenresTitle>
          <S.FavoritesGenresTitle>FAVORITOS</S.FavoritesGenresTitle>
        </S.FavoritesGenresTitle>
      </S.FavoritesGenresListContainer>

     <S.FavoritesGenresListContainer> {/*GENEROS*/}
     <S.FavoritesGenresTitle>
          <S.FavoritesGenresTitle>GÊNEROS</S.FavoritesGenresTitle>
        </S.FavoritesGenresTitle>
     </S.FavoritesGenresListContainer>
    </>
  );
};

export default GamesList;

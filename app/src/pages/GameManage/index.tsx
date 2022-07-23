import * as S from "./style";
import "./style.css";
import * as Sh from "./../Home/style";
import Header from "components/Header";
import arrow from "./../../assets/icons/arrow.svg";
import arrowCircle from "./../../assets/icons/arrow-circle.svg";
import cam from "./../../assets/img/camera.png";
import { Link } from "react-router-dom";
const GameManage = () => {
  return (
    <Sh.Home>
      <Header />
      <S.ContentContainer>
        <Link to={"/homepage"}>
          <S.GobackArrow src={arrow} />
        </Link>
        <S.ManageTitleContainer>
          <S.ManageTitle>GERENCIAMENTO</S.ManageTitle>
        </S.ManageTitleContainer>

        <S.FormSectionsContainer>
          {/*---FORMULARIO: ADCIONAR JOGO---  */}
          <S.GameFormContainerSection>
            <S.AddGameForm>
              <S.FormTitle>
                <b>Adicionar jogo</b>
              </S.FormTitle>
              <label id="thumbnail">
                <img src={cam} alt="Select Image" className="cam" />
                <input type="file" />
              </label>
              
              <label className="input-label">Nome do jogo</label>
              <input type="text" className="gameform-input" />

              <label className="input-label">Ano de lançamento</label>
              <input type="text" className="gameform-input" />
              
              <label className="input-label">IMDB score</label>
              <input type="text" className="gameform-input" />
              
              <label className="input-label">Gênero</label>
              <input type="text" className="gameform-input" />
              
              <label className="input-label">URL do trailer</label>
              <input type="text" className="gameform-input" />
              
              <label className="input-label">URL de uma gameplay</label>
              <input type="text" className="gameform-input" />
              
              <label className="input-label">Descrição</label>
              <input type="" className="gameform-input description" />
              <S.FormCreateButton><b>Criar</b></S.FormCreateButton>
            </S.AddGameForm>
          </S.GameFormContainerSection>
          {/* ---------------------------- */}

          {/*---FORMULARIOS: CRUD DE GENEROS---  */}
          <S.GenreFormContainerSection>
            <S.GenreForm>
              <S.FormTitle>
                <b>Adcionar gênero</b>
              </S.FormTitle>
              <S.TextInput placeholder="Novo gênero"></S.TextInput>
              <S.FormCreateButton type="submit">
                <b>Criar</b>
              </S.FormCreateButton>
            </S.GenreForm>

            <S.GenreForm>
              <S.FormTitle>
                <b>Editar gênero</b>
              </S.FormTitle>

              <S.TextInput placeholder="Gênero"></S.TextInput>
              <S.TextInput placeholder="Nome atualizado do gênero"></S.TextInput>

              <S.GenreButtonsContainer>
                <S.FormUpdateButton type="submit">
                  <b>Atualizar</b>
                </S.FormUpdateButton>

                <S.FormDeleteButton type="submit">
                  <b>Deletar</b>
                </S.FormDeleteButton>
              </S.GenreButtonsContainer>
            </S.GenreForm>
          </S.GenreFormContainerSection>
          {/* ---------------------------- */}
        </S.FormSectionsContainer>
      </S.ContentContainer>
    </Sh.Home>
  );
};

export default GameManage;

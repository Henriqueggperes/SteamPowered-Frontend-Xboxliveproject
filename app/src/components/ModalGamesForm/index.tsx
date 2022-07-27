import { useState } from "react";
import { gameService, genreService } from "./../../services/gameGenreService";
import "./style.css"
import cam from "./../../assets/img/camera.png";
import { IoIosArrowDropdown } from "react-icons/io";
const ModalGamesForm = () => {
    const [gameValues, setGameValues] = useState({
        gameName: "",
        description: "",
        imdbScore: 0,
        year: "",
        trailerYouTubeUrl: "",
        genreName: "",
        imageUrl: "",
        gameplayYouTubeUrl: "",
      });
      const [genreValues, setGenreValues] = useState({
        name: "",
      });
    
      const [allGenres, setAllGenres] = useState([]);
    
      const [clicked, setClicked] = useState("");
      const [dropDownGenre,setDropDownGenre] = useState("")
    
      const loadAllGenres = async () => {
        const response: any = await genreService.getAllGenres();
        setAllGenres(response.data);
        if(clicked=="drop-down-content-closed"){
          setClicked("drop-down-content");
        }
        else{
          setClicked("drop-down-content-closed")
        }
      };
    
      const handleChangeGames = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name != "name") {
          setGameValues({
            ...gameValues,
            [event.target.name]: event.target.value,
          });
          console.log(event.target.name);
        } else {
          setGenreValues({
            [event.target.name]: event.target.value,
          });
        }
      };
    
      const handleGameSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setGameValues({ ...gameValues });
        const response: any = await gameService.createGame(gameValues);
        if (response.data) {
          alert("Jogo criado com sucesso");
        }
      };
    
      const handleGenreSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response: any = await genreService.createGenre(genreValues);
        if (response.data) {
          alert("Gênero criado com sucesso");
        }
      };
  return (
    <div className="modal-forms-container">
            <form className="modal-add-game-form" onSubmit={handleGameSubmit}>
              <h2 className="modal-add-game-title">Adcionar jogo</h2>

              <div className="modal-game-image-thumbnail-container">
                <img
                  src={gameValues.imageUrl ? gameValues.imageUrl : cam}
                  alt="Imagem escolhida para o jogo"
                  className={
                    gameValues.imageUrl
                      ? "modal-game-image-thumbnail"
                      : "modal-cam-image-thumbnail"
                  }
                />
              </div>
              <label className="modal-form-label">Imagem do jogo</label>
              <input
                type="text"
                name="imageUrl"
                className="modal-game-image-input modal-input"
                onChange={handleChangeGames}
              />
              <label className="modal-form-label">Nome do jogo</label>
              <input
                type="text"
                name="gameName"
                className="modal-game-name-input modal-input"
                onChange={handleChangeGames}
              />
              <label className="modal-form-label">Ano de lançamento</label>
              <input
                type="text"
                name="year"
                className="modal-game-year-input modal-input"
                onChange={handleChangeGames}
              />
              <label className="modal-form-label">IMDB score</label>
              <input
                type="number"
                name="imdbScore"
                className="modal-game-score-input modal-input"
                onChange={handleChangeGames}
              />
              <label className="modal-form-label">Gênero </label>
               <div className="drop-down-input-container"> 
                <input
                  type="text"
                  name="genreName"
                  className="modal-game-genre-input modal-input"
                  onChange={handleChangeGames}
                />
                 <div className="drop-down-container">
                  <IoIosArrowDropdown
                    onClick={loadAllGenres}
                    className="drop-down-icon"
                  />
                  <div className={clicked}>
                    {allGenres.map((element:any)=>(
                      <div className={dropDownGenre}>{element.name}</div>
                    ))}
                  </div>
                </div> 
              </div>
              <label className="modal-form-label">Trailer do jogo</label>
              <input
                type="text"
                name="trailerYouTubeUrl"
                className="modal-game-trailer-input modal-input"
                onChange={handleChangeGames}
              />
              <label className="modal-form-label">Gameplay do jogo</label>
              <input
                type="text"
                name="gameplayYouTubeUrl"
                className="modal-game-gameplay-input modal-input"
                onChange={handleChangeGames}
              />
              <label className="modal-form-label">Descrição</label>
              <input
                type="text"
                name="description"
                className="modal-game-description-input modal-input"
                onChange={handleChangeGames}
              />

              <button className="add-game-button button">Adicionar</button>
            </form>
            <div className="genre-manage-container">
              <h2 className="modal-add-genre-title">Adcionar gênero</h2>
              <form
                className="modal-add-genre-form"
                onSubmit={handleGenreSubmit}
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    className="modal-genre-name-input modal-input"
                    onChange={handleChangeGames}
                  />
                  <button className="add-genre-button button">Adicionar</button>
                </div>
              </form>
            </div>
          </div>
  )
}

export default ModalGamesForm
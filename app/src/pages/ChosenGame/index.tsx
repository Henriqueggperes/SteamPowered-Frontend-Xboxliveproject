import Header from "components/Header";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { gameService } from "services/gameGenreService";
import backArrow from "./../../assets/icons/arrow.svg";
import { BsWrench } from "react-icons/bs";
import "./style.css";

const ChosenGame = () => {
  useEffect(() => {
    getGameById();
  }, []);
  const params = useParams();

  const [game, setGame] = useState({
    id:"",
    gameName:"",
    imdbScore:"",
    imageUrl:"",
    description:"",
    year:"",
    trailerYouTubeUrl:"",
    gameplayYouTubeUrl:"",
    createdAt:"",
    updatedAt:"",
    genre: [{
        createdAt: "",
        id: "",
        name: "",
        updatedAt: "",
    }]
  })

  const getGameById = async () => {
    const response: any = await gameService.getGameById(params.id);
    setGame(response.data);
    console.log(response.data)
  };

  return (
    <>
      <Header />
      <section className="chosen-game-content">
        <Link
          to={`/homepage/profile/${params.pr}`}
          className="link-to-homepage"
        >
          <img
            src={backArrow}
            className="back-arrow-image"
            alt="Icone de uma flecha para voltar de página"
          />
        </Link>

        <div className="game-chosen-card">
          <div className="game-image-description-container">
            <img src={game.imageUrl} className="chosen-game-img" />
            <span className="game-description">{game.description}</span>
          </div>
          <div className="game-name-videos-container">
            <h2>{game.gameName}</h2>
            {/* <span>{game.genre[0].name}</span> */}
            <div className="videos-container">
            <iframe src={game.trailerYouTubeUrl} className="game-trailer" />
            <iframe src={game.gameplayYouTubeUrl} className="game-trailer" />
            </div>
            <BsWrench className="manage-wrench"></BsWrench>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChosenGame;

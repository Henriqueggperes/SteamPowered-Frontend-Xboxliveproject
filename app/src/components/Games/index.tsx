import { useEffect, useState } from "react";
import { gameService } from "services/gameGenreService";
import { HiOutlineThumbUp } from "react-icons/hi";
import favorite from "./../../assets/icons/favorite.svg"
import "./style.css";

interface gamesObj {
  id: string;
  gameName: string;
  imdbScore: string;
  imageUrl: string;
  description: string;
  year: string;
  trailerYouTubeUrl: string;
  gameplayYouTubeUrl: string;
  createdAt: string;
  updatedAt: string;
  genre: [];
}

const Games = () => {
  const [games, setGames] = useState<any>([]);

  const allGames = async () => {
    const response: any = await gameService.getAllGames();
    setGames(response.data);
    console.log(games);
  };

  useEffect(() => {
    allGames();
  }, []);

  return (
    <>
      <section className="games-container">
        {games.map((element: any) => (
          <div className="game-card">
            <img src={element.imageUrl} className="game-card-image" />
            <div className="game-card-info-container">
              <span className="game-card-name">{element.gameName}</span>
              <div className="card-footer">
                <span className="game-card-imdb">
                  IMDB Score: {element.imdbScore}
                </span>
                <img src={favorite} className="favorite-icon-thumb"/>
              </div>
            </div>

          </div>
        ))}
      </section>
    </>
  );
};

export default Games;

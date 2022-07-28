import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { gameService } from "services/gameGenreService";
import favorite from "./../../assets/icons/favorite.svg"
import "./style.css";

const Games = () => {
  const [games, setGames] = useState<any>([]);

  const params = useParams()


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
           <Link to={`/chosen-game/${element.id}/profile/${params.id}`} className="chosen-game-link">
            <img src={element.imageUrl} className="game-card-image" />
           </Link>
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

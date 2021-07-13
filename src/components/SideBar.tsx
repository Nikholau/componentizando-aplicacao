import { useState } from "react";
import { useMovies } from "../MoviesContext";
import { Button } from "./Button";
import { AiOutlineDoubleLeft } from "react-icons/Ai";
import { AiOutlineDoubleRight } from "react-icons/Ai";

export function SideBar() {
  const { genres, handleClickButton, selectedGenreId } = useMovies();

  const [isHidden, setIsHidden] = useState(false);

  function handleHideSideBar() {
    if (!isHidden) {

      setIsHidden(true);

    } else {

      setIsHidden(false);
    }
  }

  return (
    <>
      <nav className={isHidden ? `${'sidebar sidebar-hidden'}` : `${'sidebar'}`}>

        <div className="hide-button-container">{!isHidden
          ?
          <AiOutlineDoubleLeft
            className="botao-esquerda"
            onClick={handleHideSideBar}
          />
          :
          <AiOutlineDoubleRight className="botao-direita"
            onClick={handleHideSideBar}
          />
        }
        </div>

        <div>{!isHidden &&
          <span>Watch<p>Me</p></span>
        }
        </div>



        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={!isHidden ? genre.title : ''}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
    </>
  )
}

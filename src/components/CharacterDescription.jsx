import React, { useEffect, useState } from "react";
import { useParams ,Link} from "react-router-dom";
import axios from "axios";
import "./CharacterDescription.css";

const CharacterDescription = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [showComics, setShowComics] = useState(false);
  const [comics, setComics] = useState([]);
  const [selectedComic, setSelectedComic] = useState(null);

  useEffect(() => {
    fetchCharacter();
  }, []);

  const fetchCharacter = async () => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters/${id}?&ts=1&apikey=cdbef97499cdf2891183557d87321821&hash=3ea75c54a7b789cef550d0d1df216321`
      );
      setCharacter(response.data.data.results[0]);
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  };

  const fetchComics = async () => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters/${id}/comics?&ts=1&apikey=cdbef97499cdf2891183557d87321821&hash=3ea75c54a7b789cef550d0d1df216321`
      );
      setComics(response.data.data.results);
    } catch (error) {
      console.error("Error fetching comics:", error);
    }
  };

  const toggleComics = () => {
    if (showComics) {
      setShowComics(false);
    } else {
      fetchComics();
      setShowComics(true);
    }
  };

  const handleComicClick = (comic) => {
    setSelectedComic(comic);
  };

  const closePopup = () => {
    setSelectedComic(null);
  };

  return (
    <div className="character-description-container">
        <Link to="/characters" className="back-button">Back to Characters</Link>
      {character && (
        <div className="character-card">
          <img
            src={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
            alt={character.name}
            className="character-image"
          />
          <h3 className="character-name">{character.name}</h3>
          <p className="character-description">{character.description}</p>
          <button className="dropdown-btn" onClick={toggleComics}>
            {showComics ? "Hide Comics" : "View Comics"}
          </button>
          {showComics && (
            <div className="comics-container">
              {comics.map((comic) => (
                <div
                  key={comic.id}
                  className="comic-card"
                  onClick={() => handleComicClick(comic)}
                >
                  <img
                    src={`${comic.thumbnail.path}/standard_medium.${comic.thumbnail.extension}`}
                    alt={comic.title}
                    className="comic-image"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {selectedComic && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>
              &#x2715;
            </button>
            
            <h3 className="comic-title">Title:{selectedComic.title}</h3>
            <p className="comic-price">Price:${selectedComic.prices[0].price}</p>
            <p className="comic-date">Date Released:{selectedComic.dates[0].date}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDescription;

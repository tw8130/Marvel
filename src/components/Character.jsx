// components/Character.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Character.css";

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        // Replace with your Marvel API endpoint for fetching characters
        "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=cdbef97499cdf2891183557d87321821&hash=3ea75c54a7b789cef550d0d1df216321"
      );
      const data = response.data.data.results;
      setCharacters(data);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  const openCharacterDetails = (character) => {
    setSelectedCharacter(character);
  };

  const closeCharacterDetails = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="character-container">
      <h1 className="character-title">Marvel Characters</h1>
      <div className="character-grid">
        {characters.map((character) => (
          <div
            key={character.id}
            className="character-card"
            onClick={() => openCharacterDetails(character)}
          >
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
              className="character-image"
            />
            <h3 className="character-name">{character.name}</h3>
            <p className="character-description">{character.description}</p>
          </div>
        ))}
      </div>

      {selectedCharacter && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeCharacterDetails}>
              &times;
            </span>
            <h2>{selectedCharacter.name}</h2>
            <p>{selectedCharacter.description}</p>
            <h3>Comics</h3>
            <ul>
              {selectedCharacter.comics.items.map((comic, index) => (
                <li key={index}>{comic.name}</li>
              ))}
            </ul>
            <h3>Stories</h3>
            <ul>
              {selectedCharacter.stories.items.map((story, index) => (
                <li key={index}>{story.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Character;

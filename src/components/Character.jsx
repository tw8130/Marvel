import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Character.css";

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCharacters();
   
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        "https://gateway.marvel.com/v1/public/characters?&limit=30&offset=0&ts=1&apikey=cdbef97499cdf2891183557d87321821&hash=3ea75c54a7b789cef550d0d1df216321"
      );
      setCharacters(response.data.data.results);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
  character.name.toLowerCase().includes(searchTerm.toLowerCase())
);
  
  return (
    <div>
      <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search character by name"
          />
          <button onClick={fetchCharacters}>Search</button>
      </div>
        {/* <div className="character-container">
      
            {characters.map((character) => (
              <div key={character.id} className="character-card">
                <img
                  src={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
                  alt={character.name}
                  className="character-image"
                />
                <h3 className="character-name">{character.name}</h3>
                <Link to={`/characters/${character.id}`} className="view-details-btn">
                  View Details
                </Link>
              </div>
            ))}
        </div> */}

        <div className="character-container">
        {filteredCharacters.map((character) => (
          <div key={character.id} className="character-card">
            <img
              src={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
              alt={character.name}
              className="character-image"
            />
            <h3 className="character-name">{character.name}</h3>
            <Link to={`/characters/${character.id}`} className="view-details-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

 
 
};

export default Character;


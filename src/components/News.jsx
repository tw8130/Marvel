import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=Hulk&apikey=cdbef97499cdf2891183557d87321821`,
        );
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <h2>Characters</h2>
        {characters.map((character) => (
            <div key={character.id}>{character.name}</div>
        ))}
    </div>
  );
};

export default News;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Creators.css";
import apiConfig from '../api/apiConfig';

const hashedApiKey = apiConfig.hashedApiKey;


const Creators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    fetchCreators();
  }, []);

  const fetchCreators = async () => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/creators?ts=1&apikey=${hashedApiKey}`
      );
      setCreators(response.data.data.results);
    } catch (error) {
      console.error('Error fetching creators:', error);
    }
  };

  return (
    <div className="creators-container">
      {creators.map((creator) => (
        <div key={creator.id} className="creator-card">
          <div className="creator-header">
            <img
              src={`${creator.thumbnail.path}/portrait_uncanny.${creator.thumbnail.extension}`}
              alt={creator.fullName}
              className="creator-image"
            />
            <h3 className="creator-name">{creator.fullName}</h3>
          </div>
          <div className="creator-details">
            <p className="creator-description">{creator.description}</p>
            <div className="dropdown">
              <button className="dropdown-btn">View Comics and Series</button>
              <div className="dropdown-content">
                {creator.comics.items.map((comic) => (
                  <a key={comic.resourceURI} href={comic.resourceURI} className="dropdown-link">
                    {comic.name}
                  </a>
                ))}
                {creator.series.items.map((series) => (
                  <a key={series.resourceURI} href={series.resourceURI} className="dropdown-link">
                    {series.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Creators;


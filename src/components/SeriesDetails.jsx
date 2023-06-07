import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import "./SeriesDetails.css";

const SeriesDetails = () => {
  const { id } = useParams();
  const [series, setSeries] = useState(null);

  useEffect(() => {
    fetchSeriesDetails();
  }, []);

  const fetchSeriesDetails = async () => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/series/${id}?ts=1&apikey=cdbef97499cdf2891183557d87321821&hash=3ea75c54a7b789cef550d0d1df216321`
      );
      setSeries(response.data.data.results[0]);
    } catch (error) {
      console.error("Error fetching series details:", error);
    }
  };

  if (!series) {
    return <div>Loading series details...</div>;
  }

  const {
    title,
    description,
    startYear,
    endYear,
    rating,
    thumbnail,
    creators,
    characters,
    urls
  } = series;

  const trailerUrl = urls.find((url) => url.type === "video")?.url;

  return (
    <div className="series-details-container">
        <Link to="/series" className="back-button">Back to Series</Link>
      <img
        className="series-image"
        src={`${thumbnail.path}/standard_medium.${thumbnail.extension}`}
        alt={title}
      />
      < div className="series-card">
      <h2 className="series-title">{title}</h2>
      
      <p className="series-description">{description}</p>
      <div className="series-year">
        <p>
          <strong>Start Year:</strong> {startYear}
        </p>
        <p>
          <strong>End Year:</strong> {endYear}
        </p>
      </div>
      <p className="series-rating">
        <strong>Rating:</strong> {rating}
      </p>
      <div className="series-creators">
        <h3>Creators:</h3>
        <ul>
          {creators.items.map((creator) => (
            <li key={creator.name}>{creator.name}</li>
          ))}
        </ul>
      </div>
      <div className="series-characters">
        <h3>Characters:</h3>
        <ul>
          {characters.items.map((character) => (
            <li key={character.name}>{character.name}</li>
          ))}
        </ul>
      </div>
      
      <div className="series-trailer">
        <h3>Trailer:</h3>
        <a href={trailerUrl} target="_blank">
          Watch Trailer
        </a>
      </div>
      </div>
     
    </div>
  );
};

export default SeriesDetails;

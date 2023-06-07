import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Series.css";
import apiConfig from '../api/apiConfig';

const hashedApiKey = apiConfig.hashedApiKey;


const Series = () => {
  const [series, setSeries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchSeries();
  }, []);

  const fetchSeries = async () => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/series?ts=1&apikey=${hashedApiKey}`
      );
      setSeries(response.data.data.results);
    } catch (error) {
      console.error("Error fetching series:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredSeries = series.filter((serie) =>
    serie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search series by title"
        />
      </div>
      <div className="series-container">
        {filteredSeries.map((serie) => (
          <div key={serie.id} className="series-card">
             
             
                <img className="series-image"
                src={`${serie.thumbnail.path}/standard_medium.${serie.thumbnail.extension}`}
                alt={serie.title}
                
                />
            
         
            <h3 className="series-title">{serie.title}</h3>
            <Link to={`/series/${serie.id}`} className="view-details-btn">
              View More
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Series;

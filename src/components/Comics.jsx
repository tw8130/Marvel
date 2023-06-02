import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Comics.css";

const Comics = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await axios.get(
          "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=cdbef97499cdf2891183557d87321821&hash=3ea75c54a7b789cef550d0d1df216321"
        );
        setComics(response.data.data.results);
      } catch (error) {
        console.error("Error fetching comics:", error);
      }
    };

    fetchComics();
  }, []);

  return (
    <div className="comics-container">
      {comics.map((comic) => (
        <div className="comic-card" key={comic.id}>
          <div className="comic-front">
            <img
              src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
              alt={comic.title}
              className="comic-image"
            />
            <h2 className="comic-title">{comic.title}</h2>
          </div>
          <div className="comic-back">
            <p className="comic-description">{comic.description || "No description available."}</p>
            <a
                href={comic.urls.find((url) => url.type === "detail")?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-link"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comics;

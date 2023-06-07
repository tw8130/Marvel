import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Events.css";
import apiConfig from '../api/apiConfig';

const hashedApiKey = apiConfig.hashedApiKey;




const Events = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showPopAside, setShowPopAside] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/events?ts=1&apikey=${hashedApiKey}`
      );
      setEvents(response.data.data.results);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleCardClick = (event, clickedEvent) => {
    event.stopPropagation();
    setSelectedEvent(clickedEvent);
    setShowPopAside(true);
  };

  return (
    <div className="events-container">
      {events.map((event) => (
        <div key={event.id} className="event-card" onClick={(e) => handleCardClick(e, event)}>
           <img
              src={`${event.thumbnail.path}/portrait_uncanny.${event.thumbnail.extension}`}
              alt={event.title}
              className="event-image"
            />
            <div className='event-info'>
            <h3 className="event-name">Title:{event.title}</h3>
            <h3 className="event-name">Desc:{event.description}</h3>
            </div>
        </div>
      ))}
      {selectedEvent && showPopAside && (
        <div className="popAside">
          <h4>Characters:</h4>
          <ul className="popAside-list">
            {selectedEvent.characters.items.map((character) => (
              <li key={character.resourceURI}>{character.name}</li>
            ))}
          </ul>
          <h4>Series:</h4>
          <ul className="popAside-list">
            {selectedEvent.series.items.map((series) => (
              <li key={series.resourceURI}>{series.name}</li>
            ))}
          </ul>
          <h4>Comics:</h4>
          <ul className="popAside-list">
            {selectedEvent.comics.items.map((comic) => (
              <li key={comic.resourceURI}>{comic.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Events;

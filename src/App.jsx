

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Character from './components/Character';
import CharacterDescription from "./components/CharacterDescription";
import Events from './components/Events';
import Creators from './components/Creators';
// import Comics from './components/Comics';
import Series from "./components/Series";
import SeriesDetails from "./components/SeriesDetails"
import Home from './components/Home';
import './App.css'; 




const App = () => {
  return (
    <Router>
      <div>
        <nav  className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            {/* <li>
              <Link to="/comics">Comics</Link>
            </li> */}
            <li>
              <Link to="/series">Series</Link>
            </li>
            <li>
              <Link to="/creators">Creators</Link>
            </li>
          </ul>
        </nav>
        <React.Fragment>
          <Routes>
          <Route path="/characters" element={<Character/>} />
          <Route
            exact
            path="/characters/:id"
            element={<CharacterDescription />}
          />
            <Route path="/events" element={<Events/>} />
            <Route path="/creators" element={<Creators/>} />
            {/* <Route path="/comics" element={<Comics/>} /> */}
            <Route path="/series" element={<Series />} />
            <Route
              exact
              path="/series/:id"
              element={<SeriesDetails />}
            />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </React.Fragment>
      </div>
    </Router>
  );
};

export default App;


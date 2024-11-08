// Actors.js
import React, { useEffect, useState } from "react";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/actors") // Assuming you have actors in your DB
      .then((response) => response.json())
      .then((data) => setActors(data));
  }, []);

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;


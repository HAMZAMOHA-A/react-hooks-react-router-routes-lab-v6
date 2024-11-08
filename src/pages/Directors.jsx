
import React, { useEffect, useState } from "react";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/directors") // Assuming you have directors in your DB
      .then((response) => response.json())
      .then((data) => setDirectors(data));
  }, []);

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;


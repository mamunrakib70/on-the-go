import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [Visited, setVisited] = useState(false);
  const handleVisited = () => {
    if (Visited) {
      setVisited(false);
    } else {
      setVisited(true);
    };
    handleVisitedCountries(country)
  };

  return (
    <div
      className={`country-border ${
        Visited ? "country-visited" : "Not-visited"
      }`}
    >
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h1>Name:{country.name.common}</h1>
      <h1>
        Population:{country.population.population} <br />
        <span>
          {country.population.population > 300000
            ? "Big Country"
            : "Small Country"}
        </span>
      </h1>
      <button className="button" onClick={handleVisited}>
        {Visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;

import React, { use, useState } from "react";
import "./Countries.css";
import Country from "../Country/Country.jsx";

const Countries = ({ fetchCountries }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    const newVisitedCountires = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountires);
  };

  const countriesData = use(fetchCountries);
  const countries = countriesData.countries;

  return (
    <div>
      <h1 className="countries">Visited Countries: {countries.length}</h1>
      <h1 className="country-border">Total visited countries: {visitedCountries.length}</h1>

      <ol className="ol">
        {
            visitedCountries.map((country)=>(<li key={country.cca3.cca3}>{country.name.common}</li>))
        }
      </ol>
      <div className="country ">
        {countries.map((country) => (
          <Country 
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

import React, { use } from "react";
import "./Countries.css"
import Country from "../Country/Country.jsx";


const Countries = ({ fetchCountries }) => {
  const countriesData = use(fetchCountries);
  const countries=countriesData.countries;

  return (
    <div>
      <h1 className="countries">Visited Countries: {countries.length}</h1>
      <div className='country '>
        {
        countries.map(country=> <Country country={country}></Country>)

      }
      </div>
    </div>
  );
};

export default Countries;

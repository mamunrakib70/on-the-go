import { Suspense, useState } from "react";
import Countries from "./Countries/Countries";

import "./App.css";

function App() {
  const fetchCountries = fetch(
    "https://openapi.programming-hero.com/api/all"
  ).then((res) => res.json());

  return (
    <>
      <Suspense fallback={<h2>Loading countries...</h2>}>
        <Countries fetchCountries={fetchCountries}></Countries>
        
      </Suspense>
    </>
  );
}

export default App;

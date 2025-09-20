import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry }) => {
    // console.log(country);

    const [visited, setVisited] = useState(false);

    const handleVisitCountry = () => {

        // 1st system
        // if(visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        // 2nd system
        // {!visited ? setVisited(true) : setVisited(false)}

        // 3rd system
        setVisited(!visited)
        handleVisitedCountry(country);


    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? 'Big Country' : 'Small Country'}  </p>
            <button onClick={handleVisitCountry}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;
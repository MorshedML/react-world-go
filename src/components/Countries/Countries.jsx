import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesPromiseData = use(countriesPromise);
    const countrise = countriesPromiseData.countries;

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountry = (country) => {
        // console.log('Visited Country Added', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }


    return (
        <div>
            <h1>I am come from Countries component Data is {countrise.length} </h1>

            <h2>Visited Countries Numbers: {visitedCountries.length} </h2>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className='countries'>
                {
                    countrise.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;
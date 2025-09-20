import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const countriesPromiseData = use(countriesPromise);
    const countrise = countriesPromiseData.countries;
    
    
    
    return (
        <div>
            <h1>I am come from Countries component Data is {countrise.length} </h1>


            <div className='countries'>
                {
                countrise.map(country => <Country key={country.cca3.cca3} country={country}></Country> )
                }
            </div>

        </div>
    );
};

export default Countries;
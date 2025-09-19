import React, { use } from 'react';

const Countries = ({countriesPromise}) => {
    const countriesPromiseData = use(countriesPromise);
    const country = countriesPromiseData.countries;
    console.log(country);
    
    
    
    return (
        <div>
            <h1>I am come from Countries component Data is {country.length} </h1>
        </div>
    );
};

export default Countries;
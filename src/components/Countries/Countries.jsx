import React, { use } from 'react';

const Countries = ({countriesPromise}) => {
    const countriesPromiseData = use(countriesPromise);
    const countrise = countriesPromiseData.countries;
    console.log(countrise);
    
    
    
    return (
        <div>
            <h1>I am come from Countries component Data is {countrise.length} </h1>
        </div>
    );
};

export default Countries;
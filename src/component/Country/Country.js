import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, population, area, region,flags}=props.country;

    return (
        <div className='country'>
            <h2>Country Name:{name.common}</h2>
            <p>population : {population}</p>
            <p>Area  : {area}</p>
            <p>region :{region}</p>
        <img src={flags.png} alt="" />

        </div>
    );
};

export default Country;
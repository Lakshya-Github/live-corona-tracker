// import React, {useEffect, useState} from 'react';
// import { NativeSelect, FormControl } from '@material-ui/core';

// import styles from './CountryPicker.module.css';
// import {fetchCountries} from '../../api';

// const CountryPicker = () => {

//     const [countries, setFetchCountries] = useState([]);

//     useEffect(() => {
//         const fetchAPI = async () => {
//             setFetchCountries(await countries);
//         }
//         fetchAPI();
//     }, [setFetchCountries]);

//     return (
//         <FormControl className="styles.formControl">
//             <NativeSelect>
//                 <option value="global">Global</option>
//                 {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
//             </NativeSelect>
//         </FormControl>
//     )
// }

// export default CountryPicker;



import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <h1 className={styles.mainHeading}>Select Country</h1>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
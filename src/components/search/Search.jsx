import React, { useEffect, useState } from 'react';
import styles from './Search.module.scss'
const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {
        console.log(searchValue);
    }, [searchValue]);
    return (
        <>
            <input value={searchValue} type="text" className={`${styles['search']}`} onChange={(e) => setSearchValue(e.target.value)} />   
        </>
    );
}

export default Search;

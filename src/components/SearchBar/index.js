import React, { useEffect } from 'react'
import Filter from './Filter'
import { useSelector,useDispatch } from 'react-redux';
import { setSearch } from '../../store/countries/countiresSlice';

const SearchBar = () => {

  const dispatch = useDispatch();
  const search = useSelector((state) => state.countries.search) || "";
  const theme=useSelector((state) => state.countries.theme)

  useEffect(()=>{
    console.log(search)
  },[search])

  return (
    <div className={theme === "dark" ? "section-1 section-1--dark" : "section-1"}>
        <div  className={theme === "dark" ? "search-bar search-bar--dark" : "search-bar"}>
          <input type="text" placeholder='Search for a country' value={search}
          className={theme === "dark" ? "input input--dark" : "input"}
          onChange={(e) => dispatch(setSearch(e.target.value))} />
          <svg style={{position:"absolute" , top:"15px" ,left:"20px"}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="search-bar__form--icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg>
        </div>
        <Filter/>   
    </div>
  )
}

export default SearchBar
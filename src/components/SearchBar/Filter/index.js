import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setRegion } from '../../../store/countries/countiresSlice';

const Filter = () => {

  const [open,setOpen]=useState(false)

  const dispatch=useDispatch()
  const region=useSelector((state) => state.countries.region);
  const theme=useSelector((state) => state.countries.theme)
  
  const handleOnClickRegion=(e)=>{
    dispatch(setRegion(e.target.id))
  }

  //useEffect(()=>console.log(region),[region])

  return (
    <>
      <div  className={theme === "dark" ? "filter filter--dark" : "filter"}>
          { region === undefined  ?" Filter By Region ": region }
          <svg 
          onClick={()=>open===false ? setOpen(true) : setOpen(false)}
          stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="filter__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
      
        <div className={open ? theme==="dark" ? 'filter-select filter-select--dark' : "filter-select"  : "hide"}>
        
        <ul>
          <li id="All" className="filter-select--region" onClick={(e)=>handleOnClickRegion(e)}>All</li>
          <li id="Africa" className="filter-select--region" onClick={(e)=>handleOnClickRegion(e)}>Africa</li>
          <li id="Americas" className="filter-select--region" onClick={(e)=>handleOnClickRegion(e)}>Americas</li>
          <li id="Asia" className="filter-select--region" onClick={(e)=>handleOnClickRegion(e)}>Asia</li>
          <li id="Europe" className="filter-select--region" onClick={(e)=>handleOnClickRegion(e)}>Europe</li>
          <li id="Oceania" className="filter-select--region" onClick={(e)=>handleOnClickRegion(e)}>Oceania</li>
        </ul>
      </div>
      </div>
    </>
    
  )
}

export default Filter
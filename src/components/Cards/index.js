import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getByRegion, getCountries } from '../../services/countries'
import { useEffect } from 'react'
import Card from './Card'
import { setCountries } from '../../store/countries/countiresSlice'

const Cards = () => {

  const dispatch=useDispatch()
  const theme=useSelector((state) => state.countries.theme)
  const allCountries=useSelector((state=>state.countries.allCountries))  ;
  const region=useSelector((state)=>state.countries.region)
  const byRegionCont=useSelector((state)=>state.countries.countriesByRegion) ;
  const search = useSelector((state) => state.countries.search)

  useEffect(() => {
    if (region === undefined || region === "All") {
      dispatch(getCountries());
    } else {
      dispatch(getByRegion(region));
    }
  }, [region,dispatch])
  
 
  let countriesToDisplay = region === undefined || region === "All" ? allCountries : byRegionCont;
  if (search || search !== ""){
    const regex = new RegExp(search, "gi")
    countriesToDisplay=countriesToDisplay.filter((item)=>{
      return item.name.common.match(regex)
    })
  }


  return (
    <div  className={theme === "dark" ? "section-2 section-2--dark" : "section-2"}>
      {countriesToDisplay.map((country, index) => (
        <Card key={index} country={country} />
      ))}
    </div>
  )
}

export default Cards
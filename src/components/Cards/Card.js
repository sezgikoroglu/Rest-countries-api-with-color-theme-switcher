import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Card = ({country}) => {

  const theme=useSelector((state) => state.countries.theme)
  const { numericCode, name:{common}, flags:{png,alt}, population, region, capital,cioc } = country
              
  return (
    <Link to={"/country/" + cioc} className='card-info'>
      <div className='card-flag'>
        <img src={png} alt="" />
      </div>
      <div  className={theme === "dark" ? "card-content card-content--dark" : "card-content"}>
        <h3 className='country-title'>{common}</h3>
        <div className="content-detail">
          <p>Population: <span>{population}</span> </p>
          <p>Region: <span>{region}</span> </p>
          <p>Capital: <span>{common}</span> </p>
        </div>
      </div>
      
    </Link>
  )
}

export default Card
import React from "react";
import { Link } from "react-router-dom";
import { getBorders } from "../../services/countries";
import { useDispatch , useSelector} from "react-redux";

const DetailCountry = ({ details }) => {

  const dispatch=useDispatch()
  const theme=useSelector((state) => state.countries.theme)
  const bordersCountries=useSelector((state) => state.countries.bordersCountries);

  if (!details) {
    return <div>Loading...</div>; // veya başka bir yedek içerik gösterebilirsiniz
  }

  const {
    name: { official, common },
    languages,
    currencies: currenciesObj,
    flags: { png, alt },
    population,
    region,
    subregion,
    capital,
    cioc,
    symbol,
    borders
  } = details;
  console.log(borders);

  const languageCode = Object.keys(languages)[0];
  const languageName = languages[languageCode];

  const currencyCode = Object.keys(currenciesObj)[0];
  const { name: currencyName } = currenciesObj[currencyCode];

  return (
    <>
      <div className={theme === "dark" ? "country country--dark" : "country"}>
        <Link to="/">
          <button className={theme === "dark" ? "country-button country-button--dark" : "country-button"}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              class="country__button--icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Back</span>
          </button>
        </Link>
        <div className="country_section">
          <div className="country-flag">
            <img src={png} alt="flag country" />
          </div>
          <div className="country-details">
            <h3 className="country-details-title">{common}</h3>
            <div className="country-details-elements">
              <div>
                <p>
                  <span>Official Name: </span>
                  {official}
                </p>
                <p>
                  <span>Population: </span>
                  {population.toLocaleString("en-US")}
                </p>
                <p>
                  <span>Region: </span>
                  {region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {capital}
                </p>
              </div>
              <div>
                <p>
                  <span>Currencies: </span>
                  {currencyName}
                </p>
                <p>
                  <span>Languages: </span>
                  {languageName}
                </p>
              </div>
            </div>
            <div className="country__details--list">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCountry;

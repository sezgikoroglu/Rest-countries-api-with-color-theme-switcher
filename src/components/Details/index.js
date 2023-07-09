import React from 'react'

import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getDetail } from '../../services/countries';
import DetailCountry from './DetailCountry';

const Details = () => {

    const dispatch = useDispatch();
    const details = useSelector((state) => state.countries.detail);
    const params = useParams();
    const code = params.code

    useEffect(() => {
      console.log(code)
      dispatch(getDetail(code));
      console.log(details)
    },[code]);

    console.log(details)
    const detailsCountry=details[0]

  return (
    <div>
        <DetailCountry details={detailsCountry} />
    </div>
  )
}

export default Details
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setTheme } from '../store/countries/countiresSlice'

const Header = () => {
  const dispatch=useDispatch()
  const theme=useSelector((state) => state.countries.theme)

  useEffect(()=>{
    console.log(theme)
  },[theme])

  return (
    <div className={theme === "dark" ? "header header--dark" : "header"}>
        <h1 className='header-title'>Where in the world?</h1>
        <div className="header-mode">
            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            <button 
              className={theme === "dark" ? "btn btn--dark" : "btn"}
              onClick={()=> dispatch(theme=="dark" ? setTheme("light") : setTheme("dark"))}>
              Dark Mode
            </button>
        </div>
    </div>
  )
}

export default Header
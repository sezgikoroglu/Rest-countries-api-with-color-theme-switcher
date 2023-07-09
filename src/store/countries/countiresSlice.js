import { createAsyncThunk,createSlice,PayloadAction } from "@reduxjs/toolkit";

import {getByRegion, getCountries, getDetail, getBorders} from "../../services/countries"

const countriesSlice=createSlice({
    name:"countries",
    initialState:{
        countries:[],
        allCountries:[],
        countriesByRegion:[],
        state:"",
        search:"",
        detail:[],
        borders:[],
        theme:"light"
    },

    reducers:{

        setSearch:(state, action)=>{
            state.search=action.payload
        },
        setRegion:(state, action)=>{
            state.region=action.payload
        },
        setCountries:(state,action)=>{
            state.countries=action.payload
        },
        setBorders:(state,action)=>{
            state.borders=action.payload
        },
        setTheme:(state,action)=>{
            state.theme=action.payload
        },
    },
    
    extraReducers: builder => {
        builder.addCase(getCountries.fulfilled, (state, action) => {
           state.allCountries = action?.payload ? (Array.isArray([action.payload]) ? action.payload : []) : [];
        });
        builder.addCase(getByRegion.fulfilled, (state, action) => {
            state.countriesByRegion = action?.payload ? (Array.isArray([action.payload]) ? action.payload : []) : [];
        });
        builder.addCase(getDetail.fulfilled, (state, action) => {
            state.detail = action?.payload ? (Array.isArray([action.payload]) ? action.payload : []) : [];
        });
        builder.addCase(getBorders.fulfilled, (state, action) => {
            state.borders = action?.payload ? (Array.isArray([action.payload]) ? action.payload : []) : [];
        });

    }
})


export const { setRegion , setCountries, setSearch,setTheme } = countriesSlice.actions
export default countriesSlice.reducer;
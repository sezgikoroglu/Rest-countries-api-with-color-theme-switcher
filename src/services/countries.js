import { createAsyncThunk } from '@reduxjs/toolkit';


export const BASE_URL = "https://restcountries.com/v3.1"

export const getCountries = createAsyncThunk('countries', async () => {
  const res = await fetch(`${BASE_URL}/all`);
  const response=await res.json()
  return response;
});

export const getByRegion = createAsyncThunk('region', async (region) => {
  const res = await fetch(`${BASE_URL}/region/${region}`);
  const response=await res.json()
  return response;
});

export const getDetail = createAsyncThunk('cioc', async (code) => {
  const res = await fetch(`${BASE_URL}/alpha/${code}`);
  const response=await res.json()
  return response;
});

export const getBorders = createAsyncThunk('bordersCountry', async (bordersCountry) => {
  const res = await fetch(`${BASE_URL}/alpha?codes=${bordersCountry}`);
  const response=await res.json()
  return response;
});
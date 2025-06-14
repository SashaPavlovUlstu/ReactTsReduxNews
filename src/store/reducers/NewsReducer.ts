import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ApiResponse } from '../../models/ApiResponse.ts';

interface GetTopHeadlinesParams {
  country?: string;
  category?: string;
  q?: string;
  page?: number;
  pageSize?: number;
}


//const API = import.meta.env.VITE_API_KEY_NEWS
//console.log(API)
const today = new Date();
const safeFrom = new Date(today);
safeFrom.setDate(today.getDate() - 7);

export const newsAPi = createApi({
  reducerPath:"newsApi",
  baseQuery:fetchBaseQuery({
    baseUrl:"https://newsapi.org/v2/",
      prepareHeaders:(headers) =>{
        const API = import.meta.env.VITE_API_KEY_NEWS
        console.log(API)
        headers.set("X-Api-Key",API);
        return headers;
      },
    }),
  tagTypes:["News","Everything"],
  endpoints:(build)=>({
    getTopHeadlines:build.query<ApiResponse,GetTopHeadlinesParams>({
      query:(params) =>{
        const {
          country = 'us',
          page = 1,
          pageSize = 10,
          category,
          q,
        } = params;
        const queryParams: { [key: string]: any } = { country, page, pageSize };

        if (category) {
          queryParams.category = category;
        }
        if (q) {
          queryParams.q = q;
        }
        return {
          url:'top-headlines',
          params:queryParams
        };
      },
      providesTags: ['News'],
    }),
  })
})
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Article } from '../../models/Article.ts';

interface GetLocalArticlesParams {
  q?: string;
  pageSize?: number;
}

export const localApiInstance = createApi({
  reducerPath: "localApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes: ["LocalArticles"],
  endpoints: (build) => ({
    getLocalArticles: build.query<Article[], GetLocalArticlesParams>({
      query: () => ({
        url: "articles",
      }),
      providesTags: ["LocalArticles"],
      transformResponse: (rawResult: Article[], meta, arg) => {
        const { q,pageSize } = arg;
        let processedResult = rawResult;

        if (q) {
          processedResult = rawResult.filter(article =>
            article.title && article.title.toLowerCase().includes(q.toLowerCase())
          );
        }
        if(pageSize !== undefined){
          return processedResult.slice(0, pageSize);
        }
        return processedResult;
      }
    }),
  }),
});

export const { useGetLocalArticlesQuery } = localApiInstance;
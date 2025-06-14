import type { Article } from './Article.ts';

export interface ApiResponse {
  status:string;
  articles:Article[]
}
import MainPage from '../Pages/MainPage.tsx';
import ErrorPage from '../Pages/ErrorPage.tsx';
import HotTopicPage from '../Pages/HotTopicPage.tsx';
import AboutNews from '../Pages/AboutNews.tsx';
import type { JSX } from 'react';

interface IRoute{
  path:string;
  element:JSX.Element;
}
export const navigateRoutes:IRoute[] = [
  {
    path: '/',
    element: <MainPage/>,
  },
  {
    path:"error",
    element:<ErrorPage/>,
  },
  {
    path:"/hottopicpage/:title",
    element:<HotTopicPage/>,
  },
  {
    path:"/aboutnews/:title",
    element:<AboutNews />,
  }
]

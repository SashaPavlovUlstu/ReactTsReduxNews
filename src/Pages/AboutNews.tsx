import Header from '../components/Header/Header.tsx';
import AboutNewsItem from '../components/AboutNewsItem/AboutNewsItem.tsx';
import Copyright from '../components/Copyright/Copyright.tsx';
import { localApiInstance } from '../store/reducers/NewsLocalReducer.ts';
import {  useParams } from 'react-router-dom';

const AboutNews = () => {
  const {title} = useParams();
  const decodedTitle = decodeURIComponent(title || '');
  const {data,error,isLoading} = localApiInstance.useGetLocalArticlesQuery({
    q: "",
  })
  const article = data?.find(
    a => a.title.trim().toLowerCase() === decodedTitle.trim().toLowerCase()
  );
  if(isLoading){
    return <div>Loading...</div>;
  }
  if(error){
    return <div>Error</div>;
  }

  return (
    <div>
      <Header showInputWrapper={false}/>
      <AboutNewsItem article={article}/>
      <Copyright/>
    </div>
  );
};

export default AboutNews;
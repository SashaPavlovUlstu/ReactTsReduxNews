import Copyright from '../components/Copyright/Copyright.tsx';
import Header from '../components/Header/Header.tsx';
import HotTopicItem from '../components/HotTopicItem/HotTopicItem.tsx';
import { useParams } from 'react-router-dom';
import { newsAPi } from '../store/reducers/NewsReducer.ts';

const HotTopicPage = () => {

  const {title} = useParams();
  const decodedTitle = decodeURIComponent(title || '');
  const { data: articlesData, isLoading ,error} = newsAPi.useGetTopHeadlinesQuery({ country: 'us' })

  // Находим статью с нужным заголовком
  const article = articlesData?.articles?.find(
    a => a.title.trim().toLowerCase() === decodedTitle.trim().toLowerCase()
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Article not found</div>;
  }
  console.log('Decoded title:', decodedTitle);
  console.log('Articles:', article);

  return (

    <div>
      <Header showInputWrapper={false}/>
      <HotTopicItem article={article}/>
      <Copyright/>
    </div>

  );
};

export default HotTopicPage;
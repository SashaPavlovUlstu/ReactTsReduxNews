import Container from '../Сontainer/Container.tsx';
import cs from "./HotTopicSection.module.scss"
import ArticleCard from '../ArticleCard/ArticleCard.tsx';
import ArticleText from '../ArticleText/ArticleText.tsx';
import { newsAPi } from '../../store/reducers/NewsReducer.ts';
import { useEffect, useMemo, useState } from 'react';
import type { Article } from '../../models/Article.ts';
const HotTopicSection = () => {
  const {data,error,isLoading} = newsAPi.useGetTopHeadlinesQuery({ country: 'us' });
  const [selectedArticle, setSelectedArticle] = useState<Article | undefined>(undefined);

  useEffect(()=>{
    if(data?.articles && data.articles.length > 0){
      const min = 1;
      const max = 10;
      const randNumber = Math.floor(Math.random()* (max  - min + 1) +min)
      const article = data?.articles?.[randNumber];
      setSelectedArticle(article);
    }
  },[data])
  useMemo(() => {

  },[selectedArticle]);
  if(error){
    return <div>error</div>
  }
  if(isLoading){
    return <div>loading...</div>
  }

  return (
    <Container >
      <h1 className={cs.mainTitle}>Hot Topics</h1>
      <div className={cs.hotTopicSection}>
        <div className={cs.leftPart}>
          <ArticleCard article={selectedArticle}/>
        </div>
        <div className={cs.rightPart}>
          <ArticleText article={selectedArticle} />
        </div>

      </div>

    </Container>
  );
};

export default HotTopicSection;
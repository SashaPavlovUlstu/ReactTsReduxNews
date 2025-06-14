import Container from '../Сontainer/Container.tsx';
import cs from "./NewsList.module.scss"
import NewsListItem from '../NewsListItem/NewsListItem.tsx';
import { type FC} from 'react';
import { localApiInstance } from '../../store/reducers/NewsLocalReducer.ts';

interface NewsListProps {
  debouncedSearchValue: string;
}
const NewsList:FC<NewsListProps> = ({debouncedSearchValue}) => {
  const queryToUse = debouncedSearchValue.trim() === '' ? 'tesla' : debouncedSearchValue;
  const {data,error,isLoading} = localApiInstance.useGetLocalArticlesQuery({
    q: queryToUse,
    pageSize: 8
  })

  if(error){
    return <div>error</div>
  }
  if(isLoading){
    return <div>loading...</div>
  }
  console.log(data)
  return (
    <Container>
      <h1 className={cs.newsTitle}>{queryToUse === 'tesla' ? 'Последние новости' : `Результаты поиска: "${debouncedSearchValue}"`}</h1>
      <div className={cs.newsGrid}>
        {data?.filter(item=> item?.urlToImage !== null && item.urlToImage !== undefined).map((item)=>{
          return (
            <NewsListItem key={item.title} article={item} />
          )
        })}

      </div>
    </Container>
  );
};

export default NewsList;
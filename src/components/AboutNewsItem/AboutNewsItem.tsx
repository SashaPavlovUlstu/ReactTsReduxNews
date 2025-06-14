import type { Article } from '../../models/Article.ts';
import type { FC } from 'react';
import cs from '../HotTopicItem/HotTopicItem.module.scss';
import Container from '../Сontainer/Container.tsx';
import altImage from '../../assets/altImage.jpg';

interface AboutNewsItemProps {
  article: Article | undefined;
}
const AboutNewsItem:FC<AboutNewsItemProps> = ({article}) => {
  console.log(article)
  const imageUrl = article?.urlToImage || altImage;
  const  handleImageError =(e:any) =>{
    e.currentTarget.src = altImage
  }
  return (
    <Container>
      <h1 className={cs.title}>{article?.title}</h1>
      <div className={cs.flex}>
        <img onError={handleImageError} className={cs.image} src={imageUrl} alt="" />
        <p>{article?.description}</p>
      </div>
    </Container>
  );
};

export default AboutNewsItem;
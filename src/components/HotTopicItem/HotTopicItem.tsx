import Container from '../Сontainer/Container.tsx';
import type { Article } from '../../models/Article.ts';
import type { FC } from 'react';
import cs from "./HotTopicItem.module.scss"
import altImage from '../../assets/altImage.jpg';
interface hotTopicItemProps {
  article: Article | undefined;
}
const HotTopicItem:FC<hotTopicItemProps> = ({article}) => {
  console.log(article)
  const imageUrl = article?.urlToImage || altImage;
  return (
    <Container>
      <h1 className={cs.title}>{article?.title}</h1>
      <div className={cs.flex}>
        <img className={cs.image} src={imageUrl} alt="" />
        <p>{article?.description}</p>
      </div>
    </Container>
  );
};

export default HotTopicItem;
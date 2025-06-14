import cs from './ArticleText.module.scss';
import type { Article } from '../../models/Article.ts';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
interface ArticleTextProps {
  article:Article | undefined;
}
const ArticleText:FC<ArticleTextProps> = ({article}) => {
  let firstWord = "";
  let restWords = ""
  if(article?.description){
    let words = article.description.split(" ")
    firstWord = words[0]+" "
    restWords = words.slice(1).join(' ')

  }
  return (
    <div className={cs.articleSection}>
      <p className={cs.paragraph}><span>{firstWord}</span>{restWords} <Link to={`/hottopicpage/${encodeURIComponent(article?.title ?? "")}`} className={cs.link} >
        read more
      </Link>
      </p>
    </div>
  );
};

export default ArticleText;
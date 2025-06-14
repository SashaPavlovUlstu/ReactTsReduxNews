import cs from './ArticleCard.module.scss';
import type { Article } from '../../models/Article.ts';
import type { FC } from 'react';
import altImage from "../../assets/altImage.jpg"
import { useMediaQuery } from 'react-responsive';
import { Link} from 'react-router-dom';
interface ArticleCardProps {
  article:Article | undefined;

}
const ArticleCard:FC<ArticleCardProps> = ({article}) => {
  const isDesktop = useMediaQuery({ maxWidth: 768 });
  const imageUrl = article?.urlToImage || altImage;
  const formattedDate = article?.publishedAt ? new Date(article.publishedAt).toLocaleDateString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }):"Date is not known";

  return (
    <div>
      {isDesktop ?
        <Link to={article && article?.title ?`/hottopicpage/${encodeURIComponent(article?.title)}`:"/error"}>
          <div className={cs.cardSection}>
            <img className={cs.image} src={imageUrl} alt={article?.title} />
            <div className={cs.textOverlay}>
              <h2 className={cs.title}>{article?.title}</h2>
              <div className={cs.spanWrapper}>
                <span className={cs.cardSpan}>{formattedDate}</span>
                <span className={cs.cardSpan}>{article?.author}</span>
              </div>
            </div>
          </div>
        </Link>

        :
        <div className={cs.cardSection}>
          <img className={cs.image} src={imageUrl} alt={article?.title} />
          <div className={cs.textOverlay}>
            <h2 className={cs.title}>{article?.title}</h2>
            <div className={cs.spanWrapper}>
              <span className={cs.cardSpan}>{formattedDate}</span>
              <span className={cs.cardSpan}>{article?.author}</span>
            </div>
          </div>
        </div>
      }
    </div>


  );
};

export default ArticleCard;
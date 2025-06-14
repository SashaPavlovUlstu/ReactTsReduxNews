import cs from "./NewsListItem.module.scss"
import type { Article } from '../../models/Article.ts';
import type { FC } from 'react';
import altImage from "../../assets/altImage.jpg"
import { Link } from 'react-router-dom';
interface NewsListItemProps {
  article: Article | undefined;
}
const NewsListItem:FC<NewsListItemProps> = ({article}) => {
  console.log(altImage)
  const formatArticleDate = (dateString: string | null | undefined): string => {
    if (!dateString) {
      return "Date is not known";
    }

    const formattedIsoString = dateString.replace(
      /^(\d{4})(\d{2})(\d{2})(T.*Z)$/,
      '$1-$2-$3$4'
    );

    const date = new Date(formattedIsoString);

    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }

    return "Invalid Date";
  };

  const formattedPublishedAt = formatArticleDate(article?.publishedAt);
  console.log(article)
  const  handleImageError =(e:any) =>{
    e.currentTarget.src = altImage
  }
  return (
    <div className={cs.card}>
      <Link to={`/aboutnews/${encodeURIComponent(article?.title ?? "")}`}>
        <img onError={handleImageError} className={cs.image} src={article?.urlToImage == null?altImage:article.urlToImage} alt="Not found" />
      </Link>

       <h1 className={cs.cardTitle}>{article?.title}</h1>
      <div className={cs.cardSpanDiv}>
        <span className={cs.cardSpan}>{formattedPublishedAt}</span>
        <span className={cs.cardSpan}>{article?.author || "Unknown author"}</span>
      </div>
    </div>
  );
};

export default NewsListItem;
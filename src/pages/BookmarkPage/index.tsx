import { Container } from 'styles/common/container';
import { ArticleGrid } from 'styles/common/article';
import ArticleCard from 'components/ArticleCard';
import { articles } from 'temp/articles';

const BookmarkPage = () => {

  return (
    <Container>
      <ArticleGrid>
        {articles.map((article, index) => (
          <ArticleCard 
            key = {article.news_id}
            content = {article.content}
            url = {article.url}
            news_id = {article.news_id}
            title = {article.title}
            media = {article.media}
            probability = {article.probability}/>
        ))} 
      </ArticleGrid>
    </Container>
  );
};

export default BookmarkPage;
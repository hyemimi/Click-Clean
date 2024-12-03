import { Container } from 'styles/common/container';
import { ArticleGrid } from 'styles/common/article';
import ArticleCard from 'components/ArticleCard';
import { articles } from 'temp/articles';

const BookmarkPage = () => {

  return (
    <Container>
      <ArticleGrid>
        {/* {articles.map((article, index) => (
          <ArticleCard 
            key = {article.id}
            body = {article.body}
            url = {article.url}
            id = {article.id}
            title = {article.title}
            media = {article.media}
            probability = {article.probability}/>
        ))}  */}
      </ArticleGrid>
    </Container>
  );
};

export default BookmarkPage;
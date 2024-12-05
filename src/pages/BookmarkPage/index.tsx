import { Container } from 'styles/common/container';
import { ArticleGrid } from 'styles/common/article';
import ArticleCard, { IArticleCardProps } from 'components/ArticleCard';
import { articles } from 'temp/articles';
import { useUserData } from 'context/UserDataProvider';
import { useQuery } from '@tanstack/react-query';
import { getScrapList } from 'apis/scrap';
import { useState } from 'react';

const BookmarkPage = () => {

  const { user } = useUserData();
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1); 

  const { data, isLoading } = useQuery({
    queryKey: ['getBookmarkList',{ user, page }], // page나 category가 변경될 때마다 queryFn 실행 
    queryFn: () => getScrapList({ page })
  });

  console.log(data);

  return (
    <Container>
      <ArticleGrid>
        {data?.map((article: IArticleCardProps, index: number) => (
          <ArticleCard 
            key = {article.id}
            body = {article.body}
            url = {article.url}
            id = {article.id}
            title = {article.title}
            media = {article.media}
            imageUrl= {article.imageUrl}
            summary={article.summary}
            probability = {article.probability}/>
        ))}
      </ArticleGrid>
    </Container>
  );
};

export default BookmarkPage;
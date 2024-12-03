// pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArticleCard, { IArticleCardProps } from 'components/ArticleCard';
import CategoryTab from 'components/CategoryTab';
import { Container } from 'styles/common/container';
import { ArticleGrid } from 'styles/common/article';
import { getArticleList } from 'apis/article';
import Pagination from 'components/Pagination';
import { useQuery } from '@tanstack/react-query';
import { articles } from 'temp/articles';

export const categories = ['경제', '연예', '정치', '사회', '세계', 'IT/과학', '생활문화'];

const HomePage: React.FC = () => {
  const [category, setCategory] = useState<string>('연예');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0); // 전체 페이지 수 상태
  
  /** 기사 데이터 fetching */
  // 기사 데이터 fetching
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getAllArticles',{ page,category }], // page나 category가 변경될 때마다 queryFn 실행 
    queryFn: () => getArticleList({ page, category })
  });
  
  const handleCategorySelect = (category: string) => {
    setCategory(category);
    setPage(1);
  };

  // useEffect로 totalPages를 업데이트
  useEffect(() => {
    console.log(data?.data?.news);
    if (data?.totalPages) {
      setTotalPages(data.totalPages); // API 응답에서 totalPages가 있으면 상태 업데이트
    }
  }, [data]); // data가 변경될 때마다 실행됨
  // useEffect(() => {
  //   console.log(process.env.REACT_APP_BASE_URL);
  //   client.get('/api/user').then((res) => console.log(res.data));
   
  // }, []);

  const handlePageChange = (selectedPage: { selected: number }) => {
    console.log(selectedPage.selected + 1);
    setPage(selectedPage.selected + 1);
  };

  return (
    <Container>
      <SearchBar placeholder="검색어를 입력하세요" />
      <RankText isTitle="true">조회수 급상승 기사</RankText>
      <RankText isTitle="false">최태원·노소영 이혼소송 대법원 간다…한숨 돌린 SK</RankText>
      <CategoryTab
        categories={categories}
        activeCategory={category}
        onCategorySelect={handleCategorySelect}
      />
      <ArticleGrid>
        
        {!isLoading ? data?.news?.map((article: IArticleCardProps, index: any) => (
          <ArticleCard 
            key = {article.news_id}
            content = {article.content}
            url = {article.url}
            news_id = {article.news_id}
            title = {article.title}
            media = {article.media}
            probability = {article.probability}
          />
        ))
          : <p>로딩중...</p>
        }
        
      </ArticleGrid>
      <Pagination pageCount={totalPages} onPageChange={handlePageChange}/>
    </Container>
  );
};

export default HomePage;

const SearchBar = styled.input`
  width: 100%;
  height: 30px;
  padding: 12px;
  font-size: 16px;
  background-color: rgba(217, 217, 217, 0.5);
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    padding: 4px;
    font-size: 14px;
  }
`;

interface IRankTextProps {
  isTitle?: string;
}

const RankText = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'isTitle' // isTitle을 DOM으로 전달하지 않음
})<IRankTextProps>`
  margin-left: 20px;
  color: ${({ isTitle }) => (isTitle === 'true' ? '#F24D4D' : 'black')};
  font-size: 12px;
`;

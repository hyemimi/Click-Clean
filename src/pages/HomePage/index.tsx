// pages/HomePage.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import ArticleCard from 'components/ArticleCard';
import CategoryTab from 'components/CategoryTab';
import { articles } from 'temp/articles';
import { FlexDiv } from 'styles/common/FlexDiv';
import { Container } from 'styles/common/container';
import { ArticleGrid } from 'styles/common/article';

const categories = ['경제', '연예', '정치', '사회', '세계', 'IT/과학', '생활문화'];

const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('경제');

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <Container>
      <SearchBar placeholder="검색어를 입력하세요" />
      <RankText isTitle={true}>조회수 급상승 기사</RankText>
      <RankText isTitle={false}>최태원·노소영 이혼소송 대법원 간다…한숨 돌린 SK</RankText>
      <CategoryTab
        categories={categories}
        activeCategory={activeCategory}
        onCategorySelect={handleCategorySelect}
      />
      <ArticleGrid>
        {articles.map((article, index) => (
          <ArticleCard 
            key = {article.news_id}
            content = {article.content}
            url = {article.url}
            news_id = {article.news_id}
            title = {article.title}
            media = {article.media}
            probability = {article.probability}
          />
        ))}
      </ArticleGrid>
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

const RankText = styled.span<({ isTitle?: boolean })>`
  margin-left: 20px;
  color:  ${({ isTitle }) => isTitle ? '#F24D4D' : 'black' };
  font-size: 12px;

`; 

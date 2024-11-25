// pages/HomePage.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import ArticleCard from 'components/ArticleCard';
import CategoryTab from 'components/CategoryTab';
import articleImage1 from 'assets/tempImage1.jpg';
import { FlexDiv } from 'styles/div/FlexDiv';

const categories = ['경제', '연예', '정치', '사회', '세계', 'IT/과학', '생활문화'];

const articles = [
  { news_id: 1, media: '동아일보', title: '영하 3도  입동 추위 절정 찍었다…내일 추위 풀려도 일교차 여전', content: '어쩌구 저쩌구 왕왕', probability: 76, url: articleImage1 }
  // Add more articles as needed
];

const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('경제');

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <Container>
      <SearchBar placeholder="검색어를 입력하세요" />
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

const Container = styled.div`
  padding: 16px 32px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 12px 12px;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  height: 30px;
  padding: 12px;
  font-size: 16px;
  background-color: rgba(217, 217, 217, 0.5);
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    padding: 4px;
    font-size: 14px;
  }
`;

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

// pages/HomePage.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import ArticleCard from 'components/ArticleCard';
import CategoryTab from 'components/CategoryTab';
import articleImage1 from 'assets/tempImage1.jpg';

const categories = ['경제', '연예', '정치', '사회', '세계', 'IT/과학', '생활문화'];

const articles = [
  { title: '영하 3도 \'입동 추위\' 절정 찍었다…내일 추위 풀려도 일교차 여전', content: 'Content of Article 1', credibility: 76, image: articleImage1 },
  { title: 'Article 2', content: 'Content of Article 2', credibility: 95 },
  { title: 'Article 3', content: 'Content of Article 3', credibility: 50 },
  { title: 'Article 3', content: 'Content of Article 3', credibility: 52 },
  { title: 'Article 3', content: 'Content of Article 3', credibility: 70 },
  { title: 'Article 3', content: 'Content of Article 3', credibility: 40 },
  { title: 'Article 3', content: 'Content of Article 3', credibility: 93 }
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
            image={article.image}
            key={index}
            title={article.title}
            content={article.content}
            credibility={article.credibility}
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
    padding: 16px;
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
    padding: 10px;
    font-size: 14px;
  }
`;

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
`;
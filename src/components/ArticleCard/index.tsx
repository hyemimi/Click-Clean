import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Badge } from 'styles/common/badge';
export interface IArticleCardProps {
    content: string,
    url?: string
    news_id: number,
		title: string,
		media: string,
		probability: number,
}

// Component
const ArticleCard: React.FC<IArticleCardProps> = ({ 
  content,
  url,
  news_id,
  title,
  media,
  probability }) => {

  const navigate = useNavigate();
  const ArticlePageHandler = () => {
    navigate(`/article/${news_id}`);
  };

  return (
    <Card onClick={ArticlePageHandler}>
      <Badge probability={probability}>유사도 {probability}%</Badge>
      <Thumbnail image={url}/>
      <Content>
        <Title>{ title.length >= 50 ? title.slice(0,50) + '...' : title }</Title>
        <Description>{ title.length >= 80 ? title.slice(0,80) + '...' : title }</Description>
      </Content>
    </Card>
  );
};

// Styled Components
const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }


`;
const Thumbnail = styled.div<{ image ?: string }>`
  width: 150px;
  height: 100px;
  background-size: cover;
  background-color: #e0e0e0;
  background-image: ${({ image }) => image ? `url(${image})` : 'none' };
  background-position: center;
  margin-right: 16px;
  border-radius: 4px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 0.8rem;
  font-weight: bold;
`;

const Description = styled.p`
  margin: 4px 0 0;
  font-size: 0.6rem;
  color: #666;
`;

export default ArticleCard;

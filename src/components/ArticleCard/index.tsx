import { postScrap } from 'apis/scrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Badge } from 'styles/common/badge';
import ScrapIC from 'assets/nonbookmarkIC.png';
import Logo from '../../assets/logo.png';

export interface IArticleCardProps {
    body: string,
    url?: string
    id: number,
		title: string,
		media: string,
		probability: number,
    imageUrl: string,
    summary: string,
    createdAt: string
}

// Component
const ArticleCard: React.FC<IArticleCardProps> = ({ 
  body,
  url,
  id,
  title,
  media,
  imageUrl,
  probability,
  summary,
  createdAt
}) => {

  const navigate = useNavigate();
  const ArticlePageHandler = () => {
    navigate(`/article/${id}`);
  };

  return (
    <Card onClick={ArticlePageHandler}>
      <Badge probability={probability}>유사도 {probability}%</Badge>
      {imageUrl && <Thumbnail image={imageUrl}/>}
      <Content>
        <Title>{ title.length >= 50 ? title.slice(0,50) + '...' : title }</Title>
        <Description>{ summary.length >= 80 ? summary.slice(0,80) + '...' : title }</Description>
        <DateText>{new Date(createdAt).toLocaleString()}</DateText>
      </Content>
    </Card>
  );
};

// Styled Components
const Card = styled.div`
  
  display: flex;
  align-items: center;
  padding: 10px;
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
  background-image: ${({ image }) => image ? `url(${image})` : 'none'};
  background-position: center;
  margin-right: 16px;
  border-radius: 4px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .img {
    justify-content: right;
  }
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

const DateText = styled.p`

  font-weight: regular;
  font-size: 0.6rem;
  color: gray;
  text-align: right;
`;

export default ArticleCard;

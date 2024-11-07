import React from 'react';
import styled from 'styled-components';

interface IArticleCardProps {
    title: string,
    content: string,
    credibility: number
    image?: string
}

// Component
const ArticleCard: React.FC<IArticleCardProps> = ({ title, content, credibility,image }) => {
  return (
    <Card>
      <Badge credibility={credibility}>유사도 {credibility}%</Badge>
      <Thumbnail image={image}/>
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

const Badge = styled.div<{ credibility : number }>`
  position: absolute;
  top: -10px;
  left: -10px;
  background-color: ${({ credibility }) => credibility >= 80 ? '#A0D5F6' : credibility >= 50 ? '#EFD950' : '#F66161' };
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 12px;
`;

export default ArticleCard;

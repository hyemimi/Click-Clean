import { useQuery } from '@tanstack/react-query';
import { getArticleDetail } from 'apis/article';
import RateSection from 'components/RateSection';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Badge } from 'styles/common/badge';
import ScrapIC from 'assets/nonbookmarkIC.png';
import { postScrap } from 'apis/scrap';
import CommentsSection from 'components/CommentsSection';

const ArticlePage: React.FC = () => {

  const { id } = useParams();
  const idNum = id ? Number(id) : undefined;

  const { data, isLoading } = useQuery({
    queryKey: ['getArticleDetail', { idNum }],
    queryFn: () => getArticleDetail({ id: idNum }),
    enabled: !!idNum
  });

  const ScrapHandler = async () => {
    const res = await postScrap({ id: idNum, value: true }).then((res) => console.log(res));
  };

  return (
    <ArticleContainer>
      {!isLoading &&  
      <>
        <ArticleBadge probability={data?.data?.probability}>유사도 {data?.data?.probability}%</ArticleBadge>
        <BookmarkDiv>
          <img src={ScrapIC} width={16} height={18} onClick={ScrapHandler}/>
        </BookmarkDiv>
        <Tag>{data?.data?.category}</Tag>
        <Title>{data?.data?.title}</Title>
        <MetaInfo>
          <span>{data?.data?.media}</span>
          <span>{data?.data?.author}</span>
        </MetaInfo>
        <Content dangerouslySetInnerHTML={{ __html: data?.data?.body }} />
        <Footer>
          원문 보기: <a href={data?.data?.url} target="_blank" rel="noopener noreferrer">{data?.data?.url}</a>
        </Footer>
        <GrayHr />
        {idNum && <RateSection id={idNum} />}
        {idNum && <CommentsSection id={idNum} />}
      </>
      }
     
    </ArticleContainer>
  );
   
};

export default ArticlePage;

const ArticleContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: relative;
  margin-top: 30px;
`;

const Tag = styled.span`
    font-size: 1.0rem;
    color: #007bff
`;
const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 16px;
  margin-top :0;
`;

const MetaInfo = styled.div`
  line-height: 1.6;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 16px;

  & > span {
    margin-right: 8px;
  }
`;

const Content = styled.div`
  font-size: 1rem;
  color: #333;

  img {
    margin: 0 auto;
    display: block;
    max-width: 100%;
    border-radius: 8px;
  }

  p {
    margin-bottom: 12px;
  }
`;

const GrayHr = styled.hr`
  background-color : rgba(0, 0, 0, 0.6);
`;
const Footer = styled.div`
  margin-top: 20px;
  font-size: 0.85rem;
  color: #888;

  a {
    color: #0078d4;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ArticleBadge = styled(Badge)`
  position: absolute;
  top: -15px;
  left: 10px;
  

`;

const BookmarkDiv = styled.div`
  text-align: right;
  height: 10px;
`;

import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Badge } from 'styles/badge';

const ArticlePage: React.FC = () => {

  const { news_id } = useParams();

  const codeht = {
    title: '[단독]경찰, 전동킥보드 전용면허 재추진…“세계최초 시도',
    raw_contents: '<article class=\'go_trans _article_content\' id=\'dic_area\'>\n<span class=\'end_photo_org\'><div class=\'nbd_im_w _LAZY_LOADING_WRAP\'>\n<div class=\'nbd_a _LAZY_LOADING_ERROR_HIDE\' id=\'img_a1\'>\n<img alt=\'\' class=\'_LAZY_LOADING _LAZY_LOADING_INIT_HIDE\' id=\'img1\' src=\'https://imgnews.pstatic.net/image/005/2024/11/18/2024111821022558930_1731931345_0020742612_20241118210508449.jpg?type=w860\'>\n</img></div>\n</div></span><br/><br/>경찰청이 전동킥보드 등 개인형 이동장치(PM) 전용 운전면허 신설을 재추진한다. 전용 면허 신설이 보행자 안전을 위협하는 ‘킥라니’(킥보드+고라니)를 방지하는 계기가 될지 관심이 쏠린다.<br/><br/>경찰청은 18일 PM 전용 면허 신설 방침을 정하고 구체적인 면허 취득 방식에 대한 검토를 진행 중인 것으로 확인됐다. PM 전용 면허 도입 필요성은 과거 PM업계와 정치권 등을 중심으로 꾸준히 제기돼 왔다. 경찰청도 2021, 2023년 두 차례에 걸쳐 경찰청 산하 도로교통공단에 연구용역을 의뢰하는 등 제도 개선을 준비해 왔다.<br/><br/>경찰이 PM 전용 면허를 재추진하는 이유는 현재 규제가 현실에 맞지 않는다는 지적에 따른 것이다. 지금은 제2종 원동기장치자전거 면허 또는 그 이상(제2종 소형·보통면허, 제1종 보통면허 등)의 운전면허 소지자만 PM을 이용할 수 있다. 다만 PM은 원동기와 속도부터 구조까지 완전히 다른 이동수단인데 자격 요건으로 운전면허를 제시하는 게 적절치 않다는 의견이 많았다.<br/><span class=\'end_photo_org\'><div class=\'nbd_im_w _LAZY_LOADING_WRAP\'>\n<div class=\'nbd_a _LAZY_LOADING_ERROR_HIDE\' id=\'img_a2\'>\n<img alt=\'\' class=\'_LAZY_LOADING _LAZY_LOADING_INIT_HIDE\' id=\'img2\' src=\'https://imgnews.pstatic.net/image/005/2024/11/18/2024111821041658931_1731931456_0020742612_20241118210508452.jpg?type=w860\'>\n</img></div>\n</div></span><br/><br/>나이 제한 때문에 운전면허를 취득할 수 없는 미성년자의 만연한 ‘무면허 운전’ 문제도 PM 전용 면허 도입을 검토하게 된 배경으로 꼽힌다. 도로교통공단에 따르면 지난해 PM 사고 2389건 중 20세 이하 청소년 운전자 사고는 1077건으로 가장 많은 비중(45.1%)을 차지했다.<br/><br/>경찰청은 구체적인 PM 전용 면허 취득 방식을 놓고 고심 중이다. 현 시점에서는 세 가지 안이 거론된다. 학과시험(필기시험)만 보는 것과 학과시험·기능시험(실습시험)을 모두 보는 것, 온라인 교육만 이수하면 면허를 부여하는 방안 등이다. PM 전용 면허를 취득할 수 있는 최소 연령도 새롭게 정해야 할 것으로 보인다.<br/><br/>경찰청 관계자는 “연말까지 설문조사 및 유관 기관·단체 협의를 통해 늦어도 내년 1월까지 경찰청 차원에서 생각하는 가장 합리적인 안을 도출하려 한다”고 말했다. 이미 22대 국회에 관련 법 개정안이 발의된 만큼 국회 법안 심사 과정에서 논의가 본격 진행될 전망이다.<br/><br/>세계적으로 PM 전용 면허를 별도로 마련한 국가는 없다. 대부분 국가는 PM 관련 면허 및 자격증이 아예 없고, 국내처럼 운전면허 이상의 자격을 요구하는 곳이 일부 있다. 싱가포르는 간단한 이론시험을 통해 ‘합격증’을 받은 사람만 PM을 이용할 수 있도록 2022년부터 의무화했지만 정식 면허 절차 내에서 관리하는 것과는 차이가 있다는 게 경찰청의 설명이다.\n\t\t</article>',
    url: 'https://n.news.naver.com/article/005/0001739585?ntype=RANKING',
    reporter: '신재희',
    media: '국민일보',
    date: '2024.11.18. 오후 9:05',
    tag: '사회' ,
    probability: 70
  };

  const { title, raw_contents, url, reporter, media, date, tag, probability } = codeht;

  return (
    <ArticleContainer>
      <ArticleBadge probability={probability}>유사도 {probability}%</ArticleBadge>
      <Tag>{tag}</Tag>
      <Title>{title}</Title>
      <MetaInfo>
        <span>{media}</span>
        <span>{reporter}</span>
        <span>{date}</span>
      </MetaInfo>
      <Content dangerouslySetInnerHTML={{ __html: raw_contents }} />
      <Footer>
        원문 보기: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
      </Footer>
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
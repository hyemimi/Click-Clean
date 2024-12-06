// pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import ArticleCard, { IArticleCardProps } from 'components/ArticleCard';
import CategoryTab from 'components/CategoryTab';
import { Container } from 'styles/common/container';
import { ArticleGrid } from 'styles/common/article';
import { getArticleList, getSearchingList } from 'apis/article';
import Pagination from 'components/Pagination';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { getUserInfo } from 'apis/user';
import { useUserData } from 'context/UserDataProvider';
import { Navigate, useNavigate } from 'react-router-dom';
import { getRanking } from 'apis/rank';

export const categories = ['경제', '정치', '사회', '세계', 'IT/과학', '생활/문화'];

const HomePage: React.FC = () => {
  const [category, setCategory] = useState('경제');
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0); // 전체 페이지 수 상태
  const [input, setInput] = useState('');
  const [keyword, setKeyword] = useState('');
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [isLogin,setIsLogin] = useState(false);
  const [currentRank, setCurrentRank] = useState(0); 
  const [isFadingIn, setIsFadingIn] = useState(true);

  const cookies = new Cookies();
 
  const navigate = useNavigate();
  const { updateUserInfo, user } = useUserData();
 
  // 기사 데이터 fetching (카테고리 기반)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getAllArticles',{ page, category }], // page나 category가 변경될 때마다 queryFn 실행 
    queryFn: () => getArticleList({ page, category }),
    enabled: !isSearchActive,
    staleTime: 3 * 60 * 60 * 1000,
    refetchInterval: 3 * 60 * 60 * 1000
  });

  // 기사 데이터 fetching (검색어 기반)
  const { data: searchingData, isLoading: isSearchingLoading } = useQuery({
    queryKey: ['getSearchingList',{ page, keyword }], // page나 category가 변경될 때마다 queryFn 실행 
    queryFn: () => getSearchingList({ page, keyword }),
    enabled: isSearchActive
  });

  // 유저 데이터 fetching
  const { data: userData, isLoading: isUserLoading } = useQuery({
    queryKey: ['userData',{ cookies }], // page나 category가 변경될 때마다 queryFn 실행 
    queryFn: () => getUserInfo(),
    enabled: isLogin
  });

  // 실시간 조회수 fetching
  const { data: rankingData } = useQuery({
    // 3시간마다 fetching 가능해야 함
    queryKey: ['rankingData'], // page나 category가 변경될 때마다 queryFn 실행 
    queryFn: () => getRanking(),
    refetchInterval: 3 * 60 * 60 * 1000, // 3시간마다 자동으로 refetch
    staleTime: 3 * 60 * 60 * 1000 // 3시간 동안 캐시된 데이터 사용 (3시간이 지나기 전까지는 refetch하지 않음)
    // 캐시된 데이터가 유지되는 시간 (3시간 동안)
  });

  // 유저 데이터 업데이트 (context)
  
  const handleCategorySelect = (category: string) => {
    setIsSearchActive(false);
    setCategory(category);
  };

  // useEffect로 totalPages를 업데이트
  useEffect(() => {
 
    if (data?.data?.news) {
      setArticles(data?.data?.news);
      setTotalPages(data?.data?.totalPages);
      setPage(data?.data?.page);
    }
    else {
      setArticles([]);
      setTotalPages(1);
    }
   
  }, [data]); // data가 변경될 때마다 실행됨

  useEffect(() => {
    if (searchingData) {
      setArticles(searchingData?.data);
      setTotalPages(searchingData?.totalPages);
      console.log(articles);
    } else {
      setArticles([]);
      setTotalPages(1);
    }
    setIsSearchActive(false);
    setKeyword('');
   
  },[searchingData]);

  useEffect(() => { 
    const access_token = cookies.get('access_token');
    if (access_token) {
      setIsLogin(true);
    }

  },[cookies]);

  useEffect(() => {
    
    if (userData) {

      if (userData?.data.email === '') {
        // 이메일 입력
        navigate('/user/info');
      }
      updateUserInfo(userData.data);
    }
  
  }, [userData]);

  useEffect(() => {

    console.log(rankingData?.data);
  }, [rankingData]);

  // 1초마다 순위를 바꾸는 로직
  useEffect(() => {

    if (rankingData) {
      const interval = setInterval(() => {
        setIsFadingIn(false);
        setTimeout(() => {
          setCurrentRank((prevIndex) => (prevIndex + 1) % (rankingData.data.length)); // 다음 순위
          setIsFadingIn(true); // 페이드 인
        }, 1200); // 페이드 아웃 애니메이션 시간과 동일
      }, 5000); // 5초마다 순위 전환
  
      return () => clearInterval(interval); // 컴포넌트 언마운트 시 클리어
    }
    
  }, [rankingData]);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setPage(selectedPage.selected + 1);
  };

  // Enter 키 이벤트 핸들러
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      setPage(1);
      setArticles([]);
      setIsSearchActive(true); // 검색 활성화
      setKeyword(input);
      setInput('');
    }
  };

  const navigateArticlePage = (id:number) => {
    navigate(`/article/${id}`);
  };
  
  return (
    <Container>
      <SearchBar placeholder="검색어를 입력하세요" 
        type="text"
        value={input}
        onKeyDown={handleKeyPress} // Enter 키 이벤트
        onChange={(e) => setInput(e.currentTarget.value)} />
      <RankText isTitle="false" isRank={false}>조회수 급상승 기사</RankText>
      <RankText onClick={() => navigateArticlePage(rankingData?.data[currentRank]?.id)} 
        isRank={isFadingIn} isTitle="true">{rankingData && `${currentRank + 1}.  ` + rankingData.data[currentRank]?.title}</RankText>
      <CategoryTab
        categories={categories}
        activeCategory={category}
        onCategorySelect={handleCategorySelect}
      />
      <ArticleGrid>
        
        {
          articles ? articles.map((article: IArticleCardProps, index: any) => (
            <ArticleCard 
              key = {article.id}
              body = {article.body}
              url = {article.url}
              id = {article.id}
              title = {article.title}
              media = {article.media}
              probability = {article.probability}
              imageUrl = {article.imageUrl}
              summary = {article.summary}
              createdAt = {article.createdAt}
            />
          )) : <LoadingText> 검색 결과가 없습니다.</LoadingText>
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

const LoadingText = styled.p`
  align-items: center;
  font-size: 24px;
  text-align: center;
  top: 50%;
  left: 50%;
   transform: translate(-50%, -50%);
   position: absolute;
`;

interface IRankTextProps {
  fadeIn ?: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const RankText = styled.span<{ isRank : boolean, isTitle: string }>`
  cursor: pointer;
  margin-left: 20px;
  color: ${({ isTitle }) => (isTitle === 'true' ? '#F24D4D' : 'black')};
  font-size: 12px;

  ${({ isRank, isTitle }) =>
    isTitle && 
    css`
      animation: ${isRank ? fadeIn : fadeOut} 1.2s ease-in-out;
    `}

`;

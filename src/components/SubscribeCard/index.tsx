import styled from 'styled-components';
import Logo from 'assets/logo.png';
import { Button } from 'styles/common/button';
import { categories } from 'pages/HomePage';
import { useState } from 'react';
import { postSubscribe } from 'apis/subscribe';

const media = ['JTBC', 'MBC', 'SBS', 'KBS', 'YTN'];

const SubscribeCard = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedMedia, setSelectedMedia] = useState<string>('');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value); // 선택된 값으로 상태 업데이트
  };

  const handleMediaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMedia(event.target.value); // 선택된 값으로 상태 업데이트
  };

  const subsribleHandler = () => {

    if (!selectedCategory || !selectedMedia) {
      window.alert('카테고리와 언론사를 선택해주세요');

      return;
    }
    postSubscribe({ category: selectedCategory, media: '연합뉴스TV' }).then((res) => {
      window.alert('성공적으로 구독되었습니다!');
    });

  };

  return (
    <SubscribeBox>
      <img src={Logo} width={110} height={100}/>
      <Title>Click Clean</Title>
      <Description>원하는 카테고리를 구독하면 정기적으로 기사를 받아볼 수 있어요</Description>
      <DropdownContainer>
        {}
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="" disabled>category</option>
          {categories.map((ele) => {
            return (
              <option key={ele} value={ele}>{ele}</option>
            );
          }
          )}
        </select>
        <select value={selectedMedia} onChange={handleMediaChange}>
          <option value="" disabled>media</option>
          {media.map((ele) => {
            return (
              <option key={ele} value={ele}>{ele}</option>
            );
          })}
        </select>
      </DropdownContainer>
      <Button onClick={subsribleHandler}>
        구독
      </Button>
    </SubscribeBox>
  );
};

export default SubscribeCard;

const SubscribeBox = styled.div`
    align-items: center;
    text-align: center;
    border : 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding : 40px;
`;

const Title = styled.h1`
    font-size: 2rem;
    color: #0075F0;
    margin-bottom: 0px;
`;

const Description = styled.p`
    font-size: 1rem;
    font-weight: bold;
`;

const DropdownContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;

  select {
    padding: 8px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    font-size: 14px;
  }
`;

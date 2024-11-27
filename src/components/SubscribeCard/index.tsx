import styled from 'styled-components';
import Logo from 'assets/logo.png';

const SubscribeCard = () => {

  return (
    <SubscribeBox>
      <img src={Logo} width={110} height={100}/>
      <Title>Click Clean</Title>
      <Description>원하는 카테고리를 구독하면 정기적으로 기사를 받아볼 수 있어요</Description>
      <DropdownContainer>
        <select>
          <option value="category">category</option>
          <option value="economy">경제</option>
          <option value="">연예</option>
          <option value="politics">정치</option>
          <option value="news">사회</option>
          <option value="news">세계</option>
          <option value="news">IT/과학</option>
          <option value="news">생활문화</option>
        </select>
        <select>
          <option value="media">media</option>
          <option value="email">동아일보</option>
          <option value="rss">연합뉴스TV</option>
        </select>
      </DropdownContainer>
      <Button>
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

const Button = styled.button`
  background-color: rgba(82, 159, 242, 1);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
  cursor: pointer;
  width : 60px;
  height: 30px;

  &:hover {
    background-color:  rgba(82, 159, 242, 0.8);
  }
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

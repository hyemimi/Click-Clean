import styled from 'styled-components';
import Logo from 'assets/logo.png';

interface IRateSectionProps {
    news_id: number | undefined;
}

const RateSection:React.FC = () => {

  return (
    <RateDiv>
      <img src={Logo} width={80} height={80} />
      <Header>기사의 신뢰도를 평가해주세요!</Header>
      <RatingButtons>
        <Button isPositive>신뢰할 수 있어요</Button>
        <Button>신뢰할 수 없어요</Button>
      </RatingButtons>
    </RateDiv>
  );
};

export default RateSection;

const RateDiv = styled.div`

    margin-top: 30px;
    gap: 2px;
    text-align: center;
`;

const Header = styled.p`
  color: #333;
`;

const RatingButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Button = styled.button<{ isPositive?: boolean }>`
  background-color: ${(props) => (props.isPositive ? '#d4f3d6' : '#f8d7da')};
  border: ${(props) => (props.isPositive ? '1px solid #28a745' : '1px solid #dc3545')};
  color: black;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isPositive ? '#c3e6cb' : '#f5c6cb')};
  }
`;

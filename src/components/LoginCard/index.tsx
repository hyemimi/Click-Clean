import styled from 'styled-components';
import Logo from 'assets/logo.png';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginCard = () => {

  const navigate = useNavigate();

  const loginHandler = () => {
    const link = `https://kauth.kakao.com/oauth/authorize?redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&response_type=code`;
    window.location.href = link;
    //await axios.get('http://13.124.172.225:3001/auth/kakao/callback').then( (res) => console.log(res.data) );
    //const code = new URL(window.location.href).searchParams.get('code'); // 카카오 로그인 인가코드
    
  };

  return (
    <LoginDiv>
      <img src={Logo} width={110} height={100} />
      <Title>Click Clean</Title>
      <Description>
        낚시성 기사로 인한 시간 낭비는 그만 <br />
        이제 신뢰할 수 있는 기사를 조회하고 구독할 수 있어요
      </Description>
      <KakaoLoginButton onClick={loginHandler}>
        <LoginText>카카오 로그인</LoginText>
      </KakaoLoginButton>
    </LoginDiv>
  );
};

export default LoginCard;

const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;

const Title = styled.h1`
    font-size: 2rem;
    color: #0075F0;
    margin-bottom: 0px;
`;

const Description = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0px;
    text-align: center;
`;

const KakaoLoginButton = styled.div`
   width: 300px;
   height: 45px; 
   background-color: #FEE500; 
   border-radius: 5px; 
   display: flex; 
   align-items: center; 
   justify-content: center; 
   cursor: pointer;
   margin-top: 10px;
`;

const LoginText = styled.span`
  font-size: 16px;
  color: #000; 
  font-weight: bold;
`;

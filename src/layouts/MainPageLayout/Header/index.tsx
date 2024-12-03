import styled from 'styled-components';
import Logo from 'assets/logo.png';
import UserIcon from 'assets/userIcon.png';
import BookmarkIcon from 'assets/bookmarkIC.png';
import { FlexDiv } from 'styles/common/FlexDiv';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { client } from 'apis/client';

const NavHeader = () => {
  const navigate = useNavigate();
  const HomePagehandler = () => {
    navigate('/');
  };
  const BookmarkPagehandler = () => {
    navigate('/bookmark');
  };
  const SubscribePageHandler = () => {
    navigate('/subscribe');
  };
  const LoginPageHandler = () => {
    navigate('/login');
  };
  const LogoutPageHandler = () => {
  
    client.post('/auth/logout')
      .then((res) => {if (res.status === 201) {
        navigate('/');
      } }).catch((err) => console.log(err)) ;
  };

  return (
    <>
      <Header >
        <HeaderItemDiv onClick={HomePagehandler}>
          <img src={Logo} width={20} height={20} />
          <LogoName>ClickClean</LogoName>
        </HeaderItemDiv>
        <HeaderItemDiv>
          <img src={UserIcon} width={30} height={30} />
          <TextButton onClick={LoginPageHandler}>로그인</TextButton>
          <TextButton onClick={LogoutPageHandler}>로그아웃</TextButton>
          <TextButton onClick={SubscribePageHandler}>구독하기</TextButton>
          <img src={BookmarkIcon} width={20} height={20} onClick={BookmarkPagehandler}/>
        </HeaderItemDiv>
 
      </Header>
    </>
  );
};

export default NavHeader;

const Header = styled.div`
    width: 100%;
    color: #FFFFFF;
    display: flex;                    
    justify-content: space-between;
    height: 44px;
    font-size: 24px ;
    background-color: #1D222D;

    @media (max-width: 768px) {
    justify-content: space-around
  }
`;

const LogoName = styled.h1`
    font-size: 20px;
`;

const TextButton = styled.p`
    font-size: 12px;
    cursor: pointer;
`;

const HeaderItemDiv = styled(FlexDiv)`
  padding: 2px 12px;
  cursor: pointer;
`;
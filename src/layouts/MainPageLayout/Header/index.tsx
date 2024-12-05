import styled from 'styled-components';
import Logo from 'assets/logo.png';
import UserIcon from 'assets/userIcon.png';
import { FlexDiv } from 'styles/common/FlexDiv';
import { useNavigate } from 'react-router-dom';
import { postLogout } from 'apis/auth';
import { useUserData } from 'context/UserDataProvider';
import { Cookies } from 'react-cookie';

const NavHeader = () => {
  const navigate = useNavigate();
  const { user, updateUserInfo } = useUserData();
  const HomePagehandler = () => {
    navigate('/');
  };
  const UserPageHandler = () => {
    navigate('user/info');
  };
  const BookmarkPageHandler = () => {
    navigate('/bookmark');
  };
  const SubscribePageHandler = () => {
    navigate('/subscribe');
  };
  const LoginPageHandler = () => {
    navigate('/login');
  };
  const LogoutPageHandler = async () => {
    console.log('로그아웃 버튼 눌렀습니다');
    const logout = await postLogout();
    console.log(logout);

    if (logout) {
      updateUserInfo(null);
      navigate('/');
      const cookie = new Cookies();
      cookie.remove('access_token');
      cookie.remove('refresh_token');

      // context API 유저 관련 내용 지워야 함
      console.log('로그아웃되었습니다');
    }
    
  };

  return (
    <>
      <Header >
        <HeaderItemDiv onClick={HomePagehandler}>
          <img src={Logo} width={20} height={20} />
          <LogoName>ClickClean</LogoName>
        </HeaderItemDiv>
        <HeaderItemDiv>
          {user && <img src={UserIcon} width={30} height={30} onClick={UserPageHandler}/>}
          {user && <TextButton onClick={ UserPageHandler}> {user?.username}님 |</TextButton>}
          {!user && <TextButton onClick={LoginPageHandler}>로그인</TextButton>}
          {user && <TextButton onClick={LogoutPageHandler}>로그아웃 |</TextButton>}
          {user && <TextButton onClick={SubscribePageHandler}>구독 |</TextButton>}
          {user && <TextButton onClick={BookmarkPageHandler}>북마크</TextButton>}
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
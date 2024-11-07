import styled from 'styled-components';
import Logo from 'assets/logo.png';
import UserIcon from 'assets/userIcon.png';
import { FlexDiv } from 'styles/div/FlexDiv';

const NavHeader = () => {

  return (
    <>
      <Header>
        <FlexDiv>
          <img src={Logo} width={20} height={20} />
          <LogoName>ClickClean</LogoName>
        </FlexDiv>
        <FlexDiv>
          <img src={UserIcon} width={30} height={30} />
          <LoginTextButton>로그인</LoginTextButton>
        </FlexDiv>
 
      </Header>
    </>
  );
};

export default NavHeader;

const Header = styled.div`
    padding: 2px 18px;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    height: 44px;
    font-size: 24px;
    background-color: #1D222D;
`;

const LogoName = styled.h1`
    font-size: 20px;
`;

const LoginTextButton = styled.p`
    font-size: 12px;
`;
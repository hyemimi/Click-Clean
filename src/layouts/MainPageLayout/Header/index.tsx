import styled from 'styled-components';
import Logo from 'assets/logo.png';
import UserIcon from 'assets/userIcon.png';
import { FlexDiv } from 'styles/common/FlexDiv';

const NavHeader = () => {

  return (
    <>
      <Header>
        <HeaderItemDiv>
          <img src={Logo} width={20} height={20} />
          <LogoName>ClickClean</LogoName>
        </HeaderItemDiv>
        <HeaderItemDiv>
          <img src={UserIcon} width={30} height={30} />
          <LoginTextButton>로그인</LoginTextButton>
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

const LoginTextButton = styled.p`
    font-size: 12px;
`;

const HeaderItemDiv = styled(FlexDiv)`
  padding: 2px 12px;
`;
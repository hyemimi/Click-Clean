import LoginCard from 'components/LoginCard';
import { Container } from 'styles/common/container';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginCard />
    </LoginPageContainer>
  );
};

export default LoginPage;

export const LoginPageContainer = styled(Container)`

  display: flex;
  flex-direction: column; 
  align-items: center;    
  justify-content: center; 
  height: calc(100vh - 44px); 
  padding: 0px;
`;
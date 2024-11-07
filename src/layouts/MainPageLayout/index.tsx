import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavHeader from 'layouts/MainPageLayout/Header';

const MainPageLayout = () => {

  return (
    <Container>
      <NavHeader />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </Container>
   
  );
};
  
export default MainPageLayout;

const Container = styled.div`
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;
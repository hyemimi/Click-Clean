import SubscribeCard from 'components/SubscribeCard';
import { Container } from 'styles/common/container';
import styled from 'styled-components';

const SubscribePage = () => {

  return (
    <SubscribeContainer>
      <SubscribeCard />
    </SubscribeContainer>
  );
};

export default SubscribePage;

const SubscribeContainer = styled(Container)`

    
  display: flex;
  flex-direction: column; 
  align-items: center;    
  justify-content: center; 
  height: calc(100vh - 44px);  
`;
import SubscribeCard from 'components/SubscribeCard';
import { Container } from 'styles/common/container';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useUserData } from 'context/UserDataProvider';
import { Button } from 'styles/common/button';
import { patchUserInfo } from 'apis/user';

const UserInfoPage = () => {
    
  const [inputValue, setInputValue] = useState('');
  const { user } = useUserData();
  const { username, email } = user; 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (email !== '') {
      setInputValue(email);
    }
  }, []);

  const handleSaveHandler = () => {
    // 유저 정보 수정
    patchUserInfo({ username, email });
  };

  return (
    <UserInfoContainer>
      <UserInfoBox>
        <p> 구독 서비스를 위해서 email 정보를 입력해주세요.</p>
        
        <InputWrapper>
          <Label>
            email
          </Label>
          <InputField value={inputValue} onChange={handleInputChange} />
        </InputWrapper>
        <Button onClick={handleSaveHandler}>저장</Button>
      </UserInfoBox>
    </UserInfoContainer>
  );
};

export default UserInfoPage;

const UserInfoContainer = styled(Container)`

  display: flex;
  flex-direction: column; 
  align-items: center;    
  justify-content: center; 
  height: calc(100vh - 44px);  
  padding: 0px;
`;

const UserInfoBox = styled.div`
    align-items: center;
    text-align: center;
    border : 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding : 40px;
`;

const InputWrapper = styled.div`
  padding: 20px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const InputField = styled.input`
  padding: 5px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;
import SubscribeCard from 'components/SubscribeCard';
import { Container } from 'styles/common/container';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useUserData } from 'context/UserDataProvider';
import { Button } from 'styles/common/button';
import { getUserInfo, patchUserInfo } from 'apis/user';
import { Cookies } from 'react-cookie';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const UserInfoPage = () => {
    
  const [inputValue, setInputValue] = useState('');
  const { user, updateUserInfo } = useUserData();
  const navigate = useNavigate();
  const { data: userData, isLoading: isUserLoading } = useQuery({
    queryKey: ['userData',{ Cookies }], // page나 category가 변경될 때마다 queryFn 실행 
    queryFn: () => getUserInfo(),
    enabled: user?.username !== null
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // useEffect(() => {
  //   if (email !== '') {
  //     setInputValue(email);
  //   }
  // }, []);

  useEffect(() => { console.log(userData); }, [userData]);

  const handleSaveHandler = () => {
    // 유저 정보 수정
    if (inputValue === '') {
      window.alert('email을 입력해주세요!');

      return;
    }
    // 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (! emailRegex.test(inputValue)) {
      window.alert('email 형식이 올바르지 않습니다');
      
      return;
    }

    patchUserInfo({ username: user?.username, email: inputValue }).then(() => {
      updateUserInfo({
        ...user,
        email: inputValue
      });
      navigate('/');
    }).catch((err) => window.alert('email 업데이트 실패'));

  };

  return (
    <UserInfoContainer>
      <UserInfoBox>
        <p> email을 입력하면 구독서비스를 이용할 수 있어요</p>
        
        <InputWrapper>
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
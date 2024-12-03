import { Container } from 'styles/common/container';
import axios from 'axios';
import { useEffect } from 'react';

const Redirect = () => {

  const sendCodeToBackend = async () => {
    try {
      const response = await axios.get('http://13.124.172.225:3001/auth/kakao/callback',{
        withCredentials: true,
        headers: {
          Accept: 'application/json, text/plain, */*'
        }
      });
      console.log('Response:', response.data);
    } catch (error:any) {
      if (error.response) {
        // The server responded with a status code outside 2xx
        console.error('Response Error:', error.response.status, error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request Error (No Response):', error.request);
      } else {
        // Something happened in setting up the request
        console.error('Axios Setup Error:', error.message);
      }
    }
  };
    
  useEffect(() => { sendCodeToBackend();}, []);

  return (
    <Container>
      <p>로그인 중...</p>
    </Container>
  );
};

export default Redirect;
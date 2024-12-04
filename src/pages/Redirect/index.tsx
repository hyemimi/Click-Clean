import { Container } from 'styles/common/container';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();

  const sendCodeToBackend = async () => {
    try {
      await axios.get('http://13.124.172.225:3001/auth/kakao/callback',{
        withCredentials: true,
        headers: {
          Accept: 'application/json, text/plain, */*'
        }
      }).then((res) => {
        console.log(res.data);
        navigate('/');
      }
      ).catch((err) => 
        navigate('/login')
      );
      
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
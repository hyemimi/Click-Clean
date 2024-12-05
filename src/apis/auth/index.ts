import { client } from 'apis/client';

/** access token을 재발급합니다. */
export const getAccessToken = async(refresh_token : string) => {

  try { 
    const response = await client.get(`${process.env.REACT_APP_BACK1_URL}/auth/token-refresh`,
      {
        headers: { Authorization: `Bearer ${refresh_token}` }
      }
    );

    return response.status;

  } catch (error) {
    throw new Error('get AccessToken failed');
  }

};

/** 로그아웃합니다 */
export const postLogout = async() => {

  try {
    const response = await client.post(`${process.env.REACT_APP_BACK1_URL}/auth/logout`);

    if (response.status === 200) return true;
    else {
      return false;
    }
  } catch (error) {
    throw new Error('post Logout failed');
  }

};

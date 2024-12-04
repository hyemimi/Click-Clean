import { client } from 'apis/client';

/** access token을 재발급합니다. */
export const getAccessToken = async(): Promise<any> => {

  try { 
    const response = await client.get(`${process.env.REACT_APP_BACK1_URL}/auth/token-refresh`);

    return response.status;

  } catch (error) {
    throw new Error('get AccessToken failed');
  }

};

/** 로그아웃합니다 */
export const postLogout = async() => {

  try {
    const response = await client.post(`${process.env.REACT_APP_BACK1_URL}/auth/logout`);

    if (response.status !== 201) {
      return false;
    }

    return true;

  } catch (error) {
    throw new Error('post Logout failed');
  }

};

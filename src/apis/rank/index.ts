import { client } from 'apis/client';

/** 투표를 등록합니다 */
export const getRanking = async () => {

  try {

    const response = await client.get(`${process.env.REACT_APP_BACK2_URL}/api/article/views`);

    return response.data; 
  } 

  catch {
    throw new Error('get Ranking failed');
  }
};
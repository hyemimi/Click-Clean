import { client } from 'apis/client';
import { PostSubscribeReq } from './schema';

/** 구독을 신청합니다 */
export const postSubscribe = async({ category, media }: PostSubscribeReq) => {

  try {
    const response = await client.post(`${process.env.REACT_APP_BACK1_URL}/api/subscription`, 
      {
        category,
        media
      });

    return response.data;

  } catch (error) {
    throw new Error('post Subscription failed');
  }

};

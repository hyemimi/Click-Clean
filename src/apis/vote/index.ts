import { client } from 'apis/client';
import { PostVoteReq } from './schema';

/** 투표를 등록합니다 */
export const postVote = async ({ id, value }: PostVoteReq) => {

  try {

    const response = await client.post(`${process.env.REACT_APP_BACK2_URL}/api/vote`, {
      id,
      value
    });

    return response.data; 
  } 
  catch {
    throw new Error('post voting failed');
  }
};

/** 투표를 취소합니다 */
export const deleteVote = async (id :number) => {

  try {

    const response = await client.delete(`${process.env.REACT_APP_BACK2_URL}/api/vote/cancel`, {
      params: {
        id
      }
    });

    return response.data; 
  } 
  catch {
    throw new Error('post voting failed');
  }
};

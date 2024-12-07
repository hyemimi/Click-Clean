import { client } from 'apis/client';
import { GetScrapListReq, PostScrapReq } from './schema';
import { Cookies } from 'react-cookie';

/** 스크랩을 생성합니다 */
export const postScrap = async( { id, value }: PostScrapReq) => {
  // id: 기사 id
  const response = await client.post(`${process.env.REACT_APP_BACK2_URL}/api/scrap/save`,
    { 
      id
    }
  );

  return response.data;
};

/** 스크랩 리스트를 얻어옵니다 */
export const getScrapList = async( { page }: GetScrapListReq) => {
  try {
    const response = await client.get(`${process.env.REACT_APP_BACK2_URL}/api/scraps`,
      { params: { page, size: 12 } }
    );
    console.log(response.data);

    return response.data;
  }
  catch {
    throw new Error('get Scrap List failed');
  }
};

/** 스크랩을 생성합니다 */
export const deleteScrap = async(id: number) => {
// id: 기사 id

  try {
    const response = await client.delete(`${process.env.REACT_APP_BACK2_URL}/api/scrap/delete/${id}`);

    return response.data;
  }
  catch {
    throw new Error('delete scrap failed');
  }
};
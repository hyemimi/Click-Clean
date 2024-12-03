import { client } from 'apis/client';
import { PostRateReq, GetSearchArticlesReq, PostScrapReq, GetArticleListReq,
  GetArticleDetailReq, GetCommentListReq, PostCommentReq, GetArticleListRes, 
  GetSearchingListReq } from './schema';
import { articles } from 'temp/articles';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

/** 기사를 평가합니다 */
export const postRate = async ({ value, id }: PostRateReq) => {

  try {
    const response = await client.post(`/news/${id}/evaluate`, {
      value
    });

    return response.data; 
  } 
  catch {
    throw new Error('post rate failed');
  }
};

/** 기사를 제목으로 검색합니다 */
export const getSearchArticles = async ({ input, page, size } : GetSearchArticlesReq) => {

  try {
    const response = await client.get('/news/search/title', {
      params: { input, page, size: 10 }
    });
    //const response = await client.get(`/news/search/title?input=${keyword}&page=${page}&size=${size}`);

    return response.data;
  } // 응답 데이터만 반환 
  catch (error) {
    throw new Error('get searchArticles failed');
  }
};

/** 기사를 평가합니다 */
export const postScrap = async ({ id }: PostScrapReq) => {

  try {
    const response = await client.post('/news/scrap', {
      id
    });

    return response.data; 
  } 
  catch {
    throw new Error('post rate failed');
  }
};

/** 기사 리스트를 조회합니다 */
export const getArticleList = async({ category, probability, media, page }: GetArticleListReq): Promise<any> => {

  try {
    const response = await axios.get(`${process.env.REACT_APP_BACK1_URL}/api/news`, {
      params: { page,size: 9, category }
    });

    return response.data;
  } catch (error) {
    throw new Error('get Article List failed');
  }
  // /** API 연결전 */
  // catch {
  //   throw new Error('get Article List failed');
  // }
};
/** 기사 세부 내용을 조회합니다 */
export const getArticleDetail = async( { id }: GetArticleDetailReq) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACK2_URL}/api/article/${id}`
    );

    return response.data;
  }
  catch {
    throw new Error('get Article Detail failed');
  }
};
/** 댓글을 조회합니다 */
export const getCommentList = async({ id, page, size }: GetCommentListReq) => {
  try {
    const response = await client.get(`/comments?newsId=${id}&page=${page}&size=${size}`);
    
    return response.data;    
  }
  catch {
    throw new Error('get Comment List failed');
  }
};
/** 댓글을 작성합니다 */
export const postComment = async ({ id, content }: PostCommentReq) => {

  try {
    const response = await client.post('/comments', {
      id,
      content
    });

    return response.data; 
  } 
  catch {
    throw new Error('post comment failed');
  }
};

/** 기사를 키워드 기반으로 검색합니다 */
export const getSearchingList = async( { keyword, page }: GetSearchingListReq) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACK2_URL}/api/search`,
      { params: { keyword, page, size: 9 } }
    );

    return response.data;
  }
  catch {
    throw new Error('get Article Detail failed');
  }
};

export default {
  postRate,
  getSearchArticles,
  postScrap,
  getArticleList,
  getArticleDetail,
  getCommentList,
  postComment,
  getSearchingList
};

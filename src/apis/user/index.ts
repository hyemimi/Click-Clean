import { client } from 'apis/client';
import axios from 'axios';
import { PatchUserInfoReq } from './schema';

/** 유저 정보를 조회합니다 */
export const getUserInfo = async(): Promise<any> => {

  try {
    const response = await client.get(`${process.env.REACT_APP_BACK1_URL}/api/user`);

    return response.data;

  } catch (error) {
    throw new Error('get Article List failed');
  }

};

/** 기사를 평가합니다 */
export const patchUserInfo = async ({ username, email }: PatchUserInfoReq ) => {

  try {
    const response = await client.patch(`${process.env.REACT_APP_BACK1_URL}/api/user`, {
      username,
      email
    });
    console.log('성공');

    return response.data; 
  } 
  catch {
    throw new Error('patch failed');
  }
};
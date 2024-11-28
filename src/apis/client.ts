import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const client = (() => {
  return axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
    headers: {
      Accept: 'application/json, text/plain, */*'
    }
  });
}

)();
const request = async (options: AxiosRequestConfig) => {

  /** 성공 시 실행 */
  const onSuccess = (response: AxiosResponse) => {
    const { data } = response;

    return data;
  };

  /** 실패 시 실행*/
  const onError = function (error: AxiosError) {
    return Promise.reject({
      message: error.message,
      code: error.code,
      response: error.response
    });
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;

/** interceptors - request */
client.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem('');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    
    return config;
  },
  (error: AxiosError) => {

    return Promise.reject(error);
  }
);

/** interceptors - response */
client.interceptors.response.use(
  (res: AxiosResponse) => {
    return res; // 정상 리턴
  },
  // 에러, 토큰 만료 or 그 외 에러
  async (err) => {

    const { config, response: { status } } = err;
    const Request = config; 
  
    // 토근 만료
    if (status === 401) {
      try {
        // refreshToken 기반으로 accessToken,refreshToken 다시 요청하는 과정
        const refreshTokenFromStorage = localStorage.getItem(''); 
        const { accessToken, refreshToken } = await AuthService.refresh(
          refreshTokenFromStorage
        ); 
  
        // client에 토큰 다시 설정
        //LocalStorageService.setTokens(accessToken, refreshToken);
        client.defaults.headers.common['Cookie'] = `${accessToken}`;
  
        return await client(Request); // 재요청, config인 Request는 바뀐 것이 없으므로 그대로 사용.
      } 
      catch (error: unknown) {
        // 토큰 요청 실패, 다시 로그인 해야함. 
        //로그인 페이지로 이동
        return Promise.reject(error);
      }
    }
  
    // 그 외 에러
    if (status === 403 && err.response.data) {
      return Promise.reject(err.response.data);
    }
  
    return Promise.reject(err);
  }
);
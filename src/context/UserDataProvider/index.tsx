import { GetUserInfoRes } from 'apis/user/schema';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

const UserDataContext = createContext<any>({
  user: null,
  updateUserInfo: () => {return null;}
});

const UserDataProvider = ({ children }: PropsWithChildren) => {
// user의 초기값을 null로 설정하고, 타입을 GetUserInfoRes | null로 설정
  const [user, setUser] = useState<GetUserInfoRes | null>(null);

  const updateUserInfo = (data: GetUserInfoRes) => {
    setUser(data);
  };

  return (
    <UserDataContext.Provider value={{ user, updateUserInfo }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
export const useUserData = () => useContext(UserDataContext);
import * as React from 'react';
import type { UserReturn } from '../api';

const UserInfoContext = React.createContext<UserReturn | undefined | null>(null);
const UserInfoUpdateContext = React.createContext<React.Dispatch<
  React.SetStateAction<UserReturn | undefined>
> | null>(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userState, setUserState] = React.useState<UserReturn | undefined>(undefined);

  return (
    <UserInfoContext.Provider value={userState}>
      <UserInfoUpdateContext.Provider value={setUserState}>
        {children}
      </UserInfoUpdateContext.Provider>
    </UserInfoContext.Provider>
  );
}

export const useUserInfo = () => {
  const context = React.useContext(UserInfoContext);
  if (context === null) throw new Error('auth provider error');
  return context;
};

export const useSetUserInfo = () => {
  const context = React.useContext(UserInfoUpdateContext);
  if (context === null) throw new Error('auth provider error');
  return context;
};

export default AuthProvider;

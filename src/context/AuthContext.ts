import { createContext } from 'react';
import { string } from 'yup';

interface AuthcContextData {
  name: string;
}

const AuthcContext = createContext<AuthcContextData>({} as AuthcContextData);

export default AuthcContext;

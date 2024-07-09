import { createContext } from 'react';
import { SelfUser } from '@/utils/types';

const AuthenticationContext = createContext<{
    user?: SelfUser;
}>({});

export default AuthenticationContext;

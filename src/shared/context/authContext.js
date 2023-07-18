import { createContext } from 'react';

export const AuthContext = createContext({
    isLoggedIn: false, 
    isAdmin: true,
    login: () => {},
    logout: () => {}
});
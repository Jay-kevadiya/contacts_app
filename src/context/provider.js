import React,{createContext, useReducer} from 'react';
import authState from '../initialStates/authState';
import contactState from '../initialStates/contactState';
import auth from './auth';
import contacts from './contacts';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {

    const [authR, authDispatch] = useReducer(auth, authState);
    const [contactR, contactDispatch] = useReducer(contacts,contactState)

    return <GlobalContext.Provider value={{authR,contactR, authDispatch, contactDispatch}}>{children}</GlobalContext.Provider>
};

export default GlobalProvider;

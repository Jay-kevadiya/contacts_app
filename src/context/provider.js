import React,{createContext, useReducer} from 'react';
import authState from '../context/initialStates/authState';
import contactState from '../context/initialStates/contactState';
import auth from './reducers/auth';
import contacts from './reducers/auth';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {

    const [authR, authDispatch] = useReducer(auth, authState);
    const [contactR, contactDispatch] = useReducer(contacts,contactState)

    return <GlobalContext.Provider value={{authR,contactR, authDispatch, contactDispatch}}>{children}</GlobalContext.Provider>
};

export default GlobalProvider;

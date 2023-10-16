import React, { createContext, useState, useContext, useEffect } from 'react'
import { LOGIN } from "../types";
import { BASE_URL } from "../../util/baseUrl";
import axios from "axios";
import { useRouter } from 'next/router';

/*
const AuthState: React.FC<React.ReactNode> = ({ children }) => {
  const initialState = {
    accessToken:  null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = async (email:string, password:string) => {
    const config = {
      withCredentials: true,      
    };
    try {
      const response = await axios.post(`${BASE_URL}auth/signin`, {
        email,
        password,
      }, config);
      if (response.status === 200) {
        const { data } = response;
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

 

  return (
    <AuthContext.Provider
      value={{
        accessToken: state.accessToken,
        login}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
*/

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({} || null)
    const [loading, setLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        async function loadUserFromCookies() {
          const config = {
            withCredentials: true,      
          };                             
          try {
            const data = await axios.get(`${BASE_URL}auth/permissions`, config);
            console.log("Data: ", data);
            setUser(data);
            setIsAuthenticated(true);
          } catch (error) {
            setIsAuthenticated(false);
            setUser(null);
          }
              
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const login = async (email:string, password:string) => {
        const config = {
          withCredentials: true,      
        };
       
          const data = await axios.post(`${BASE_URL}auth/signin`, {
            email,
            password,
          }, config);

        if (data) {                       
            setUser(data);            
            console.log("Got user", user);
            setIsAuthenticated(true);
            return data;
        }
    }

   const logout = () => {
        //Cookies.remove('token')
        setUser({});
        setIsAuthenticated(false);
        //delete api.defaults.headers.Authorization
        window.location.pathname = '/login';

    }


    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}



export const useAuth = () => useContext(AuthContext);

export const ProtectRoute = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, isLoading} = useAuth();

  /*if (isLoading || (!isAuthenticated && window.location.pathname !== '/iniciar_sesion')){
    return <h1>Loading....</h1>; 
  }*/
  useEffect(()=> {
    if(!isAuthenticated)
    router.push('/iniciar_sesion');
  }  ,[])
  
  
   return children;
};
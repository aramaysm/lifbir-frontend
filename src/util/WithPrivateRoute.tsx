
import React,{ useEffect,useContext } from 'react';
import { useRouter } from 'next/router';


const WithPrivateRoute = ({ children }) => {
  const router = useRouter();
  

  useEffect(() => {
    
     
  }, []);

  return <>{children}</>;
};

export default WithPrivateRoute;
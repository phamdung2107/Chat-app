import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import {auth} from '../firebase/config';

export const AuthContext = React.createContext();

function AuthProvider({children}) {

    const [user, setUser] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);

    const navigate = useNavigate();

    React.useEffect(() => {
        const unsubcried = auth.onAuthStateChanged((user) =>{
            console.log({user});
            if(user){
                const { displayName, email, uid, photoURL } = user;
                setUser({
                displayName,
                email,
                uid,
                photoURL,
                });
                setIsLoading(false);
                navigate('/');
                return;
            }

            // reset user info
            setUser({});
            setIsLoading(false);
            navigate('/login');
        })

        return () => {
            unsubcried();
        }
    },[navigate])

    return ( 
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <Spin style={{ position: 'fixed', inset: 0 }} /> : children}
        </AuthContext.Provider>
     );
}

export default AuthProvider;
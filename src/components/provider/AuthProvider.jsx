import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

 export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [houses, setHouses] = useState([]);

    useEffect(()=>{
        fetch('houseData.json')
        .then(res => res.json())
        .then(data => setHouses(data));
    },[])


    const authInfo = {houses}
   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children:PropTypes.node
}
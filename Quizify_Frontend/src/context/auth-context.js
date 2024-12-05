import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducer/auth-reducer";



const initialState = {
    username: "",
    password: "" ,
    token: ""
};

const AuthContext = createContext();

// It is used to provide the context
const AuthProvider = ({children}) => {

    useEffect(() => {
        const token = localStorage.getItem("token");
        authDispatch({
            type: "INITIAL_STATE",
            payload: token
        })
    }, []);

    const [{username, password, token}, authDispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ username, password, token, authDispatch }}>
          {children}
        </AuthContext.Provider>
    )
}


// In order to consume the context we use consumer

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };

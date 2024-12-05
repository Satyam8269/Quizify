import axios from "axios";



export const loginHandler = async (username, password) => { 

    
    try {
        const { data: { token}, status } = await axios.post("https://quizbackend-uo1k.onrender.com/auth/login", {
            username: username,
            password: password
        });
        if(status === 200) {
            localStorage.setItem("token", token);
            return token;
        }
        //console.log(data);
    }catch(err) {
        console.log(err);
    }
}
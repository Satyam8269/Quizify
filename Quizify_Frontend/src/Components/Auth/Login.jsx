import { useAuth } from "../../context";
import "./Auth.css";
import { loginHandler } from "../../services/auth-service";
import { useNavigate } from "react-router-dom";

export const AuthLogin = () => {

    const { username, password, authDispatch } = useAuth();
    // console.log({ username, password });

    const navigate = useNavigate();

    const handleUserNameChange = (e) => {
        authDispatch({
            type: "USERNAME",
            payload: e.target.value
        })
    }

    const handlePasswordChange = (e) => {
        authDispatch({
            type: "PASSWORD",
            payload: e.target.value
        })
    }

    const handleLoginClick = (e) => {
        e.preventDefault();
        const token = loginHandler(username, password);
        if(token) {
          navigate("/");
        }
        authDispatch({
          type: "TOKEN",
          payload: token
        })
        authDispatch({
            type: "CLEAR_CREDENTIALS"
        })
    }

    const handleTestCredentialsClick = () => {
      const token = loginHandler("prakashsakari", "ps12345");
      authDispatch({
        type: "TOKEN",
        payload: token
      })
      if(token) {
        navigate("/");
      }
    }

  return (
    <div className="d-grid">
      <div className="login-auth d-flex direction-column justify-center">
        <form onSubmit={handleLoginClick}>
          <div className="form-container">
            <label className="form-label">Username</label>
            <input className="form-input lh-ls" type="text" placeholder="satyamsharma" onChange={handleUserNameChange} />
          </div>
          <div className="form-container">
            <label className="form-label">Password</label>
            <input className="form-input lh-ls" type="password" placeholder="******" onChange={handlePasswordChange} />
          </div>
          <div className="cta">
            <button className="button login-btn btn-margin cursor sign-up-btn">Login</button>
          </div>
        </form>
        <div>
            <button className="button login-btn btn-outline-primary btn-margin sign-up-btn" onClick={handleTestCredentialsClick}>
                Login with Test Credentials
            </button>
        </div>
      </div>
    </div>
  );
};

import { Fragment } from "react";
import { AuthLogin, Navbar } from "../../Components/index";

export const Login = () => {
    return (
        <Fragment>
            <Navbar route="login" />
            <AuthLogin />
        </Fragment>
    )
}
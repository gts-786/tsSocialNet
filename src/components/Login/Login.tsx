import { authSlice } from "../../redux/AuthSlice";
import { useAppDispatch, useAppSelector } from "../../tools/hooks/redux";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const Login = () => {
    const dispatch = useAppDispatch();
    const login = (event:any) => {
        event.preventDefault();
        dispatch(authSlice.actions.trueAuth());
        localStorage.setItem('auth', 'true');
    }
    return (
        <div>
            <h1>Page for login</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='Input login'/>
                <MyInput type='password' placeholder='Input password'/><br/>
                <MyButton>Log in my social network</MyButton>
            </form>
        </div>
    );
};
export default Login;
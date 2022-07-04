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
            <h3>Для входа в социальную сеть введите логин и пароль</h3>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='Input your test login (any)'/>
                <MyInput type='password' placeholder='Input your test password (any)'/><br/>
                <MyButton>Log in my social network</MyButton>
            </form>
        </div>
    );
};
export default Login;
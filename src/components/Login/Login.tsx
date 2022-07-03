import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const Login = () => {
    return (
        <div>
            <h1>Page for login</h1>
            <form>
                <MyInput type='text' placeholder='Input login'/>
                <MyInput type='password' placeholder='Input password'/><br/>
                <MyButton>Log in my social network</MyButton>
            </form>
        </div>
    );
};
export default Login;
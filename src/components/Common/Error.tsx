import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h2>A page with this path not found</h2>
            <h1>or</h1>
            <h2>You are not pass authorization!</h2>
            <NavLink to='/'>Go to authorization</NavLink>
        </div>
    );
};
export default Error;
import { FC } from "react";
import { NavLink } from "react-router-dom";

const Addressee: FC = () => {
    return (
        <div>
            <NavLink to='./roman'>Roman</NavLink><br/>
            <NavLink to=''>Egor</NavLink><br/>
            <NavLink to=''>Ludmila</NavLink><br/>
            <NavLink to=''>Svetlana</NavLink><br/>
            <NavLink to=''>Vladimir</NavLink><br/>
            <NavLink to=''>Kristina</NavLink>
        </div>
    );
};
export default Addressee;
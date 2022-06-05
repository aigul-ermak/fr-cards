import {Navigate, NavLink} from 'react-router-dom';

// @ts-ignore
import s from './Header.module.css'

export const Header = () => {
    const logOutHandler = () => {
        // <Navigate to="/packlist" replace={true}/>
    }
    return (
        <nav className={s.nav}>
            <ul className={s.menuList}>
                <li>
                    <NavLink to={'/packlist'}>Packlist</NavLink>
                </li>
                <li>
                    <NavLink to={'/profile'}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to={'/login'}>Login</NavLink>
                </li>
                <li>
                    <span onClick={logOutHandler}>Log Out</span>
                </li>
                <li>
                    <NavLink to={'/login'}>Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}

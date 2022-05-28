import {NavLink} from 'react-router-dom';

// @ts-ignore
import s from './Header.module.css'

export const Header = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.menuList}>
                <li>
                    <NavLink to={'/packlist'}>Packlist</NavLink>
                </li>
                <li>
                    <NavLink to={'/profile'}>Profile</NavLink>
                </li>
            </ul>
        </nav>
    )
}

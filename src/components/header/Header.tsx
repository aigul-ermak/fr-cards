import {NavLink} from 'react-router-dom';

export const Header = () => {
    return (
        <nav>
            <ul>
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

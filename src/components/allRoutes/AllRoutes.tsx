import {Navigate, Route, Routes} from 'react-router-dom';
import {Packlist} from '../../pages/packlist/Packlist';
import {Profile} from '../../pages/profile/Profile';
import {Login} from '../../pages/login/Login';

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/packlist'} element={<Packlist/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
        </Routes>
    )
}

import {Navigate, Route, Routes} from 'react-router-dom';
import {Packlist} from '../../pages/packlist/Packlist';
import {Profile} from '../../pages/profile/Profile';
import {Login} from '../../pages/login/Login';
import {Registration} from '../../pages/login/Registration';
import {ForgotPassword} from '../../pages/login/ForgotPassword';

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/packlist'} element={<Packlist/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
            <Route path={'/registration'} element={<Registration/>}/>
            <Route path={'/password-recovery'} element={<ForgotPassword/>}/>
        </Routes>
    )
}

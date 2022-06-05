// @ts-ignore
import s from './Login.module.css'
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {LoginThunk} from './loginReducer';
import {useAppSelector} from '../../store/store';
import {Link, Navigate} from 'react-router-dom';

type LoginParamsType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const MIN_PASS_LENGTH = 7

const validatePassAndEmail = (
    values: Omit<LoginParamsType, 'rememberMe'>,
): Omit<LoginParamsType, 'rememberMe'> => {
    const errors = {} as Omit<LoginParamsType, 'rememberMe'>
    if (!values.email) {
        errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (values.password.length < MIN_PASS_LENGTH) {
        errors.password = 'Password must be more than 7 symbols'
    } else if (!values.password) {
        errors.password = 'Password is required'
    }
    return errors
}

export const Login = () => {

    const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: validatePassAndEmail,
        onSubmit: values => {
            dispatch(LoginThunk({
                email: 'nya-admin@nya.nya',
                password: '1qazxcvBG',
                rememberMe: false
            }))
            console.log(values)
        }
    })

    if (isLoggedIn) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div className={s.container}>
            <div>
                <h1>Card App</h1>
                <h2>Sign in to your account</h2>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                        </div>

                        <div>
                            <span>
                                remember me
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    value=""
                                />
                            </span>
                        </div>
                        <div className={s.errorMessage}>
                            <p> {formik.touched.email && formik.errors.email}</p>
                            <p>{formik.touched.password && formik.errors.password}</p>
                        </div>
                        <button type="submit">Log In</button>

                        <div>
                            <Link to={'/password-recovery'}>Forgot password</Link>
                        </div>
                        <div>
                            <Link to={'/registration'}>Don't have an account?</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

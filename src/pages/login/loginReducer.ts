import {LoginType, userApi} from './LoginApi';

const initialState = {
    isLoggedIn: false
}

//reducer
export const loginReducer = (state: LoginInitialStateType= initialState , action: any) :LoginInitialStateType  => {
    switch(action.type) {
        case 'LOGIN/SET-IS-LOGGED-IN':
            return {...state, ...action.payload}
        default:
            return state
    }
}

//actions
export const loginActionCreator = {
    setIsLoggedIn : (isLoggedIn: boolean) =>
        ({type: 'LOGIN/SET-IS-LOGGED-IN', payload: {isLoggedIn}} as const)
}

//thunk
export const LoginThunk = (login: LoginType): any => async (dispatch: any) => {
    try {
        const loginData  = await userApi.login(login)
        console.log(loginData)
        dispatch(loginActionCreator.setIsLoggedIn(true))
    }catch(e) {
        console.log(e)
    }
}

//types
export type LoginInitialStateType = typeof initialState
// export type ActionsType = ReturnType<typeof loginActionCreator>

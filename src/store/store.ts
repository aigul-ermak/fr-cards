import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import {loginReducer} from '../pages/login/loginReducer';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    login: loginReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

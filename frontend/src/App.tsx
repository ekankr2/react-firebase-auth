import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Header from './components/sections/Header';

import ForgotPassword from './components/pages/ForgotPassword';
import Loader from './components/UI/Loader';
import firebase from './firebase/config';
import { getUserById, setNeedVerification } from './store/actions/authActions';
import { RootState } from './store';
import BoardRegister from "./components/pages/board/BoardRegister";
import {startLoading, endLoading} from "./store/actions/pageActions";
import PrivateRoute from "./components/auth/PrivateRoute";
import PublicRoute from "./components/auth/PublicRoute";

const SignIn = React.lazy(()=> import('./components/pages/SignIn'))
const SignUp = React.lazy(()=> import('./components/pages/SignUp'))
const Homepage = React.lazy(()=> import('./components/pages/Homepage'))
const Dashboard = React.lazy(()=> import('./components/pages/Dashboard'))

const App: FC = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state: RootState) => state.page);

    // Check if user exists
    useEffect(() => {
        dispatch(startLoading);
        const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            if(user) {
                dispatch(startLoading);
                await dispatch(getUserById(user.uid));
                if(!user.emailVerified) {
                    dispatch(setNeedVerification());
                }
            }
            dispatch(endLoading);
        });

        return () => {
            unsubscribe();
        };
    }, [dispatch]);

    if(loading) {
        return <Loader />;
    }

    return (
        <>
            <Header />
            <Suspense fallback={<Loader/>}>
            <Switch>
                <Route path="/" component={Homepage} exact />
                <PublicRoute path="/signup" component={SignUp} exact />
                <PublicRoute path="/signin" component={SignIn} exact />
                <PublicRoute path="/forgot-password" component={ForgotPassword} exact />
                <PrivateRoute path="/dashboard" component={Dashboard} exact />
                <PrivateRoute path="/register" component={BoardRegister} exact />
            </Switch>
            </Suspense>
        </>
    );
}

export default App;

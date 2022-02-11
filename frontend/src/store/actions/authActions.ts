import { ThunkAction } from 'redux-thunk';

import {SignUpData, AuthAction, SET_USER, User, SIGN_OUT, SignInData, NEED_VERIFICATION} from '../types';
import { RootState } from '..';
import firebase from '../../firebase/config';
import {endLoading, setError, setSuccess, startLoading} from "./pageActions";

// Create user
export const signup = (data: SignUpData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            const res = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
            if(res.user) {
                const userData: User = {
                    email: data.email,
                    firstName: data.firstName,
                    id: res.user.uid,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                };
                await firebase.firestore().collection('/users').doc(res.user.uid).set(userData);
                await res.user.sendEmailVerification();
                dispatch({
                    type: NEED_VERIFICATION
                });
                dispatch({
                    type: SET_USER,
                    payload: userData
                });
            }
        } catch (err: any) {
            console.log(err);
            onError();
            dispatch(setError(err.message))
        }
    }
}

// Get user by id
export const getUserById = (id: string): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            const user = await firebase.firestore().collection('users').doc(id).get();
            if(user.exists) {
                const userData = user.data() as User;
                dispatch({
                    type: SET_USER,
                    payload: userData
                });
            }
        } catch (err) {
            console.log(err);
        }
    }
}

// Log in
export const signin = (data: SignInData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
        } catch (err: any) {
            console.log(err);
            onError();
            dispatch(setError(err.message));
        }
    }
}

// Log out
export const signout = (): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            dispatch(startLoading);
            await firebase.auth().signOut();
            dispatch({
                type: SIGN_OUT
            });
        } catch (err) {
            console.log(err);
            dispatch(endLoading);
        }
    }
}

// Set need verification
export const setNeedVerification = (): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: NEED_VERIFICATION
        });
    }
}

// Send password reset email
export const sendPasswordResetEmail = (email: string, successMsg: string): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            dispatch(setSuccess(successMsg));
        } catch (err: any) {
            console.log(err);
            dispatch(setError(err.message));
        }
    }
}

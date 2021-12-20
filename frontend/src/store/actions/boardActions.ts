import { ThunkAction } from "redux-thunk";

import firebase from "firebase/compat/app";
import {AuthAction, Board, BoardAction, registerData, SET_ERROR, SET_LOADING, SET_SUCCESS, User} from "../types";
import {RootState} from "../index";

export const registerBoard = (data: registerData,user: User, onError: () => void): ThunkAction<void, RootState, null, BoardAction> => {
    return async dispatch => {
        const boardData: Board = {
            title: data.title,
            content: data.content,
            author: user.id,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        try {
            await firebase.firestore().collection('board').add(boardData);
        } catch (err: any) {
            console.log(err)
            onError();
            dispatch(setError(err.message))
        }
    }
}

// Set error
export const setError = (msg: string): ThunkAction<void, RootState, null, BoardAction> => {
    return dispatch => {
        dispatch({
            type: SET_ERROR,
            payload: msg
        });
    }
}

// Set loading
export const setLoading = (value: boolean): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: SET_LOADING,
            payload: value
        });
    }
}

// Set success
export const setSuccess = (msg: string): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: SET_SUCCESS,
            payload: msg
        });
    }
}

import {BoardAction, BoardState, REGISTER_BOARD, SET_ERROR, SET_LOADING, SET_SUCCESS} from "../types";


const initialState: BoardState = {
    loading: false,
    error: '',
    success: ''
}

export default (state = initialState, action: BoardAction) => {
    switch (action.type) {
        case REGISTER_BOARD:
            return {
                ...state,
                user: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SET_SUCCESS:
            return {
                ...state,
                success: action.payload
            }
    }
}

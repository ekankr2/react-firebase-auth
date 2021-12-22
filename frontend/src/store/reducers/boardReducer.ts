import {BoardAction, BoardState, SET_ERROR, SET_SUBMITTED} from "../types";


const initialState: BoardState = {
    submitted: false
}

export default (state = initialState, action: BoardAction) => {
    switch (action.type) {
        case SET_SUBMITTED:
            return {
                ...state,
                submitted: action.payload
            }
        default:
            return state
    }
}

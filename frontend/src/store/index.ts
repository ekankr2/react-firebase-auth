import { createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import authReducer from "./reducers/authReducer";
import boardReducer from "./reducers/boardReducer";
import pageReducer from "./reducers/pageReducer";

const rootReducer = combineReducers({
    page: pageReducer,
    auth: authReducer,
    board: boardReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>

export default store

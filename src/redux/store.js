



import { createStore, combineReducers,applyMiddleware  } from "redux";
import thunk from "redux-thunk";
import { MoviesReducer } from "./movies/moviesReducer";


const reducer= combineReducers({
    Movies:MoviesReducer
})

const middlewares = [thunk];

const Store= createStore(
    reducer,
    applyMiddleware(...middlewares)
)

export default Store;

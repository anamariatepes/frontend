import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension'
import { animalsReducer, animalDetailsReducer} from './reducers/animalReducer'
import { authReducer } from './reducers/userReducers';

const reducer = combineReducers({
   animals: animalsReducer,
   animalDetails: animalDetailsReducer,
   auth: authReducer
})

let initialState = {}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;
import {combineReducers} from 'redux';
import cats from './catReducer';


const rootReducer = combineReducers({
    cats,
});

export default rootReducer;
import AuthReducer from './AuthReducer/AuthReducer';
import ProfileReducer from './ProfileReducer/ProfileReducer';

const {combineReducers} = require('redux');

const RootReducer = combineReducers({
  AuthR: AuthReducer,
  ProfileR: ProfileReducer,
});
export default RootReducer;

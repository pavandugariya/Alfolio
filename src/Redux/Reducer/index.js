import AuthReducer from './AuthReducer/AuthReducer';
import { ProfileReducer } from './ProfileReducer/ProfileReducer';

const { combineReducers } = require('redux');

const RootReducer = combineReducers({
  AuthR: AuthReducer,
  ProfileReducer: ProfileReducer,
});
export default RootReducer;

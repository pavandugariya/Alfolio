const initialState = {
  splashLoading: false,
  userToken: null,
  userphone: null,
  isLoading: true,
  userId: null,
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNIN':
      return {
        ...state,
        userToken: action.payload,
      };
    case 'SPLASH_LOADING':
      return {
        ...state,
        splashLoading: action.payload,
      };
    case 'SIGNOUT':
      return {
        ...state,
        userToken: action.payload,
      };
    case 'MOBILE_NUMBER':
      return {
        ...state,
        userToken: action.payload,
      };
    case 'USER_TOKEN':
      return {
        ...state,
        userToken: action.payload,
      };

    default:
      return state;
  }
};
export default AuthReducer;

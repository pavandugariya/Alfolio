const initialState = {
  profileData: '',
};

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROFILE_DATA':
      return {
        ...state,
        profileData: action.payload,
      };
    default:
      return {...state};
  }
};

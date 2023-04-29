const initialState = {
  profileData: '',
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROFILE':
      return {
        ...state,
        profileData: action.payload,
      };
    default:
      return {...state};
  }
};

export default ProfileReducer;

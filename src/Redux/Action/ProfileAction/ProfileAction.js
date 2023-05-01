export const AddProfileDataHandler = (value, id) => {
  return {
    type: 'ADD_PROFILE_DATA',
    payload: value,
    id,
  };
};

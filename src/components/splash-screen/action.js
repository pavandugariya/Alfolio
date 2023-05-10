export const _set_time_out = () => {
  setTimeout(() => {
    console.log('jee');
  }, 2000);
};

const useGetProfileData = () => {

  export const _getUserProfileData = async () => {
    try {
      const response = await getData(`${base_url}/users/me`);
      if (response.status == 200) {
        dispatch(AddProfileDataHandler(response?.data));
      }
    } catch (error) {
      console.log('error...........', error);
    }
  };
}

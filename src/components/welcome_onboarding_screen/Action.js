import { getData } from '../../Api/Api';
import { base_url } from '../../../env';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  _AddprofileHandler,
  AddProfileDataHandler,
} from '../../Redux/Action/ProfileAction/ProfileAction';
import { useNavigation } from '@react-navigation/native';

export const useWelcomeOnboarding = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [isAccount, setIsAccount] = useState(false);
  const [numberOfAccount, setNumberOfAccount] = useState([]);
  const Dispatch = useDispatch();
  const profileData = useSelector(state => state.ProfileReducer);
  useEffect(() => {
    if (profileData?.profileData?.accounts?.length > 0) {
      navigation.replace('Drawer');
    } else {
      _getUserProfileData();
    }
  }, []);


  const _getUserProfileData = async () => {
    try {
      const response = await getData(`${base_url}/users/me`);
      // console.log('profil data...', response.data);
      if (response.status == 200) {
        if (response.data.accounts.length > 0) {
          console.log('emter');
          navigation.replace('Drawer');
        }
        setUserData(response.data);
        setIsAccount(response.data.currentAccount);
        setNumberOfAccount(response.data.accounts);
        setIsLoading(false);
        Dispatch(AddProfileDataHandler(response.data));

      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log('error...........', error);
    }
  };

  return { isLoading, userData, isAccount, numberOfAccount, navigation };
};

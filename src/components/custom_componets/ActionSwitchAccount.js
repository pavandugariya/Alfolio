import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';
import { base_url } from '../../../env';
import { getData, postData } from '../../Api/Api';
import { UserTokenHandler } from '../../Redux/Action/AuthAction/AuthAction';
import { AddProfileDataHandler } from '../../Redux/Action/ProfileAction/ProfileAction';
import { showMessage } from 'react-native-flash-message';
export const useActionSwitchAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [userData, setUserData] = useState([]);
  const [isAccount, setIsAccount] = useState(false);
  const [numberOfAccount, setNumberOfAccount] = useState([]);
  const profileData = useSelector(state => state.ProfileReducer);
  // console.log('profileData', profileData?.profileData);

  const AuthDispatch = useDispatch();
  const navigation = useNavigation();

  const profilAccountHandler = async id => {
    const ObjData = {
      accountId: id,
    };

    try {
      setIsLoading(true);
      const res = await postData(`${base_url}/auth/switch-account`, ObjData);
      if (res.status == 200) {
        setUserToken(res.data.accessToken);
        const response = await getData(`${base_url}/users/me`);
        AuthDispatch(AddProfileDataHandler(response.data));
        navigation.navigate('Home');
        setIsLoading(false);
        setClicked(false);
        // showMessage({
        //   message: 'Accouned Change successfully',
        //   type: 'success',
        // })

      }
      setIsLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  const setUserToken = async token => {
    try {
      const res = await RNSecureStorage.set('userToken', token, {
        accessible: ACCESSIBLE.WHEN_UNLOCKED,
      });
      AuthDispatch(UserTokenHandler(token));
    } catch (error) {
      console.log('error1', error);
    }
  };
  return {
    setNumberOfAccount,
    setIsAccount,
    setUserData,
    profilAccountHandler,
    clicked,
    setClicked,
    profileData,
    setIsLoading,
    isLoading,
    navigation,
  };
};

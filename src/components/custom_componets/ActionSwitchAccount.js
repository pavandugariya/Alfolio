import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {err} from 'react-native-svg/lib/typescript/xml';
import {useDispatch, useSelector} from 'react-redux';
import RNSecureStorage, {ACCESSIBLE} from 'rn-secure-storage';
import {base_url} from '../../../env';
import {postData} from '../../Api/Api';
import {UserTokenHandler} from '../../Redux/Action/AuthAction/AuthAction';
import {AddProfileDataHandler} from '../../Redux/Action/ProfileAction/ProfileAction';
import {ProfileReducer} from '../../Redux/Reducer/ProfileReducer/ProfileReducer';
export const useActionSwitchAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState();
  const [userData, setUserData] = useState([]);
  const [isAccount, setIsAccount] = useState(false);
  const [numberOfAccount, setNumberOfAccount] = useState([]);
  const profileData = useSelector(state => state.ProfileReducer);
  console.log('profileData', profileData.profileData.currentAccount?.id);

  const Dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    _Actionswitchaccount();
  }, []);

  const _Actionswitchaccount = async () => {
    const ObjData = {
      accountId: '0b80cb11-2988-41b0-bd90-9a87debf90e5',
    };
    // console.log(ObjData);
    try {
      const res = await postData(`${base_url}/auth/switch-account`, ObjData);
      console.log('switch account', res);
      if (res.status === 200) {
        setUserData(res.data);
        setIsAccount(res.data);
        setNumberOfAccount(res.data);
      }
    } catch (error) {
      console.log('error', error);
    }

    // const setUserToken = async token => {
    //   try {
    //     const res = await RNSecureStorage.set('userToken', token, {
    //       accessible: ACCESSIBLE.WHEN_UNLOCKED,
    //     });
    //     Dispatch(UserTokenHandler(token));
    //     navigation.replace('Home');
    //   } catch (error) {
    //     console.log('error', error);
    //   }
    // };
  };
  return {
    setNumberOfAccount,
    setIsAccount,
    setUserData,
    _Actionswitchaccount,
    clicked,
    setClicked,
  };
};

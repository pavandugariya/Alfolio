<<<<<<< HEAD
import {getData} from '../../Api/Api';
import {base_url} from '../../../env';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {_AddprofileHandler} from '../../Redux/Action/ProfileAction/ProfileAction';
=======
import { getData } from '../../Api/Api';
import { base_url } from '../../../env';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { _AddprofileHandler, AddProfileDataHandler } from '../../Redux/Action/ProfileAction/ProfileAction';
import { useNavigation } from '@react-navigation/native';
>>>>>>> 8c75a3395616698c49cbaf9f2749a68009fe7817

export const useWelcomeOnboarding = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [isAccount, setIsAccount] = useState(false);
  const [numberOfAccount, setNumberOfAccount] = useState([]);
  const Dispatch = useDispatch();

  useEffect(() => {
    _getUserProfileData();
  }, []);

  useEffect(() => {
    Dispatch(AddProfileDataHandler(userData));
  }, [userData])

  // if (numberOfAccount.length > 0) {
  // }

  const _getUserProfileData = async () => {
    try {
      const response = await getData(`${base_url}/users/me`);
      // console.log('profil data...', response.data);
      if (response.status == 200) {
        setUserData(response.data);
        setIsAccount(response.data.currentAccount);
        setNumberOfAccount(response.data.accounts);
        setIsLoading(false);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log('error', error);
    }
  };
<<<<<<< HEAD
  return {isLoading, userData, isAccount, numberOfAccount};
=======
  return { isLoading, userData, isAccount, numberOfAccount, navigation };
>>>>>>> 8c75a3395616698c49cbaf9f2749a68009fe7817
};

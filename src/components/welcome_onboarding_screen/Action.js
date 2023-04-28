import { getData } from '../../Api/Api';
import { base_url } from '../../../env';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { _AddprofileHandler } from '../../Redux/Action/ProfileAction/ProfileAction';

export const useWelcomeOnboarding = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [isAccount, setIsAccount] = useState(false);
  const [numberOfAccount, setNumberOfAccount] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    _getUserProfileData();
  }, []);

  const _getUserProfileData = async () => {
    try {
      const response = await getData(`${base_url}/users/me`);
      console.log('profil data...', response.data);
      if (response.status == 200) {
        setUserData(response.data);
        setIsAccount(response.data.currentAccount);
        setNumberOfAccount(response.data.accounts);
        setIsLoading(false);
        dispatch(_AddprofileHandler(response.data));
      }
      setIsLoading(false);

    } catch (error) {
      setIsLoading(false);
      console.log('error', error);
    }
  };
  return { isLoading, userData, isAccount, numberOfAccount };
};

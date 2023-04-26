import {getData} from '../../Api/Api';
import {base_url} from '../../../env';
import {useEffect, useState} from 'react';

export const useWelcomeOnboarding = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [isAccount, setIsAccount] = useState(false);
  const [numberOfAccount, setNumberOfAccount] = useState([]);

  useEffect(() => {
    _getUserProfileData();
  }, []);

  const _getUserProfileData = async () => {
    try {
      const response = await getData(`${base_url}/users/me`);
      if (response.status == 200) {
        console.log(response.data);
        setUserData(response.data);
        setIsAccount(response.data.currentAccount);
        setNumberOfAccount(response.data.accounts);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {isLoading, userData, isAccount, numberOfAccount};
};

import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { showMessage } from 'react-native-flash-message';
// import {Dimensions} from 'react-native/types';
import { useDispatch } from 'react-redux';
import { base_url } from '../../../env';
import { postData, getData } from '../../Api/Api';
import { AddProfileDataHandler } from '../../Redux/Action/ProfileAction/ProfileAction';

export const useVerifyAction = () => {


  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const aadharNumber = route.params.aadharNumber;

  const AuthDispatch = useDispatch();
  const [otp, setOtp] = useState('');

  const _otpSubmitHandler = async () => {
    const dataObj = {
      identificationNumber: aadharNumber,
      verificationCode: otp,
    }
    try {
      const res = await postData(`${base_url}/accounts/me/verify`, dataObj);
      if (res.data) {
        _getUserProfileData();
        navigation.replace('SuccessfulRegistration');
        showMessage({
          message: res?.data?.status,
          type: 'success',
        })
      }
      if (res?.response?.data?.message) {
        showMessage({
          message: res?.response?.data?.message,
          type: 'default',
        })
      }
      // navigation.replace('SuccessfulRegistration');
    } catch (error) {
      console.log(error);
    }
  };

  const _getUserProfileData = async () => {
    try {
      const response = await getData(`${base_url}/users/me`);
      if (response.status == 200) {
        dispatch(AddProfileDataHandler(response?.data));
      }
    } catch (error) {
      console.log('error...........', error);
    }
  };

  return {
    _otpSubmitHandler,
    AuthDispatch,
    otp,
    setOtp,
    navigation,
  };
};

import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
// import {Dimensions} from 'react-native/types';
import {useDispatch} from 'react-redux';
import {base_url} from '../../../env';
import {postData} from '../../Api/Api';

export const useVerifyAction = () => {
  const [otp, setOtp] = useState();

  const navigation = useNavigation();
  // const {height, width} = Dimensions.get('screen');
  const AuthDispatch = useDispatch();

  const _otpSubmitHandler = async () => {
    const dataObj = {
      identificationNumber: '859654145998',
      verificationCode: otp,
    };
    console.log(dataObj);
    try {
      const res = await postData(`${base_url}/auth/verify-account`, dataObj);
      console.log('response data', res.data);
      navigation.navigate('SuccessfulRegistration');
    } catch (error) {
      console.log(error);
    }
  };

  const [errOtp, seterrOtp] = useState();
  const validationOtp = () => {
    if (otp === '') {
      seterrOtp('sucessfully');
    } else {
      seterrOtp('Enter the opt');
    }
  };

  return {
    validationOtp,
    seterrOtp,
    _otpSubmitHandler,
    AuthDispatch,
    otp,
    setOtp,
    navigation,
  };
};

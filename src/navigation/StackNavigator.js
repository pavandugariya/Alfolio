import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../components/login/LoginScreen';
import OnboardingScreen from '../components/onboarding-screen/OnboardingScreen';
import Home from '../components/home/Home';
import DrawerNavigator from './DrawerNavigator';
import OtpVerificationScreen from '../components/login/OtpVerificationScreen';
import PickAccount from '../components/login/PickAccount';
import ShowMarksheet from '../components/show_marksheet/ShowMarksheet';
import SendDocuments from '../components/send_document/SendDocuments';
import SendHistory from '../components/send_log_history/SendHistory';
import EditProfile from '../components/edit_profile/EditProfile';
import Splash from '../components/splash-screen/Splash';
import WelcomeOnboard from '../components/Welcom_Onboard/WelcomOnboard';
import ProfileSetup from '../components/Profile_setup/ProfileSetup';
import Kyc from '../components/KYC/Kyc';
import VerifyOtp from '../components/Verify_Otp/VerifyOtp';
import Youdid from '../components/You_Did_Is/Youdid';
import SuccessfulRegistration from '../components/Successful_Registration/SuccessfulRegistration';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const AuthData = useSelector(state => state.AuthReducer);
  console.log(AuthData);
  return (
    <Stack.Navigator>
      {AuthData?.splashLoading == true ? (
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: false}}
        />
      ) : AuthData?.usertoken === null ? (
        <>
          <Stack.Screen
            name="onboarding"
            component={OnboardingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OTP"
            component={OtpVerificationScreen}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PickAccount"
            component={PickAccount}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ShowMarksheet"
            component={ShowMarksheet}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SendDocuments"
            component={SendDocuments}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SendHistory"
            component={SendHistory}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
        name="WelcomOnboard"
        component={WelcomeOnboard}
        options={{headerShown: false}}
      /> */}
          <Stack.Screen
            name="ProfileSetup"
            component={ProfileSetup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="kyc"
            component={Kyc}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="verifyOtp"
            component={VerifyOtp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="youdidis"
            component={Youdid}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SuccessfulRegistration"
            component={SuccessfulRegistration}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;

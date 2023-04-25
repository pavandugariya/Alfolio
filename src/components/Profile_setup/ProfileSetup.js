import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  Button,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {
  globalcolors,
  globalfonts,
  globalStyle,
} from '../../globalUtils/globalutil';
import {Provider, TextInput} from 'react-native-paper';
import GradientBtn from '../custom_componets/GradientBtn';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import CustomInputField from '../custom_componets/CustomInputField';
import {useTranslation} from 'react-i18next';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {postData} from '../../Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import DropDown from 'react-native-paper-dropdown';
import {base_url} from '../../../env';
import {UserTokenHandler} from '../../Redux/Action/AuthAction/AuthAction';
import RNSecureStorage, {ACCESSIBLE} from 'rn-secure-storage';

const ProfileSetup = () => {
  const data = [
    {
      name: 'Male',
    },
    {
      name: 'Female',
    },
    {
      name: 'Others ',
    },
  ];
  const {t} = useTranslation();
  const [firstName, setFirstName] = useState();
  const [middleName, setmiddleName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [fathername, setFatherName] = useState();
  const [dob, setDOB] = useState();
  // const [city, setCity] = useState();
  // const [state, setState] = useState();
  // const [country, setCountry] = useState();
  const AuthDispatch = useDispatch();

  const navigation = useNavigation();
  const {height, width} = Dimensions.get('screen');
  const [clicked, setClicked] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    // console.warn('A date has been picked: ', date);
    const dt = new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    console.log(x1[2] + '/' + x1[1] + '/' + x1[0]);
    setSelectedDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
    hideDatePicker();
  };

  const SetProfileAccount = async () => {
    const DataObj = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      gender: 'Male',
      dob: '1998-10-15',
      parentOrGuardianOrSpouseName: fathername,
    };
    console.log(DataObj);
    try {
      const res = await postData(
        `${base_url}/auth/native/me/accounts`,
        DataObj,
      );
      if (res.status === 201) {
        setUserToken(res.data.accessToken);
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const setUserToken = async token => {
    try {
      const res = await RNSecureStorage.set('userToken', token, {
        accessible: ACCESSIBLE.WHEN_UNLOCKED,
      });
      AuthDispatch(UserTokenHandler(token));
      navigation.replace('kyc');
    } catch (error) {
      console.log('error', error);
    }
  };

  // const _userTockenHandler = async value => {
  //   try {
  //     const res = await AsyncStorage.setItem('userToken', value);
  //     console.log(res);
  //     navigation.navigate('kyc');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <ImageBackground
        source={require('../../Images/home_bg2.png')}
        blurRadius={50}
        style={styles.container}>
        <ScrollView style={styles.scrollView_style}>
          <View style={styles.input_box_style}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.profile_heading_style}>Profile Setup </Text>
            </View>

            <View style={styles.text_input_top_container}>
              <Text style={styles.text_inpute_top_text_style}>
                {t('ProfileSetup.FirstName')}
              </Text>
              <TextInput
                style={[styles.text_input_style, {paddingRight: 40}]}
                textname={'Full Name'}
                onChangeText={setFirstName}
                value={firstName}
                placeholder="Enter your FirstName"
                placeholderTextColor="#000"
              />
            </View>
            <View style={styles.text_input_top_container}>
              <Text style={styles.text_inpute_top_text_style}>
                {t('ProfileSetup.MiddleName')}
              </Text>
              <TextInput
                style={[styles.text_input_style, {paddingRight: 40}]}
                textname={'Meddle Name'}
                onChangeText={setmiddleName}
                value={middleName}
                placeholder="Enter your Middle Name"
                placeholderTextColor="#000"
              />
            </View>
            <View style={styles.text_input_top_container}>
              <Text style={styles.text_inpute_top_text_style}>
                {t('ProfileSetup.LastName')}
              </Text>
              <TextInput
                style={[styles.text_input_style, {paddingRight: 40}]}
                textname={'Last Name'}
                onChangeText={setLastName}
                value={lastName}
                placeholder="Enter your LastName"
                placeholderTextColor="#000"
              />
            </View>
            <View style={styles.text_input_top_container}>
              <Text style={styles.text_inpute_top_text_style}>
                {t('ProfileSetup.FatherName')}
              </Text>
              <TextInput
                style={[styles.text_input_style, {paddingRight: 40}]}
                textname={'Father Name'}
                onChangeText={setFatherName}
                value={fathername}
                placeholder="Enter your Father's Name"
                placeholderTextColor="#000"
              />
            </View>
            <View style={styles.text_input_top_container}>
              <Text style={styles.text_inpute_top_text_style}>
                {t('ProfileSetup.Gender')}
              </Text>
              <TextInput
                style={[styles.text_input_style, {paddingRight: 40}]}
                textname={'Gender'}
                onChangeText={setGender}
                value={gender}
                placeholder="Male"
                placeholderTextColor="#000"
              />
              <View style={styles.icon_box_text_input}>
                <TouchableOpacity
                  onPress={() => {
                    setClicked(!clicked);
                  }}>
                  {clicked ? (
                    <Icon
                      name={'caret-up'}
                      size={22}
                      color={globalcolors.icon_color}
                    />
                  ) : (
                    <Icon
                      name={'caret-down'}
                      size={22}
                      color={globalcolors.icon_color}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.text_input_top_container}>
              <Text style={styles.text_inpute_top_text_style}>
                {t('ProfileSetup.Dob')}
              </Text>
              <TextInput
                style={[styles.text_input_style, {paddingRight: 40}]}
                textname={'Dob'}
                onChangeText={text => setSelectedDate(text)}
                value={selectedDate}
                placeholder="03/03/2023"
                placeholderTextColor="#000"
              />
              <View style={styles.icon_box_text_input}>
                <TouchableOpacity
                  onPress={() => {
                    showDatePicker();
                  }}>
                  <Icon
                    name={'calendar'}
                    size={22}
                    color={globalcolors.icon_color}
                  />

                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* <View style={styles.text_input_top_container}>
            <Text style={styles.text_inpute_top_text_style}>
              {t('ProfileSetup.City')}
            </Text>
            <TextInput
              style={[styles.text_input_style, {paddingRight: 40}]}
              textname={'City'}
              onChangeText={setCity}
              value={city}
              placeholder="Indore"
              placeholderTextColor="#000"
            />
            <View style={styles.icon_box_text_input}>
              <TouchableOpacity
                onPress={() => {
                  setCityClicked(!cityclicked);
                }}>
                {cityclicked ? (
                  <Icon
                    name={'caret-up'}
                    size={22}
                    color={globalcolors.icon_color}
                  />
                ) : (
                  <Icon
                    name={'caret-down'}
                    size={22}
                    color={globalcolors.icon_color}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.text_input_top_container}>
            <Text style={styles.text_inpute_top_text_style}>
              {t('ProfileSetup.State')}
            </Text>
            <TextInput
              style={[styles.text_input_style, {paddingRight: 40}]}
              textname={'State'}
              onChangeText={setState}
              value={state}
              placeholder="Madhya Pradesh"
              placeholderTextColor="#000"
            />
            <View style={styles.icon_box_text_input}>
              <TouchableOpacity
                onPress={() => {
                  setStateClicked(!stateclicked);
                }}>
                {stateclicked ? (
                  <Icon
                    name={'caret-up'}
                    size={22}
                    color={globalcolors.icon_color}
                  />
                ) : (
                  <Icon
                    name={'caret-down'}
                    size={22}
                    color={globalcolors.icon_color}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.text_input_top_container}>
            <Text style={styles.text_inpute_top_text_style}>
              {t('ProfileSetup.Country')}
            </Text>
            <TextInput
              style={[styles.text_input_style, {paddingRight: 40}]}
              textname={'Country'}
              onChangeText={setCountry}
              value={country}
              placeholder="India"
              placeholderTextColor="#000"
            />
            <View style={styles.icon_box_text_input}>
              <TouchableOpacity
                onPress={() => {
                  setCountryClicked(!countryclicked);
                }}>
                {countryclicked ? (
                  <Icon
                    name={'caret-up'}
                    size={22}
                    color={globalcolors.icon_color}
                  />
                ) : (
                  <Icon
                    name={'caret-down'}
                    size={22}
                    color={globalcolors.icon_color}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View> */}
            <GradientBtn
              loginBtnText={'Next'}
              bgColor={'#D25C34'}
              bgColor2={'#951516'}
              color={'#fff'}
              marginTop={20}
              height={40}
              borderRadius={5}
              icon_color={'#fff'}
              icon_size={24}
              // icon_name={'share-social'}
              onPress={() => {
                // navigation.navigate('kyc');
                SetProfileAccount();
              }}
            />
          </View>
        </ScrollView>

        {clicked ? (
          <View style={styles.dropdown_text}>
            <FlatList
              data={data}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setGender(item.name);
                      setClicked(false);
                    }}
                    style={styles.item_listing_data}>
                    <Text style={styles.subitem_text}>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
      </ImageBackground>
    </>
  );
};

export default ProfileSetup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    blurRadius: 50,
  },
  input_box_style: {
    width: '95%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 40,
    marginVertical: 30,
    opacity: 0.8,
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text_input_top_container: {
    marginTop: 20,
  },
  text_inpute_top_text_style: {
    fontSize: 12,
    color: globalcolors.icon_color,
    fontFamily: globalfonts.Regularm,
  },
  text_input_style: {
    borderWidth: 1,
    // borderColor: globalcolors.text_color,
    height: 40,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 5,
    paddingHorizontal: 10,
    color: '#000',
    fontSize: 15,
    backgroundColor: '#ffffffb5',
    margin: 1,
  },
  icon_box_text_input: {
    position: 'absolute',
    right: 10,
    bottom: 8,
  },
  dropdown_text: {
    width: '75%',
    height: 150,
    backgroundColor: '#fff',
    elevation: 7,
    position: 'absolute',
    bottom: 70,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  item_listing_data: {
    width: '90%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    marginTop: 20,
    alignContent: 'center',
  },
  subitem_text: {
    color: '#000',
    paddingLeft: 10,
    marginTop: 10,
  },
  profile_heading_style: {
    fontFamily: '',
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  scrollView_style: {
    width: '100%',
  },
});

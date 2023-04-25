import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  globalcolors,
  globalfonts,
  globalStyle,
} from '../../globalUtils/globalutil';
import CustomHeader from '../custom_componets/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../send_log_history/styles';
import {useTranslation} from 'react-i18next';
const SendHistory = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Images/log_send_bg.png')}
        style={globalStyle.bg_image_style}>
        <CustomHeader
          header_name={t('sendHistory.header name')}
          left_icon={'chevron-back'}
          leftOnpress={() => navigation.goBack()}
        />
        <View style={styles.main_view_style}>
          <ScrollView>
            {Array(5)
              .fill('2')
              .map((_, index) => {
                return (
                  <View key={index}>
                    <LinearGradient
                      start={{x: 1, y: 0}}
                      end={{x: 0, y: 0}}
                      locations={[0.0, 0.7]}
                      colors={['#951516', '#FF6A2B']}
                      style={styles.today_btn_style}>
                      <Text style={{color: '#fff', fontSize: 10}}>Today</Text>
                    </LinearGradient>
                    <View style={styles.top_conatiner}>
                      <Text style={styles.name_style}>Pavan Dugariya</Text>
                      <Text style={styles.school_style}>
                        High Secondary School
                      </Text>
                      <Text style={styles.board_style}>MP BOARD</Text>
                      <View style={styles.top_inner_container}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'baseline',
                          }}>
                          <Text style={styles.bottom_text_style}>
                            Download{' '}
                          </Text>
                          <Icon
                            name={'checkmark-circle'}
                            color={globalcolors.icon_color}
                            size={10}
                          />
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'baseline',
                          }}>
                          <Text style={styles.bottom_text_style}>Seen </Text>
                          <Icon
                            name={'checkmark-circle'}
                            color={globalcolors.icon_color}
                            size={10}
                          />
                        </View>
                      </View>
                      <View style={styles.time_container}>
                        <Text style={styles.bottom_text_style}>02:32 AM</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SendHistory;

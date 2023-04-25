import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalfonts} from '../../globalUtils/globalutil';

const CustomInputField = ({
  leftIcon,
  textname,
  placeholderText,
  textValue,
  onChangeTextHandler,
  rightIcon,
  rightIconOnpressHandler,
  isVisible,
  secondRightIcon,
  colors,
  iconName,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        {/* <Icon name={leftIcon} size={24} color={'#951516'} /> */}

        <Text
          style={{
            fontFamily: globalfonts.Regularj,
            fontSize: 15,
            fontWeight: '600',
            color: '#951516',
            marginHorizontal: leftIcon ? 10 : 0,
          }}>
          {textname}
        </Text>
      </View>
      <View style={styles.text_input_style}>
        <TextInput
          placeholder={placeholderText}
          value={textValue}
          iconName={iconName}
          onChangeText={onChangeTextHandler}
          secureTextEntry={isVisible}
          color={colors}
          {...rest}
        />
      </View>

      {rightIcon && (
        <TouchableOpacity
          onPress={rightIconOnpressHandler}
          style={styles.rightIcon_style}>
          <Icon
            // name={isVisible !== true ? rightIcon : secondRightIcon}
            name={iconName}
            size={24}
            color="#5956E9"
            // style={styles.rightIcon_style}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInputField;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    paddingLeft: 0,
  },
  top_container: {
    flexDirection: 'row',
    alignItems: 'baseline',
    // left: -,
    marginBottom: 0,
    // justifyContent: 'center'
  },
  text_input_style: {
    height: 40,
    fontFamily: 'Raleway',
    fontSize: 17,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#951516',
    // left: -5,
    paddingRight: 45,
    color: '#000',
    width: '100%',
    borderRadius: 5,
    alignSelf: 'center',
    paddingLeft: 15,
    backgroundColor: '#ffff',
    alignItems: 'center',
    marginTop: 5,
  },
  rightIcon_style: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 40,
    paddingHorizontal: 8,
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

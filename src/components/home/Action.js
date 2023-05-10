import { useEffect, useState } from 'react';
import { getData } from '../../Api/Api';
import { useNavigation } from '@react-navigation/native';
import { base_url } from '../../../env';
import { useSelector } from 'react-redux';
import * as  ethers from "ethers";
import { pbkdf2 } from "@ethersproject/crypto";
import { pbkdf2Sync } from 'crypto';

// import { pbkdf2Sync } from "crypto"; // fast implementation in your enviornment

const { HDNode, providers, utils, Wallet } = ethers;
import { Alert, NativeModules } from 'react-native';
// module.exports = NativeModules.HelloWorld;

export const useHomeAction = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const currentAccount = useSelector(state => state.ProfileReducer?.profileData?.currentAccount);

  var HelloWorld = NativeModules.HelloWorld;
  // use state data
  const [password, setPassword] = useState('');

  // java code integrations ..
  const sayHiFromJava = async () => {
    await HelloWorld.sayHi((err) => { console.log(err) }, (msg) => { console.log(msg) });
  };
  // const currentAccount = profileData.currentAccount;
  // console.log(currentAccount);

  const Array = [
    {
      id: 1,
      name: 'High school',
      board_name: 'MP BOARD',
    },
    {
      id: 2,
      name: 'Higher secondary school',
      board_name: 'MP BOARD',
    },
    {
      id: 3,
      name: 'Oriental university indore',
      board_name: 'University/board',
    },
  ];

  const _toggleHandler = () => {
    navigation.openDrawer();
  };

  const _passwordHandler = (val) => {
    setPassword(val)
  }

  const generateWallet = () => {
    HelloWorld.generateWallet('myPassphrase').then((wallet) => {
      Alert.alert(
        'Wallet Generated',
        `Address: ${wallet.address}\nPrivate Key: ${wallet.privateKey}`,
        [{ text: 'OK' }]
      );
    }).catch((error) => {
      Alert.alert('Error', error, [{ text: 'OK' }]);
    });
  }

  const _generatWallerHandler = async () => {
    setIsLoading(true)
    try {
      const start = performance.now();

      function customPbkdf2(password, salt, iterations, keylen, algo) {
        console.log("custom pbkdf2");
        return pbkdf2Sync(password, salt, iterations, keylen, algo);
      }

      pbkdf2.register(customPbkdf2);

      console.log("creating wallet");
      const wallet = Wallet.createRandom();
      console.log(wallet.address);


      // // console.log("res", ethers.wordlists);
      // const wallet = await new ethers.Wallet.createRandom({ locale: ethers.wordlists.en })
      // console.log(wallet);
      // // console.log(HDNode.entropyToMnemonic(utils.randomBytes(16)).split(' '));
      // const end = performance.now()
      // console.log(start, end, (end - start));
      // console.log('wallet encrypt', await wallet.encrypt('Pavan@123'));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }

  };

  return { isLoading, setIsLoading, categoryData, _toggleHandler, Array, navigation, currentAccount, _generatWallerHandler, _passwordHandler, password, setPassword };
};

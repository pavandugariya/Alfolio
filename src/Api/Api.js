import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNSecureStorage from 'rn-secure-storage';

export const getData = async (url, options) => {
  const val = await getUserTokenData();
  const res = await axios
    .get(url, {
      headers: { Authorization: `Bearer ${val}`, ...options },
    })
    .catch(err => {
      console.log(err, 'error');
      return err;
    });
  return res;
};

export const postData = async (url, data) => {
  const val = await getUserTokenData();
  const res = await axios.post(url, data, {
    headers: { Authorization: `Bearer ${val}` },
  })
    .catch(err => {
      console.log(err, 'error');
      return err;
    });
  // console.log(res.message);
  return res;
};

export const putData = async (url, data) => {
  const val = await getUserTokenData();

  const res = await axios
    .put(url, data, {
      headers: { Authorization: `Bearer ${val}` },
    })
    .catch(err => {
      console.log(err, 'error');
      return err;
    });
  return res.data;
};

export const DeletData = async (url, data) => {
  const val = getUserTokenData();

  const res = await axios
    .delete(url, {
      headers: { Authorization: `Bearer ${val}` },
    })
    .catch(err => {
      console.log(err, 'error');
      return err;
    });
  return res.data;
};

export const getUserTokenData = async () => {
  try {
    const exist = await RNSecureStorage.exists('userToken');
    if (exist) {
      const res = await RNSecureStorage.get("userToken");
      return res;
    }
  } catch (error) {
    console.error(error);
  }
};

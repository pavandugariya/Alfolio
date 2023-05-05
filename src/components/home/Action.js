import {useEffect, useState} from 'react';
import {getData} from '../../Api/Api';
import {useNavigation} from '@react-navigation/native';
import {base_url} from '../../../env';
import {useSelector} from 'react-redux';

export const useHomeAction = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const profileData = useSelector(state => state.ProfileR);
  console.log(profileData);
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
  // useEffect(() => {
  //   _categoriesDataHadler();
  //   // ProfileHandler();
  // }, []);
  const _toggleHandler = () => {
    navigation.openDrawer();
  };
  // const _categoriesDataHadler = async () => {
  //   try {
  //     const res = await getData(`${base_url}/partners/categories`);
  //     // console.log('response data', res.data);
  //     setCategoryData(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return {isLoading, categoryData, _toggleHandler, Array, navigation};
};

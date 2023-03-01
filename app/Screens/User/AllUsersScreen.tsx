/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {ScrollView, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {allUser_styles} from '../../Utils/Styles';
import SearchBar from '../../Components/User/SearchBar';
import UserItem from '../../Components/User/UserItem';
import {useNavigation} from '@react-navigation/native';
import {
  appStackNavigationType,
  rootStackNavigationType,
} from '../../Models/Navigation';

const listData = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    subtitle: 'Hey there, how are you?',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    subtitle: 'Where are you?',
  },
  {
    name: 'Jenifar Lawrence',
    avatar_url:
      'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg',
    subtitle: 'I am good, how are you?',
  },
  {
    name: 'Tom Holland',
    avatar_url:
      'https://static.toiimg.com/thumb.cms?msid=80482429&height=600&width=600',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    name: 'Robert',
    avatar_url:
      'https://expertphotography.b-cdn.net/wp-content/uploads/2020/05/male-poses-squint.jpg',
    subtitle: 'Where does it come from?',
  },
  {
    name: 'downey junior',
    avatar_url:
      'https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-marlon.jpg',
    subtitle: 'Where can I get some?',
  },
  {
    name: 'Ema Watson',
    avatar_url:
      'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    subtitle: 'I am good, how are you?',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    subtitle:
      ' If you use this site regularly and would like to help keep the site',
  },
  {
    name: 'Jenifar Lawrence',
    avatar_url:
      'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg',
    subtitle: 'Why do we use it?',
  },
  {
    name: 'Tom Holland',
    avatar_url:
      'https://static.toiimg.com/thumb.cms?msid=80482429&height=600&width=600',
    subtitle:
      ' If you use this site regularly and would like to help keep the site',
  },
];

const AllUsersScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredItems, setFilteredItems] = useState(listData);
  const appNavigation = useNavigation<appStackNavigationType>();

  const searchFilterFunction = (text: string) => {
    if (text) {
      const newData = listData.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredItems(newData);
    } else {
      setFilteredItems(listData);
    }
  };

  useEffect(() => {
    searchFilterFunction(search);
  }, [search]);

  return (
    <View style={allUser_styles.container}>
      <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
        <SearchBar
          icon={'md-search-outline'}
          type={undefined}
          value={search}
          onChangeText={text => setSearch(text)}
          placeholder="Search user to chat"
          styles={undefined}
        />
        <Image
          source={{
            uri: 'https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-marlon.jpg',
          }}
          style={allUser_styles.userImage}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={allUser_styles.contentContainer}>
          {filteredItems.map(item => (
            <UserItem
              avatar_url={item.avatar_url}
              name={item.name}
              onPress={() => {
                appNavigation.navigate('ChatScreen');
              }}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AllUsersScreen;

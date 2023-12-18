import { ScrollView, StyleSheet, View, TextInput, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { React, useEffect, useState } from 'react';
import { setKingdoms } from '../store/kingdomSlice';
import KingdomItem from '../components/KingdomItem';
import { Api } from '../api';

export default function KingdomsFeed({ navigation }) {
  const api = new Api();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const kingdoms = useSelector((store) => {
    return store.kingdom.kingdoms;
  });

  useEffect(() => {
      async function getAllKingdoms() {
        dispatch(setKingdoms(await api.getKingdomsByName(searchText)));
      }
      getAllKingdoms();
  }, [dispatch, searchText]);

  return (
      <ScrollView>
          <View style={styles.page}>
            <View style={styles.kingdomInputView}>
              <Text style={styles.textBase1Medium}>Княжество:</Text>
              <TextInput
                style={styles.kingdomInputField}
                onChangeText={text => setSearchText(text)}
                value={searchText}
              />
            </View>
              {!!kingdoms && 
              kingdoms.map((kingdom) => <KingdomItem key={kingdom.ID} {...kingdom} navigation={navigation} />)}
           </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BFFF',
  },

  kingdomInputView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  kingdomInputField: {
    height: 40, 
    width: 100,
    borderColor: '#F0FFFF', 
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
  },

  textBase1Medium: {
    fontSize: 25,
  },

});
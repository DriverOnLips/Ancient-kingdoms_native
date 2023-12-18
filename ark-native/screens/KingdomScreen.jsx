import { View, Text, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { resetKingdom, setKingdom } from '../store/kingdomSlice';
import { Api } from '../api';

export default function KingdomScreen({ route }) {
  const api = new Api();
  const dispatch = useDispatch();
  const { id } = route.params;
  const { kingdom } = useSelector((store) => store.kingdom);

  useEffect(() => {
    async function getOneKingdom() {
      dispatch(setKingdom(await api.getKingdomByID(id)));
    }
    getOneKingdom();
    return () => {
        dispatch(resetKingdom());
    };
  }, [dispatch]);

  return (
    <View>
      <Text>{kingdom.Name}</Text>
      <Image
        style={styles.image}
        src={ kingdom.Image }
        resizeMode='contain'
      />
      <View style={styles.container}>
        <Text style={styles.brandTitle}>{kingdom.Name}</Text>
        <View style={styles.row}>
          <Text style={styles.text}>{kingdom.Capital}</Text>
          <Text style={styles.text}>{kingdom.State}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
      width: 320,
      backgroundColor: '#303030',
      borderRadius: 12,
      padding: 24,
      gap: 12,
      margin: 8,
  },
  image: { height: 320, alignSelf: 'stretch' },
  container: { display: 'flex', width: '100%', margin: 8 },
  row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
  brandTitle: { color: '#4287f5', fontSize: 16 },
  text: { color: '#f0f0f0', fontSize: 16 },
});
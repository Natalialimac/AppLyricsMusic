import React,{useEffect} from 'react';
import {SafeAreaView, View, VirtualizedList, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import db from '../database';

const DATA = [];

const getData = () => {
  db.transaction((tx)=>{
    tx.executeSql(
      "SELECT * FROM MusicHistory",
      [],
      (tx, results) => {
        var len = results.rows.length;
        for(let i=0; i<len; i++){
          var musicHistory = results.rows.item(i);
          DATA.push(musicHistory);
        }
      }
    )
  })
}

useEffect(getData(),[])

const getItem = (data, index) => ({
 id: Math.random().toString(12).substring(0),
 title: `Música: ${DATA[index + 1].music} Artista: ${DATA[index + 1].music}`,
});

const getItemCount = data => DATA.length;

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Historic = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={() => navigation.navigate('/')}
        title="Voltar"
        color="#268596"
      />
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
};
export default Historic;

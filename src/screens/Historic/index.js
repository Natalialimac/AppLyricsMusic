import React from 'react';
import {SafeAreaView, View, VirtualizedList, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const DATA = [];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Música ${index + 1} Artista`,
});

const getItemCount = data => 5;

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

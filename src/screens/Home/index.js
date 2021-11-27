import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {TextInput, Text, SafeAreaView, ScrollView, Button} from 'react-native';
import {styles} from './styles';
import db from '../../database/dbManager';

const Home = () => {
  const [artist, setArtist] = useState('');
  const [music, setMusic] = useState('');
  const [text, setText] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    console.log('start create table');
    createTable();
    console.log('finish create table');
  },[]);

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'MusicHistory ' +
          '( ' +
          'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
          'title TEXT, ' +
          'artist TEXT ' +
          ') ',
      );
    });
  };

  const handleOnSearch = () => {
    axios
      .get(
        'https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa&art=' +
          artist +
          '&mus=' +
          music,
      )
      .then(res => {
        if (
          res.data.type === 'notfound' ||
          res.data === undefined ||
          res.data.mus === undefined
        ) {
          setText('Nenhuma música encontrada com essas informações');
        } else if (res.data.mus.length > 0) {
          setText(res.data.mus[0].text);
          db.transaction(tx => {
            tx.executeSql(
              'INSERT INTO MusicHistory (title, artist) VALUES (?, ?)',
              [music, artist],
            );
          });
          console.log('data inserted');
        }
      });
  };

  const handleOnArtistChange = e => {
    setArtist(e);
  };

  const handleOnMusicChange = e => {
    setMusic(e);
  };

  return (
    <SafeAreaView style={styles.area}>
      <Text style={styles.text1}>LetraMusic</Text>
      <TextInput
        style={styles.input}
        onChangeText={e => handleOnArtistChange(e)}
        value={artist}
        placeholder="Nome do artista"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={e => handleOnMusicChange(e)}
        value={music}
        placeholder="Nome da música"
        keyboardType="text"
      />
      <Button onPress={handleOnSearch} title="Procurar" color="#268596" />

      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>{text}</Text>
      </ScrollView>

      <Button
        onPress={() => navigation.navigate('Historic')}
        title="Histórico"
        color="#268596"
      />
    </SafeAreaView>
  );
};

export default Home;

import React, {useState} from 'react';
import axios from 'axios';
import {
  TextInput,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  View,
} from 'react-native';
import {styles} from './styles';

const Home = () => {
  const [artist, setArtist] = useState('');
  const [music, setMusic] = useState('');
  const [text, setText] = useState('');

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
    </SafeAreaView>
  );
};

export default Home;

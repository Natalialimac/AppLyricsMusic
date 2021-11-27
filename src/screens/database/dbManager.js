import SQLite from 'react-native-sqlite-storage';

export default db = SQLite.openDatabase(
  {
    name: 'AppMusicDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  },
);
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { getLatestGames } from './lib/metacritic';

export default function App() {
  
  const [games, setGames] = useState([]);

  useEffect( () => {
    getLatestGames().then( (games) => {
      setGames(games);
    }).catch( (error) => {
      console.error('error al obtener los juegos', error)
    })

  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {games.length === 0 ? (
        <Text>No hay juegos disponibles</Text>
      ) : (
        games.map((dataGame) => (
        <View key={dataGame.slug} style={styles.card}>
          <Image
            source={{ uri: dataGame.image }}
            style={styles.image}
          />

          <Text style={styles.title}>{dataGame.title}</Text>
          <Text style={styles.description}>{dataGame.description}</Text>
          <Text style={styles.score}>{dataGame.score}</Text>

        </View>
      )))
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorText: {
    color: 'black'
  },
  card: {
    marginBottom: 20
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  description: {
    fontSize: 16,
    color: 'black',
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 10,
  }


});

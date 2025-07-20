import { useEffect, useState } from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { getLatestGames } from '../lib/metacritic';
import { GameCard } from './GameCard';

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect( () => {
    getLatestGames().then( (games) => {
      setGames(games);
    }).catch( (error) => {
      console.error('error al obtener los juegos', error)
    })

  }, [])

  return (
    <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>

      {games.length === 0 ? (
        <ActivityIndicator color={'black'} size={'large'}/>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({item}) => <GameCard dataGame={item}/>}
        />
      )}

      
    </View>
  );
}

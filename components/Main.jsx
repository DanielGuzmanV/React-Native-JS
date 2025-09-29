import { useEffect, useState } from 'react';
import {ActivityIndicator, FlatList } from 'react-native';
import Screen from './Screen';

import { getLatestGames } from '../lib/metacritic';
import { AnimatedGameCard} from './GameCard';

export function Main() {
  const [games, setGames] = useState([]);

  useEffect( () => {
    getLatestGames().then( (games) => {
      setGames(games);
    }).catch( (error) => {
      console.error('error al obtener los juegos', error)
    })

  }, [])

  return (
    <Screen>
      {games.length === 0 ? (
        <ActivityIndicator color={'black'} size={'large'}/>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({item, index}) => (
            <AnimatedGameCard game={item} index={index}/>
          )}
        />
      )}
    </Screen>
  );
}

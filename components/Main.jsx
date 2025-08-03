import { useEffect, useState } from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { getLatestGames } from '../lib/metacritic';
import { AnimatedGameCard} from './GameCard';
import { Logo } from './ReactLogo';

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
      
      <View className="pb-2 flex-row items-center">
        <Logo/>
        <Text className="ml-2 font-bold text-xl text-sky-300">
          Fundamentos de React
        </Text>
      </View>

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

      
    </View>
  );
}

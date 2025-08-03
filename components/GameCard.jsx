import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated} from 'react-native';
import { Score } from './Score';

export function GameCard({dataGame}) {
  return (
    <View className="flex-row bg-slate-400 p-4 rounded-xl mb-10" style={styles.card}>
      <Image source={{ uri: dataGame.image }} style={styles.image} />

      <View>
        <Text className="mb-1" style={styles.title}>
          {dataGame.title}
        </Text>
        
        <Score score={dataGame.score} maxScore={100}/>

        <Text className="mt-2 flex-shrink" style={styles.description}>
          {dataGame.description}
        </Text>
      </View>
      
    </View>
  )
}

export function AnimatedGameCard({game, index}) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,

    }).start();
  }, [opacity, index])

  return (
    <Animated.View style={{opacity}}>
      <GameCard  dataGame={game}/>
    </Animated.View>
  )

}

const styles = StyleSheet.create({
  
  colorText: {
    color: 'black'
  },
  card: {
    marginBottom: 50
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


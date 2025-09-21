import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated, Pressable} from 'react-native';
import { Score } from './Score';
import { Link } from 'expo-router';

import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

export function GameCard({dataGame}) {
  return (

    <Link asChild href={`/${dataGame.slug}`}>
      <StyledPressable className="active:opacity-70 border-black
        active:border-white/50 mb-4 mx-3 bg-sky-300/50 p-2 rounded-xl">
        <View className="flex-row gap-3" key={dataGame.slug}>
          <Image 
            alt='Imagen del juego'
            source={{ uri: dataGame.image }} 
            style={styles.image} 
          />

          <View className="flex-shrink">
            <Text className="mb-2" style={styles.title}>
              {dataGame.title}
            </Text>
            
            <Score score={dataGame.score} maxScore={100}/>

            <Text className="mt-2 flex-shrink" style={styles.description}>
              {dataGame.description}
            </Text>
          </View>
          
        </View>
      </StyledPressable>
    </Link>

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


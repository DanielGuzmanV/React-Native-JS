import { useLocalSearchParams, Stack } from "expo-router";
import { Text, View, Image, ActivityIndicator, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import Screen from "../components/Screen";

export default function Detail() {
  const params = useLocalSearchParams();
  const gameslug = Array.isArray(params.gameslug) ? params.gameslug[0] : params.gameslug;
  const [game, setGame] = useState(null);

  useEffect(() => {
    getGameDetails(gameslug)
      .then(setGame)
  }, [gameslug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "yellow" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "Volver atras",
          headerRight: () => {},
        }}
      />

      {!game ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <ScrollView className="flex-1">
          <View className="items-center p-6">
            <Image
              source={{ uri: game.img }}
              style={{
                width: 200,
                height: 300,
                borderRadius: 12,
                marginBottom: 16,
              }}
            />
            <Text className="text-black font-bold mb-4 text-2xl">
              {game.title}
            </Text>
            <Text className="mb-4 text-slate-700">{game.description}</Text>
          </View>
        </ScrollView>
      )}
    </Screen>
  );
}


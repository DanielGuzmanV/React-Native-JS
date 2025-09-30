import { Link, useLocalSearchParams, Stack } from "expo-router";
import { Text, View } from "react-native";
import Screen from "../components/Screen";

export default function Detail() {
  const {gameslug} = useLocalSearchParams();

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: "yellow"},
          headerTintColor: "black",
          headerLeft: ()=>{},
          headerTitle: "Volver atras",
          headerRight: () => {},
        }}
      />

      <View>
        <Text className="text-black font-bold mb-8 text-2xl">
          Detalle del juego {gameslug}
        </Text>
        
        <Link href="/" className="text-blue-500">
          Volver atras
        </Link>
      </View>
    </Screen>
  );
}


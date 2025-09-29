import { Text, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../components/Icons";
import Screen from "../components/Screen";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/" className="pt-6">
          <Pressable>{({ pressed }) => <HomeIcon style={{opacity: pressed ? 0.5: 1}} />}</Pressable>
        </Link>

        <Text className="text-slate-700 font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>

        <Text className="text-slate-600 mb-4">
          In exercitation fugiat Lorem minim laborum ipsum. In exercitation fugiat
          Lorem minim laborum ipsum. In exercitation fugiat Lorem minim laborum
          ipsum.
        </Text>

        <Text className="text-slate-600 mb-4">
          In exercitation fugiat Lorem minim laborum ipsum. In exercitation fugiat
          Lorem minim laborum ipsum. In exercitation fugiat Lorem minim laborum
          ipsum.
        </Text>

        <Text className="text-slate-600 mb-4">
          In exercitation fugiat Lorem minim laborum ipsum. In exercitation fugiat
          Lorem minim laborum ipsum. In exercitation fugiat Lorem minim laborum
          ipsum.
        </Text>

        <Text className="text-slate-600 mb-4">
          In exercitation fugiat Lorem minim laborum ipsum. In exercitation fugiat
          Lorem minim laborum ipsum. In exercitation fugiat Lorem minim laborum
          ipsum.
        </Text>

        <Text className="text-slate-600 mb-4">
          In exercitation fugiat Lorem minim laborum ipsum. In exercitation fugiat
          Lorem minim laborum ipsum. In exercitation fugiat Lorem minim laborum
          ipsum.
        </Text>
      </ScrollView>
    </Screen>
  );
}
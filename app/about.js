import { Text, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <ScrollView>

      <Link href="/" className="text-blue-400 text-xl mt-24">
        Ir al main
      </Link>

      <Text className="text-slate-700 font-bold mb-8 text-2xl">
        Sobre el proyecto
      </Text>

      <Text className="text-slate-600 mb-4">
        In exercitation fugiat Lorem minim laborum ipsum.
        In exercitation fugiat Lorem minim laborum ipsum.
        In exercitation fugiat Lorem minim laborum ipsum.
      </Text>

      <Text className="text-slate-600 mb-4">
        In exercitation fugiat Lorem minim laborum ipsum.
        In exercitation fugiat Lorem minim laborum ipsum.
        In exercitation fugiat Lorem minim laborum ipsum.
      </Text>

      <Text className="text-slate-600 mb-4">
        In exercitation fugiat Lorem minim laborum ipsum.
        In exercitation fugiat Lorem minim laborum ipsum.
        In exercitation fugiat Lorem minim laborum ipsum.
      </Text>

      <Text className="text-slate-600 mb-4">
        In exercitation fugiat Lorem minim laborum ipsum.
        In exercitation fugiat Lorem minim laborum ipsum.
        In exercitation fugiat Lorem minim laborum ipsum.
      </Text>

      <Text className="text-slate-600 mb-4">
        In exercitation fugiat Lorem minim laborum ipsum.
        In exercitation fugiat Lorem minim laborum ipsum.
        In exercitation fugiat Lorem minim laborum ipsum.
      </Text>

    </ScrollView>
  )
}
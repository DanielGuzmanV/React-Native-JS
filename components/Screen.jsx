import { View } from "react-native";

export default function Screen({children}) {
  return <View className="flex-1 bg-gray-100 pt-6 px-2">{children}</View>
}
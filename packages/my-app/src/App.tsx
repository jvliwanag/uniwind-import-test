import "./global.css";

import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="bg-global flex-1 items-center justify-center">
      <View className="bg-themedirective p-2">
        <View className="bg-themevariant p-2">
          <View className="bg-mythemefixed p-2">
            <View className="bg-mythemevariant p-2">
              <Text>Open up App.tsx to start working on your app!</Text>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

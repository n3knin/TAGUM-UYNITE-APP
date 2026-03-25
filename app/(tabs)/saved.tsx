import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const saved = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-lime-950 items-center justify-center">
        <Text className="text-2xl font-bold text-white">Saved</Text>
      </View>
    </SafeAreaView>
  );
};

export default saved;

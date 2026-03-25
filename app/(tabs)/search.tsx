import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const search = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-black items-center justify-center">
        <Text className="text-2xl font-bold text-white">Search</Text>
      </View>
    </SafeAreaView>
  );
};

export default search;

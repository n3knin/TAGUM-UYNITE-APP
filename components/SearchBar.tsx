import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";
const SearchBar = () => {
  return (
    <View className="flex-row items-center bg-slate-600 rounded-full px-5 py-4 gap-2">
      <Image source={icons.search} className="size-5" tintColor="#ab8bff" />
      <TextInput
        placeholder="Search..."
        onPress={() => {}}
        className="text-white placeholder:text-slate-400"
        value=""
      />
    </View>
  );
};

export default SearchBar;

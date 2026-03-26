import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React from "react";
import { Image, ScrollView, View } from "react-native";
import SearchBar from "../../components/SearchBar";
export default function Index() {
  return (
    <View className="bg-slate-800 flex-1">
      {/* <Text>buangka</Text> */}
      <Image source={images.bg} className="absolute w-full z-0" />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%" }}
      >
        <Image source={icons.logo} className="w-12 h-12 mx-auto mt-20" />

        <View className="mt-5">
          <SearchBar />
        </View>
      </ScrollView>
    </View>
  );
}

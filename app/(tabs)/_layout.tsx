import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text } from "react-native";

const Highlight = ({ label, icon, focused }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex-row overflow-hidden w-full flex-1 min-w-[112px] min-h-14 mt-4 items-center justify-center rounded-full"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="font-semibold ml-1 color-black">{label}</Text>
      </ImageBackground>
    );
  } else {
    return (
      <ImageBackground className="flex-row overflow-hidden w-full flex-1 min-w-[112px] min-h-14 mt-4 items-center justify-center rounded-full">
        <Image source={icon} tintColor="#ffff" className="size-5" />
      </ImageBackground>
    );
  }
};

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#1e1e1e",
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "home",

          tabBarIcon: ({ focused }) => (
            <Highlight label="Home" focused={focused} icon={icons.home} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="search"
        options={{
          title: "search",

          tabBarIcon: ({ focused }) => (
            <Highlight label="Search" focused={focused} icon={icons.search} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="saved"
        options={{
          title: "saved",
          tabBarIcon: ({ focused }) => (
            <Highlight label="Saved" focused={focused} icon={icons.save} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: ({ focused }) => (
            <Highlight label="Profile" focused={focused} icon={icons.person} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default Layout;

import React from "react";
import * as Icon from "react-native-feather";
import Catrgories from "../components/categories";
import FeaturedRow from "../components/featuredRow";
import { View, Text, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { themeColors } from "../theme";
import { featured } from "../constants/featured";


export default function HomeScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"} />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 item-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurant" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-1-2 pl-1 border-1-gray-300">
            <Icon.MapPin height="20" width={"20"} stroke={"gray"} />
            <Text className="text-gray-600">EIU, Binh Duong</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 bd-gray-300 rounded-full"
        >
          <Icon.Sliders
            height={"20"}
            width={"20"}
            strokeWidth={2.5}
            stroke={"white"}
          />
        </View>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <Catrgories />
        <View className="mt-5">
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                description={item.description}
                restaurants={item.restaurants}
                
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

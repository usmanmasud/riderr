import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "@/constants";
import { useUser } from "@clerk/clerk-expo";

const Header = () => {
  const { user } = useUser();
  const handleSignOut = () => {};

  return (
    <View>
      <View className="flex flex-row items-center justify-between my-5">
        <Text className="text-xl capitalize font-JakartaExtraBold">
          Welcome{" "}
          {user?.firstName ||
            user?.emailAddresses[0].emailAddress.split("@")[0]}
          👋{" "}
        </Text>
      </View>
    </View>
  );
};

export default Header;

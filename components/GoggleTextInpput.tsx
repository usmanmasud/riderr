import { View, Text } from "react-native";
import React from "react";
import GoogleTextInput from "./GoogleTextInput";
import { icons } from "@/constants";

const GoggleTextInpput = () => {
  const handleDestinationPress = () => {};

  return (
    <View>
      {/* google text input */}
      <GoogleTextInput
        icon={icons.search}
        containerStyle="bg-[#2f80ed] shadow-md shadow-neutral-300"
        handlePress={handleDestinationPress}
      />
    </View>
  );
};

export default GoggleTextInpput;

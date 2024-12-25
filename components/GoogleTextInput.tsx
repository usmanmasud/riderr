import { View, Text, Image } from "react-native";
import React from "react";
import { GoogleInputProps } from "@/types/types";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { icons } from "@/constants";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const googlePlacesApiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

const GoogleTextInput = ({
  icon,
  containerStyle,
  initialLocation,
  handlePress,
  textInputBackgroundColor,
}: GoogleInputProps) => {
  return (
    <View
      className={`flex flex-row items-center justify-center relative z-50 ${containerStyle} mb-5`}
    >
      <GooglePlacesAutocomplete
        fetchDetails={true}
        placeholder="Where to go?"
        debounce={200}
        styles={{
          textInputContainer: {
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            marginHorizontal: 20,
            position: "relative",
            shadowColor: "#d4d4d4",
            backgroundColor: "#fff",
            paddingHorizontal: 7,
          },
          textInput: {
            backgroundColor: textInputBackgroundColor || "#fff",
            fontSize: 16,
            fontWeight: 300,
            marginTop: 5,
            width: "100%",
            borderRadius: 200,
          },

          listViewStyles: {
            backgroundColor: textInputBackgroundColor || "white",
            position: "relative",
            top: 0,
            width: "100%",
            borderRadius: 10,
            shadowColor: "d4d4d4",
            zIndex: 99,
          },
        }}
        onPress={(data, details = null) => {
          handlePress({
            latitude: details?.geometry.location.lat!,
            longitude: details?.geometry.location.lng!,
            address: data.description,
          });
        }}
        query={{
          key: googlePlacesApiKey,
          language: "en",
        }}
        renderLeftButton={() => (
          <View className="justify-center items-center">
            <Ionicons name="location-sharp" size={24} color="#000" />
          </View>
        )}
        textInputProps={{
          placeholderTextColor: "#000",
          placeholder: initialLocation ?? "Delivery location?",
        }}
      />
    </View>
  );
};

export default GoogleTextInput;

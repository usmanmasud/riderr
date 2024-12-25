import { View, Text, StyleSheet } from "react-native";
import React from "react";
import GoogleTextInput from "@/components/GoogleTextInput";
import RideLayout from "@/components/RideLayout";

const request = () => {
  return (
    // <View style={styles.headerContainer}>
    //   <GoogleTextInput />
    // </View>
    <View>
      <RideLayout title="">
        <View></View>
      </RideLayout>
    </View>
  );
};

export default request;

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    marginTop: 35,
  },
});

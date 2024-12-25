import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import GoogleTextInput from "./GoogleTextInput";

const IndividualHeader = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <View style={styles.locationContainer}>
            <Ionicons name="location-sharp" size={20} color="white" />
            {/* <Text style={styles.location}>Kano State, Nigeria</Text> */}
            {/* <GoogleTextInput /> */}
          </View>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <Ionicons name="notifications" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#2f80ed",
    width: "90%",
    height: 55,
    borderRadius: 10,
    padding: 10,
  },
  headerTextContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 4,
  },
  location: {
    fontSize: 14,
    color: "white",
    marginLeft: 5,
  },
  notificationIcon: {
    marginLeft: 5,
  },
  text: {
    fontSize: 16,
    color: "white",
    // marginBottom: 20,
  },
});

export default IndividualHeader;

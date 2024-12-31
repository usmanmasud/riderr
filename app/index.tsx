import React from "react";
import { Redirect } from "expo-router";

const Home = () => {
  // if (isSignedIn) {
  //   return <Redirect href={"/(root)/(tabs)/home"} />;
  // }

  return <Redirect href="/(root)/(tabs)/home" />;
};

export default Home;

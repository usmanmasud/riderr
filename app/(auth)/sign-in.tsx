import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";
import { useRouter } from "expo-router";

const singIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const onSignInPress = async () => {
    console.log("sign in");
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[200px]">
          {/* <Image source={images.signUpCar} className="z-0 w-full h-[250px]" /> */}
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Login to your account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter your email"
            textContentType="emailAddress"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) =>
              setForm({
                ...form,
                email: value,
              })
            }
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            textContentType="password"
            secureTextEntry={true}
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) =>
              setForm({
                ...form,
                password: value,
              })
            }
          />
          <Link href="/" className="text-lg text-right text-general-200 mt-2">
            <Text>Forget password</Text>
          </Link>
          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            className="mt-6"
          />

          {/* goAuth */}
          <OAuth />

          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Dont' have an account? </Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
        {/* verification module */}
      </View>
    </ScrollView>
  );
};

export default singIn;

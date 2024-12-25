import { Link, router, Tabs } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        // tabBarActiveTintColor: "#2f80ed",
        // tabBarInactiveTintColor: "#2f80ed",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          padding: 0,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="chatbubble" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="request"
        options={{
          title: "Request",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="add-circle" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: "Rides",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

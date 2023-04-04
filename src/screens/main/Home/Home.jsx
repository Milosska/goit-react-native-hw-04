import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { Feather } from "@expo/vector-icons";
import styles from "./Home.styles";

const Home = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Публикации"
        component={PostsScreen}
        options={{
          headerTitleAlign: "center",
          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color="#BDBDBD"
              style={styles.logOut}
            />
          ),
          headerStyle: styles.header,
          headerTitleContainerStyle: styles.headerTitle,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => (
            <Feather name="grid" focused={focused} size={24} color={color} />
          ),
          tabBarActiveTintColor: "#FF6C00",
        }}
      />
      <BottomTab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          headerTitleAlign: "center",
          headerStyle: styles.header,
          headerTitleContainerStyle: styles.headerTitle,
          tabBarShowLabel: false,
          tabBarButton: () => (
            <TouchableOpacity style={styles.plusBarIcon} activeOpacity={0.7}>
              <Feather name="plus" focused="false" size={24} color="#ffffff" />
            </TouchableOpacity>
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => (
            <Feather name="user" focused={focused} size={24} color={color} />
          ),
          tabBarActiveTintColor: "#FF6C00",
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Home;

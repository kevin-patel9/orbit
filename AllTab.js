import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, View, Image } from "react-native";
import Profile from "./Screens/Profile";
import Discover from "./Screens/Discover";
import Create from "./Screens/Create/Create";
import Community from "./Screens/Community";
import Home from "./Screens/Home";

const AllTab = () => {
    const HomeIcon = (tabInfo) => {
        return (
        <View style={styles.iconContainer}>
            <View style={{ zIndex: 2 }}>
                <Ionicons name="home-outline" size={24} color="black" />
            </View>
            <View
            style={[
                styles.iconBackground,
                { backgroundColor: tabInfo.focused ? "lightgrey" : "none" },
            ]}
            />
        </View>
        );
    };

    const DiscoverIcon = (tabInfo) => {
        return (
        <View style={styles.iconContainer}>
            <View style={{ zIndex: 2 }}>
                <AntDesign name="search1" size={24} color="black" />
            </View>
            <View
            style={[
                styles.iconBackground,
                { backgroundColor: tabInfo.focused ? "lightgrey" : "none" },
            ]}
            />
        </View>
        );
    };

    const CreateIcon = (tabInfo) => {
        return (
        <View style={styles.iconContainer}>
            <View style={{ zIndex: 2 }}>
                <AntDesign name="pluscircleo" size={24} color="black" />
            </View>
            <View
            style={[
                styles.iconBackground,
                { backgroundColor: tabInfo.focused ? "lightgrey" : "none" },
            ]}
            />
        </View>
        );
    };

    const CommunityIcon = (tabInfo) => {
        return (
        <View style={styles.iconContainer}>
            <View style={{ zIndex: 2 }}>
                <Ionicons name="people-outline" size={24} color="black" />
            </View>
            <View
            style={[
                styles.iconBackground,
                { backgroundColor: tabInfo.focused ? "lightgrey" : "none" },
            ]}
            />
        </View>
        );
    };
    
    const ProfileIcon = (tabInfo) => {
        return (
        <View style={styles.iconContainer}>
            <View style={{ zIndex: 2 }}>
                <Ionicons name="person-circle-outline" size={24} color="black" />
            </View>
            <View
            style={[
                styles.iconBackground,
                { backgroundColor: tabInfo.focused ? "lightgrey" : "none" },
            ]}
            />
        </View>
        );
    };

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            screenOptions={{
                tabBarStyle: {
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                    position: "absolute",
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: HomeIcon,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Discover"
                component={Discover}
                options={{
                    tabBarIcon: DiscoverIcon,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Create"
                component={Create}
                options={{
                    tabBarIcon: CreateIcon,
                    headerShown: false,
                    unmountOnBlur: true
                }}
            />
            <Tab.Screen
                name="Community"
                component={Community}
                options={{
                    tabBarIcon: CommunityIcon,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Me"
                component={Profile}
                options={{
                    tabBarIcon: ProfileIcon,
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
};

export default AllTab;

const styles = StyleSheet.create({
    iconContainer: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },
    iconBackground: {
        height: 32,
        width: 52,
        position: "absolute",
        borderRadius: 8,
    },
});

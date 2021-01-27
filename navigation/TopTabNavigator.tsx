import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import VideoPlayerScreen from '../screens/VideoPlayerScreen'
import { BottomTabParamList, TabOneParamList, TabTwoParamList, VideoPlayerParamList } from '../types';

const TopTab = createMaterialTopTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator
      initialRouteName="VideoPlayer"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <TopTab.Screen
        name="VideoPlayer"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="play" color={color} />,
        }}
      />
      <TopTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="watch" color={color} />,
        }}
      />
    </TopTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const VideoPlayerStack = createStackNavigator<VideoPlayerParamList>();

function VideoPlayerNavigator() {
  return (
    <VideoPlayerStack.Navigator screenOptions={{headerShown:false}}>
      <VideoPlayerStack.Screen
        name="VideoPlayerScreen"
        component={VideoPlayerScreen}


      />
    </VideoPlayerStack.Navigator>
  );
}
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator screenOptions={{headerShown:false}}>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator screenOptions={{headerShown:false}}>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

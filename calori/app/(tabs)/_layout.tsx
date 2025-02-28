import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import colors from '@/constants/Colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const _layout = () => {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: colors.primaryBlue, tabBarLabelStyle: {fontFamily: 'mon-sb'}}}>
        <Tabs.Screen name="index" options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({size, color}) => <FontAwesome name='home' size={size} color={color} />,
            
        }}/>
        <Tabs.Screen name="foods" options={{
            tabBarLabel: 'Food',
            tabBarIcon: ({size, color}) => <Ionicons name='fast-food-sharp' size={size} color={color} />,
        }}/>
        <Tabs.Screen name="recipes" options={{
            tabBarLabel: 'Recipes',
            tabBarIcon: ({size, color}) => <FontAwesome5 name="utensils" size={size} color={color} />,
        }}/>
        <Tabs.Screen name="profile" options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({size, color}) => <Ionicons name='person-circle-sharp' size={size} color={color} />,
        }}/>
    </Tabs>
  )
}

export default _layout
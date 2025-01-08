import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '@/constants/Colors';
import { useAppDispatch } from '../hooks/hooks';
import { addFood, setGoal } from '../store/store';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';

const Page = () => {
  const [goalValue, setGoalValue] = useState('')
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handlePress = () => {
    if (!goalValue) {
      // If either is empty, show an alert and return
      Alert.alert("Please fill in a goal")
      return;
    }

    dispatch(setGoal(parseInt(goalValue)))
    setGoalValue('');

    router.push('/(tabs)');
  }
  
  return (
    <View>
      <Text>Goal:</Text>
      <TextInput placeholderTextColor={colors.darkGray} placeholder='Enter Goal' value={goalValue} onChangeText={setGoalValue}></TextInput>
      <TouchableOpacity onPress={handlePress}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>

    // send dispatcch
    // close modal
  )
}

export default Page

const styles = StyleSheet.create({})
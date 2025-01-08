import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '@/constants/Colors';
import { useAppDispatch } from '../hooks/hooks';
import { addFood } from '../store/store';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';

const Page = () => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('')
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handlePress = () => {
    if (!name || !calories) {
      // If either is empty, show an alert and return
      Alert.alert("Please fill in all inputs")
      return;
    }

    dispatch(addFood({ name: name, calories: parseInt(calories) }))
    setName('')
    setCalories('')

    router.push('/(tabs)/foods');
  }
  
  return (
    <View>
      <Text>Name:</Text>
      <TextInput placeholderTextColor={colors.darkGray} placeholder='Enter Name' value={name} onChangeText={setName}></TextInput>
      <Text>Calories: </Text>
      <TextInput placeholderTextColor={colors.darkGray} placeholder='Enter Calories ' keyboardType="numeric" value={calories} onChangeText={setCalories}></TextInput>
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
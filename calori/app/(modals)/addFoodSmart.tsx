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


  

  async function getNutrition() {
    try {
      const response = await fetch('https://api.calorieninjas.com/v1/nutrition?query=' + encodeURIComponent(name) + '%20' + encodeURIComponent(calories), {
        method: 'GET',
        headers: {
          'X-Api-Key': 'q9a1CqIZfmyItntVY+/rEw==FK14j3Voy0ME6v8a', // Replace with your actual API key
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(`Name:, ${result.items[0].name}`);
      console.log(`Calories:, ${result.items[0].calories}`);
      console.log(`protein_g:, ${result.items[0].protein}`);
      console.log(`carbohydrates_total_g:, ${result.items[0].carbohydrates_total_g}`);
      console.log(`fat_total_g:, ${result.items[0].fat_total_g}`);
      setName(result.items[0].name);
      setCalories(result.items[0].calories);
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  }


  const handlePress = () => {
    if (!name || !calories) {
      // If either is empty, show an alert and return
      Alert.alert("Please fill in all inputs")
      return;
    }

    getNutrition();

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
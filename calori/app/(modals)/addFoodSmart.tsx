import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '@/constants/Colors';
import { useAppDispatch } from '../hooks/hooks';
import { addFood } from '../store/store';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';

const Page = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('')
  const [calories, setCalories] = useState(0);
  const router = useRouter();

  const dispatch = useAppDispatch();


  

  async function getNutrition() {
    try {
      const response = await fetch('https://api.calorieninjas.com/v1/nutrition?query=' + encodeURIComponent(name + " " + amount), {
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
      console.log(`Name: ${result.items[0].name}`);
      console.log(`Calories: ${result.items[0].calories}`);
      console.log(`protein_g: ${result.items[0].protein}`);
      console.log(`carbohydrates_total_g: ${result.items[0].carbohydrates_total_g}`);
      console.log(`fat_total_g: ${result.items[0].fat_total_g}`);
      // setName(result.items[0].name);
      // setCalories(result.items[0].calories);
      return (
        {
          name: result.items[0].name,
          calories: result.items[0].calories
        }
      )
      
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  }


  const handlePress = async () => {
    if (!name || !amount) {
      // If either is empty, show an alert and return
      Alert.alert("Please fill in all inputs")
      return;
    }

    const asyncval = await getNutrition();

    dispatch(addFood({ name: asyncval?.name, calories: asyncval?.calories }))

    setName('')
    setAmount('')

    router.push('/(tabs)/foods');
  }
  
  return (
    <View>
      <Text>Name:</Text>
      <TextInput placeholderTextColor={colors.darkGray} placeholder='Enter Name' value={name} onChangeText={setName}></TextInput>
      <Text>Amount: </Text>
      <TextInput placeholderTextColor={colors.darkGray} placeholder='Enter Amount ' keyboardType="numeric" value={amount} onChangeText={setAmount}></TextInput>
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
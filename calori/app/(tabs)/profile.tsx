import { View, Text, Button } from 'react-native'
import React from 'react'

const page = () => {

  const query = 'chicken sandwich';

  async function getNutrition() {
    try {
      const response = await fetch('https://api.calorieninjas.com/v1/nutrition?query=' + encodeURIComponent(query), {
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
      console.log(`Nutrition Data:, ${result.items[0].calories}`);
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  }
  
  const handlePress = () => {
    getNutrition();
  }
  
  return (
    <View>
      <Text>Profile</Text>
      <Button title="request" onPress={handlePress}/>
    </View>
  )
}

export default page
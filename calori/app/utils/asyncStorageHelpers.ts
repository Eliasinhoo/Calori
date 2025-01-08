import AsyncStorage from "@react-native-async-storage/async-storage";

// Key for AsyncStorage
const FOOD_LIST_STORAGE_KEY = "@food_list";

// Save food list to AsyncStorage
export const saveFoodList = async (foodList: any[]) => {
  try {
    const jsonValue = JSON.stringify(foodList);
    await AsyncStorage.setItem(FOOD_LIST_STORAGE_KEY, jsonValue);
    console.log("Food list saved successfully!");
  } catch (error) {
    console.error("Error saving food list to AsyncStorage:", error);
  }
};

// Load food list from AsyncStorage
export const loadFoodList = async (): Promise<any[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(FOOD_LIST_STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error("Error loading food list from AsyncStorage:", error);
    return [];
  }
};

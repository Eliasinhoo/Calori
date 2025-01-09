import AsyncStorage from "@react-native-async-storage/async-storage";

// Key for AsyncStorage
const FOOD_LIST_STORAGE_KEY = "@food_list";
const GOAL_STORAGE_KEY = "@goal";

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

export const saveGoal = async (goal: number) => {
  try {
    const jsonValue = JSON.stringify(goal);
    await AsyncStorage.setItem(GOAL_STORAGE_KEY, jsonValue);
    console.log("Goal saved successfully:", jsonValue);
  } catch (error) {
    console.error("Error saving goal to AsyncStorage:", error);
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

export const loadGoal = async (): Promise<number> => {
  try {
    const jsonValue = await AsyncStorage.getItem(GOAL_STORAGE_KEY);
    console.log("loadGoal: Retrieved value from AsyncStorage:", jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : 2000; // Default goal
  } catch (error) {
    console.error("Error loading goal from AsyncStorage:", error);
    return 2000; // Default goal in case of errors
  }
};


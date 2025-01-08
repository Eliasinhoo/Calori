import React from "react";
import { FlatList, Text, View, StyleSheet, Button } from "react-native";
import { useAppDispatch,useAppSelector } from "../hooks/hooks";
import { removeFood, addFood } from "../store/store";
import colors from "@/constants/Colors";
import { Link } from "expo-router";

const FoodList = () => {
  const dispatch = useAppDispatch();

  // Get the food list from Redux
  const foodList = useAppSelector((state) => state.food.foodList);

  // Render a single food item
  const renderItem = ({ item }: { item: { id: number; name: string; calories: number } }) => (
    <View style={styles.organizer}>
    <View style={styles.listItem}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.calories}>{item.calories} kcal</Text>
      <Button title="Remove" onPress={() => dispatch(removeFood(item.id))} />
    </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={foodList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={<Text style={styles.header}>Food List</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      
      <Link href={'/(modals)/addFood'} asChild>
          <Button title="Manual add" color={colors.primaryBlue} />
      </Link>
      <View style={{padding: 1}}></View>
      <Link href={'/(modals)/addFoodSmart'} asChild>
          <Button title="Smart add" color={colors.primaryBlue} />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    fontFamily: 'mon-sb'
  },
  listItem: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: 'mon-sb'
  },
  calories: {
    fontSize: 14,
    color: "#666",
    fontFamily: 'mon-sb'
  },
  separator: {
    height: 10,
  },
  organizer: {
    flexDirection: 'row'
  }
});

export default FoodList;

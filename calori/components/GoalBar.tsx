import {View, StyleSheet, Pressable} from "react-native";
import colors from "@/constants/Colors";
import { Tracker } from "./Tracker";
import { Link, useRouter } from "expo-router";
import { useAppSelector } from "@/app/hooks/hooks";
import { selectTotalCalories } from "@/app/store/selectors";

export default function GoalBar() {
    
    const eaten = useAppSelector(selectTotalCalories);
    const goal = useAppSelector((state) => state.goal.goal);
    function isNegative(number: number) {
        return number < 0;
      }

    return(
        <View style={styles.container}> 
            <Link href='/(modals)/setGoal'>
                <Tracker title='Goal: ' value={goal} />
            </Link>
            <Tracker title='Eaten: ' value={eaten} />
            <Tracker title='Remaining: ' value={isNegative(goal-eaten)? 0: goal-eaten} />
          
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //flex
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.primaryWhite,
    borderColor: colors.lightGray,
    borderWidth: 1,

},
})


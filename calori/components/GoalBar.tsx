import {View, StyleSheet} from "react-native";
import colors from "@/constants/Colors";
import { Tracker } from "./Tracker";
import { useRouter } from "expo-router";

export default function GoalBar() {
    

      

    return(
        <View style={styles.container}> 
            <Tracker title='Goal: ' value={300} />
            <Tracker title='Eaten: ' value={300} />
            <Tracker title='Remaining: ' value={300} />
          
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


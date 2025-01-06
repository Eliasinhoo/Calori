import { View, Text, StyleSheet } from "react-native"
import colors from "@/constants/Colors";

interface TrackerProps {
    title: string;
    value: number;
  }
  

export const Tracker: React.FC<TrackerProps> = ({title, value}) => {

    return(
        <View style={styles.trackerContainer}>

                <Text style={styles.trackerText}>{title}</Text>
                <Text style={styles.trackerText}>{value}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    trackerContainer: {
        
        padding: 20,
        // borderWidth: 1,
    },
    trackerText: {
        fontFamily: 'mon-sb',
    }

})

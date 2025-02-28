import { View, Text, StyleSheet } from "react-native"
import colors from "@/constants/Colors";

interface TrackerProps {
    title: string;
    value: number;
}


export const Tracker: React.FC<TrackerProps> = ({ title, value }) => {

    return (
        <View style={styles.trackerContainer}>
            <Text style={styles.trackerText}>{value}</Text>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    trackerContainer: {

        padding: 20,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
    },
    trackerText: {
        fontFamily: 'mon-sb',
        fontSize: 17
    },
    titleText: {
        fontFamily: 'mon-sb',
        color: 'grey',
        fontSize: 17
    }


})

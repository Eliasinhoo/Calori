import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { info } from '@/assets/tempData/listinfo'
import * as Progress from 'react-native-progress';
import colors from '@/constants/Colors';

const TrackBar = () => {

    const renderlist = info.map((item) => (
        <View key={item.id} style={styles.listContainer}>

            <View style={styles.verticalTransform}>
                <Progress.Bar progress={item.progress / 100} width={50} height={10} borderColor={colors.primaryWhite} color={colors.primaryBlue} />
            </View>
            <Text style={styles.text}>{item.day}</Text>
            <Text style={styles.dateText}>{item.date}</Text>

        </View>
    ));

    return (
        <View style={styles.box}>
            <View style={styles.weeklyText}>Weekly Progress</View>
            <View style={styles.container}>
                {renderlist}
                <View style={styles.overlayLine} />
            </View>
        </View>
    )
}

export default TrackBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 24,
        padding: 4,
        // borderRadius: 8,
        // backgroundColor: colors.primaryWhite,
        // borderColor: colors.lightGray,
        // borderWidth: 1,

    },
    verticalTransform: {
        transform: [{ rotate: "-90deg" }], // Rotate the progress bar
    },
    listContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        flex: 1,
        paddingTop: 10,
        marginTop: 10,
    },
    text: {
        fontFamily: 'mon-sb',
        paddingTop: 20,
    },
    dateText: {
        fontFamily: 'mon-sb',
    },
    weeklyText: {
        fontFamily: 'mon-sb',
        paddingLeft: 10,
        textAlign: 'left',
        width: '100%',
    },
    box: {
        borderRadius: 8,
        backgroundColor: colors.primaryWhite,
        borderColor: colors.borderGray,
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 20,
        padding: 4,
        marginTop: 10,

        // Android
        elevation: 5,

        // iOS Shadow
        shadowColor: '#000',  // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow position (X, Y)
        shadowOpacity: 0.2,  // Shadow transparency
        shadowRadius: 4,  // Blur effect
    },
    overlayLine: {
        position: 'absolute',
        top: '45%', // Center the line vertically
        left: 0,
        right: 0,
        height: 2, // Thickness of the line
        borderBottomWidth: 2,
        borderColor: colors.darkGray,
        borderStyle: 'dotted',
      },

})
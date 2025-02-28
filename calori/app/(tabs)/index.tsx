import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import colors from '@/constants/Colors'
import GoalBar from '@/components/GoalBar'
import TrackBar from '@/components/TrackBar'
import { useAppSelector } from '../hooks/hooks'
import { selectTotalCalories } from '../store/selectors'
import AntDesign from '@expo/vector-icons/AntDesign';


const page = () => {

    const eaten = useAppSelector(selectTotalCalories);
    const goal = useAppSelector((state) => state.goal.goal);
    const percent = (eaten / goal) * 100;
    const temp = 1;

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={styles.dateRow}>
                    <AntDesign name="left" size={24} color="black" />
                    <View style={styles.centerContent}>
                        <AntDesign name="calendar" size={24} color="black" />
                        <Text style={styles.text}>Today</Text>
                    </View>

                    <AntDesign name="right" size={24} color="black" />
                </View>

                <View style={styles.box}>
                    <GoalBar />
                    <View style={styles.wheel}>
                        <AnimatedCircularProgress
                            size={200}
                            width={20}
                            fill={goal == 0 ? 0 : percent}
                            tintColor={colors.primaryBlue}

                            backgroundColor={colors.lightBlue}
                            backgroundWidth={10}
                            lineCap="round"
                            arcSweepAngle={270}
                            rotation={225}>
                            {
                                (fill) => (
                                    <Text style={styles.text}>
                                        {Intl.NumberFormat('en-US').format(Math.round(fill))}%
                                    </Text>
                                )
                            }
                        </AnimatedCircularProgress>
                    </View>
                </View>

                <TrackBar />
            </View>
        </View>

    )
}

export default page

const styles = StyleSheet.create({
    container: {

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,

    },
    text: {
        fontFamily: 'mon-sb',
        fontSize: 24,
    },
    background: {

        backgroundColor: colors.offWhite,
        paddingHorizontal: 16, // Horizontal padding
        paddingVertical: 20,   // Vertical padding
    },
    wheel: {

        // borderRadius: 8,
        // backgroundColor: colors.primaryWhite,
        // borderColor: colors.lightGray,
        // borderWidth: 1,

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

        // Android
        elevation: 5,

        // iOS Shadow
        shadowColor: '#000',  // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow position (X, Y)
        shadowOpacity: 0.2,  // Shadow transparency
        shadowRadius: 4,  // Blur effect
    },
    divider: {
        height: 1,
        backgroundColor: colors.darkGray,
        marginVertical: 16,
        width: '100%',
        alignSelf: 'stretch',
    },
    dateRow: {
        flexDirection: 'row',
        justifyContent: 'space-between', // space out content across axis
        alignItems: 'center', 
        width: '100%', 
        paddingHorizontal: 16, 
    },
    centerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },


})
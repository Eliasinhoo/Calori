import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import colors from '@/constants/Colors'
import GoalBar from '@/components/GoalBar'
import TrackBar from '@/components/TrackBar'
import { useAppSelector } from '../hooks/hooks'
import { selectTotalCalories } from '../store/selectors'

const page = () => {

    const eaten = useAppSelector(selectTotalCalories);
    const goal = useAppSelector((state) => state.goal.goal);
    const percent = (eaten / goal)*100;

  return (
    <View style={styles.background}>
     <View style={styles.container}> 
        <GoalBar/>
        <View style={styles.wheel}>
            <AnimatedCircularProgress
                size={200}
                width={20}
                fill={percent}
                tintColor={colors.primaryBlue}
                
                backgroundColor={colors.lightBlue}
                backgroundWidth={10}
                lineCap="round"
                arcSweepAngle={270}
                rotation={225}>
                {
                (fill) => (
                    <Text style={styles.text}>
                    { Intl.NumberFormat('en-US').format(Math.round(fill)) }
                    </Text>
                )
                }
            </AnimatedCircularProgress>
        </View>
        <TrackBar/>
      </View>
    </View>
    
  )
}

export default page

const styles = StyleSheet.create({
    container: {
        flex: 1, //flex
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },
    text: {
        fontFamily: 'mon-sb',
        fontSize: 24,
    },
    background: {
        
        backgroundColor: colors.offWhite,
        padding: 26,
    },
    wheel: {
        
        borderRadius: 8,
        backgroundColor: colors.primaryWhite,
        borderColor: colors.lightGray,
        borderWidth: 1,
        
    },

})
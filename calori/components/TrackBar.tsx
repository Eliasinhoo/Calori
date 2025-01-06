import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { info } from '@/assets/tempData/listinfo'
import * as Progress from 'react-native-progress';
import colors from '@/constants/Colors';

const TrackBar = () => {

  const renderlist = info.map((item) => (
    <View key={item.id} style={styles.listContainer}>
        
        <View style={styles.verticalTransform}>
            <Progress.Bar progress={item.progress/100} width={50} height={10} />
        </View>
        <Text style={styles.text}>{item.date}</Text>
        
    </View>
  ));
    
  return (
    <View style={styles.container}>
        {renderlist}
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
        borderRadius: 8,
        backgroundColor: colors.primaryWhite,
        borderColor: colors.lightGray,
        borderWidth: 1,
        
    },
    verticalTransform: {
        transform: [{ rotate: "-90deg" }], // Rotate the progress bar
    },
    listContainer: {
        flexDirection: 'column',
        flex: 1,
    },
    text: {
        fontFamily: 'mon-sb'
    },
    
})
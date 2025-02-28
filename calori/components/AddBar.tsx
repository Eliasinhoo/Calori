
import { View, Text, StyleSheet, Button } from 'react-native'
import { addInfo } from '@/assets/tempData/listinfo';
import colors from '@/constants/Colors';

const AddBar = () => {

    const addComp = addInfo.map((item) => (
        <View key={item.id} style={styles.listContainer}>
            <View style={styles.box} >
                <Text style={styles.text}>
                {item.emoji} {item.type} 
                </Text>

                <Text style={styles.text}>
                    {item.calories} 
                </Text>
                <Button title="+">
                </Button>
            </View>
        </View>
    ));

    return (
        <View style={styles.setWidth}>
            {addComp}
        </View>
    )
}

export default AddBar


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 24,
        padding: 4,
        gap: 2,
        // borderRadius: 8,
        // backgroundColor: colors.primaryWhite,
        // borderColor: colors.lightGray,
        // borderWidth: 1,

    },
    listContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingTop: 10,
        marginTop: 10,
    },
    text: {
        fontFamily: 'mon-sb',
    },
    box: {
        borderRadius: 8,
        backgroundColor: colors.primaryWhite,
        borderColor: colors.borderGray,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        padding: 4,
        gap: 10,

        // Android
        elevation: 5,

        // iOS Shadow
        shadowColor: '#000',  // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow position (X, Y)
        shadowOpacity: 0.2,  // Shadow transparency
        shadowRadius: 4,  // Blur effect
    },
    setWidth: {
        width: "100%",
    }

})
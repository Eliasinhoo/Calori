
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { addInfo } from '@/assets/tempData/listinfo';
import colors from '@/constants/Colors';

const AddBar = () => {

    const addComp = addInfo.map((item) => (
        <View key={item.id} style={styles.listContainer}>
            <View style={styles.box} >
                <View>
                    <Text style={styles.text}>
                        {item.emoji} {item.type}
                    </Text>

                    <Text style={styles.calorieText}>
                        {item.calories}
                    </Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
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
    calorieText: {
        fontFamily: 'mon-sb',
        paddingLeft: 23,
        color: colors.darkGray,
        fontSize: 13
    },
    buttonText: {
        fontFamily: 'mon-sb',
        color: 'white',
        fontSize: 25
    },
    box: {
        borderRadius: 8,
        backgroundColor: colors.primaryWhite,
        borderColor: colors.borderGray,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
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
        width: "50%",
    },
    button: {
        borderRadius: "20px",
        backgroundColor: colors.primaryBlue,
        padding: 2,
        height: 30,
        width: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }

})
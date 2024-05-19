import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TextInput, Button, Pressable } from 'react-native';
// import { Button } from '../../components';

const ScreenHeight = Dimensions.get("screen").height;

const Auth = () => {

    const navigation = useNavigation();



    const [logged, setLogged] = useState("y");

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/background.png')} style={{ height: "100%", width: "100%" }} />

            <View style={styles.bottom}>
                <Text style={styles.txtL}>Login</Text>
                <View>
                    <Text style={{ color: "white", paddingBottom: 10, paddingTop: 20 }}>UserName or Email</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={{ color: "white", paddingBottom: 10, paddingTop: 20 }}>Password</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                {/* <Pressable style={styles.btn} onPress={() => navigation.navigate('Profile')}>
                    <Text style={{ color: "white", fontSize: 17, padding: 10, textAlign: "center" }}>Login</Text>
                </Pressable> */}
                <Pressable style={styles.btn} onPress={() => navigation.navigate('Profile')}>
                <Text style={{ color: "white", fontSize: 17, padding: 10, textAlign: "center" }}>Login</Text>
                </Pressable>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: ScreenHeight,
        alignItems: "center",
        position: "relative",
    },

    bottom: {
        flex: 1,
        justifyContent: "flex-start",
        width: "100%",
        alignItems: "center",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        position: "absolute",
        zIndex: 1000,
        backgroundColor: "#222831",
        bottom: 0,
        paddingTop: 40,
        paddingBottom: 50
    },
    txtL: {
        fontSize: 25,
        color: "white",
        paddingTop: "2%",
    },
    input: {
        color: "white",
        borderColor: "white",
        borderWidth: 1,
        width: 350,
        height: 40,
        borderRadius: 5,
        padding: 5,
        fontSize: 17
    },
    btn: {
        width: "30%",
        borderWidth: 2,
        borderColor: "white",
        marginTop: 40,
        borderRadius: 5,
    }

});


export default Auth;

import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//text doesnt show dynamically

export default function AddItem(props, { navigation }) {
    const [productName, setProductName] = useState("")

    console.log(props.route.params.image);
    return (
        <SafeAreaView>
            <Text>List a Product</Text>

            <Text>Product Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Product Name"
            />
            <Text>Product Type</Text>
            <TextInput
                style={styles.input}
                placeholder="Product Type"
            />
            <Text>Price</Text>
            <TextInput
                style={styles.input}
                placeholder="Price"
            />
            <Text>Description</Text>
            <TextInput
                style={styles.input}
                placeholder="Description"
            />
            <Text>Picture of Product</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("AddPhoto")}>
                <View>
                    <FontAwesome5
                        name="camera"
                        size={25}
                        style={{
                            marginBottom: 3,
                            alignSelf: "center",
                        }} />
                    <Text>Add Image</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.text}>
                    List It!
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white"
    },
    button: {
        elevation: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        margin: 15,
        borderRadius: 10,
        backgroundColor: 'teal',
        marginBottom: 10
    },
    text: {
        color: "white",
        fontSize: 15
    },
    text2: {
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center",
        marginBottom: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 20,
        alignItems: 'center',
        marginBottom: 20
    },
});
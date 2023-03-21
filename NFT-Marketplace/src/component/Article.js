import {Image, StyleSheet, Text, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Link, NativeBaseProvider} from "native-base";

const Stack = createNativeStackNavigator();

const Article = () => {
    const route = useRoute();
    const {id, nom, price, collection,desc, image} = route.params;
    console.log(nom);
    return (
        <NativeBaseProvider>
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.img}
                    source={image}
                />
            </View>
            <View style={styles.content}>
                <Text
                    style={styles.link}
                    numberOfLines={1}>
                    {collection}
                </Text>
                <Text
                    style={styles.title}
                    numberOfLines={1}>
                    {nom}
                </Text>
                <Text
                    style={styles.body}
                    numberOfLines={8}>
                    {desc}
                </Text>
            </View>
        </View>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        width: '100%',
        height: '100%',
    },
    imgContainer: {
        flex: 1,
        width: '100%'

    },
    title: {
        fontWeight: '700',
        fontSize: 28,
    },
    body: {
        fontWeight: "500",
        fontSize: 16,
        marginTop: 5,
        color: 'rgba(0,0,0,0.7)',
        lineHeight: 25
    },
    content: {
        flex: 1,
        padding: 8
    },
    link:{
        color: 'blue',
        fontWeight: "300",
        fontSize: 22,


    }
});

export default Article
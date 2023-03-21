import {Image, StyleSheet, Text, View} from "react-native";
import {useRoute} from "@react-navigation/native";

const Article = () => {
    const route = useRoute();
    const {id, nom, price, collection,desc, image} = route.params;
    console.log(desc);
    return (
        <View>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.img}
                    source={image}
                />
            </View>
            <View style={styles.content}>
                <Text
                    style={styles.title}>
                    {collection}
                </Text>
                <Text
                    style={styles.title}
                    numberOfLines={1}>
                    {nom}
                </Text>
                <Text numberOfLines={8} style={styles.body}>{desc}</Text>
                <Text numberOfLines={8} style={styles.body}>{price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,


    },
    img: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    imgContainer: {
        flex: 1,
    },
    title: {
        flex:1,
        fontWeight: '700',
        fontSize: 20,

    },
    body: {
        color: 'rgba(0,0,0,0.7)',
        lineHeight: 18
    },
    content: {
        flex: 1,
        padding: 8
    }
});

export default Article
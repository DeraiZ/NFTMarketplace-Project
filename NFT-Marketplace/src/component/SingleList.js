import {Button, StyleSheet, Text, View, Image, ScrollView} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Pressable} from "native-base";

const ArticleScreen = (article) => {

    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate('Article', {
            id: article.article.id,
            nom: article.article.name,
            collection: article.article.collection,
            price: article.article.price,
            desc: article.article.description,
            image: article.article.image
        })} style={styles.container}>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.img}
                    source={article.article.image}
                />
            </View>
            <View style={styles.content}>
                <Text
                    style={styles.title}
                    numberOfLines={1}>
                    {article.article.collection}
                </Text>
                <Text
                    style={styles.title}
                    numberOfLines={1}>
                    {article.article.name}
                </Text>
                <Text numberOfLines={8} style={styles.body}>{article.article.price}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,

    },
    img: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    imgContainer: {
        flex: 1,
    },
    title: {
        fontWeight: '700',
        fontSize: 28,
    },
    body: {
        color: 'rgba(0,0,0,0.7)',
        lineHeight: 18
    },
    content: {
        flex: 1,
        padding: 8
    },
});
export default ArticleScreen
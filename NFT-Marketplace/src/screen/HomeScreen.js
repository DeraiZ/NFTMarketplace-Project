import {Button, StyleSheet, Text, View, Image, ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {data} from "../data/data";
import {FlatList, useTheme} from "native-base";
import { NativeBaseProvider } from 'native-base';
import SingleScreen from "./ArticleScreen";
import ArticleScreen from "./ArticleScreen";


// const HomeScreen = () => {
//     const navigation = useNavigation()
//     console.log(data.length)
//     let loop = [];
//
//     for (let i = 0; i < data.length; i++){
//         loop.push(
//             <View style={styles.container} key={i}>
//                 <Image style={styles.imgContainer} source={data[i].image} />
//                 <Text>{data[i].name}</Text>
//                 <Text>{data[i].price}</Text>
//             </View>
//         )
//     }
//
//     return(
//         <NativeBaseProvider>
//             <View style={styles.container}>
//                 <FlatList data={loop} renderItem={}/>
//             </View>
//         </NativeBaseProvider>
//     )


const HomeScreen = () => {
    return(
    <ArticleScreen>

    </ArticleScreen>
)};



const styles = StyleSheet.create({
        container: {
            flex:1,
        }
    }
)
export default HomeScreen
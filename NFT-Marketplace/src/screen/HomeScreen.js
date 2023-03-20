import {Button, StyleSheet, Text, View, Image, ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {data} from "../data/data";

const HomeScreen = () => {
    const navigation = useNavigation()
    console.log(data.length)
    let i = 0;
    while(i < data.length){
        console.log(i)
        print(
        <View style={styles.container}>
            <Image source={data[i].image} />
            <Text>{data[i].name}</Text>
            <Text>{data[i].price}</Text>
        </View>
        )
        i+=1;
    };

}
const styles = StyleSheet.create({
        container: {
            flex:1,
        }
    }
)
export default HomeScreen
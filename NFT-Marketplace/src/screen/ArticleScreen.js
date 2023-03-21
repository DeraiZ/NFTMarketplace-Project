import {Button, StyleSheet, Text, View, Image, ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {data} from "../data/data";
import {FlatList, useTheme} from "native-base";
import { NativeBaseProvider } from 'native-base';
import SingleScreen from "../component/SingleList";


const ArticleScreen = ({navigation}) => {

    return(
        <NativeBaseProvider>
            <FlatList style={styles.container}
                      data={data}
                      keyExtractor={(item, index) => String(index)}
                      numColumns={2}
                      renderItem={({ item }) =><SingleScreen article={item} />}
            />
        </NativeBaseProvider>
    )};



const styles = StyleSheet.create({
        container: {
            flex:1,
        }
    }
)
export default ArticleScreen
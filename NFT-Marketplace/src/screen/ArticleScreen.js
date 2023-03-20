import {Text} from "react-native";
import {useRoute} from "@react-navigation/native";

const ArticleScreen = () => {
    const route = useRoute();
    const {id} = route.params
    return (
        <Text>Text de détail de l'article n°{id}</Text>
    )
}

export default ArticleScreen
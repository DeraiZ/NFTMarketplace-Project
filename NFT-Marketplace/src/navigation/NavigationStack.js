import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screen/HomeScreen'
import ArticleScreen from "../screen/ArticleScreen";

const Stack = createNativeStackNavigator();

const NavigationStack = () => (
    <Stack.Navigator initialRouteName='Blog' screenOptions={{
        headerStyle: {
            backgroundColor: 'tomato',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerTitle: 'NFT-Marketplace'
    }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Article' component={ArticleScreen} />
    </Stack.Navigator>
)

export default NavigationStack
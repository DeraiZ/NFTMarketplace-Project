import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screen/HomeScreen'
import Article from "../component/Article";
import {data} from "../data/data";

const Stack = createNativeStackNavigator();

const NavigationStack = () => (
    <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerStyle: {
            backgroundColor: 'blue',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerTitle: 'NFT-Marketplace'
    }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen options={{headerTransparent: true,
        headerStyle:{
            backgroundColor:null,},
            headerTitle: '',
        }} name='Article' component={Article}/>
    </Stack.Navigator>
)

export default NavigationStack
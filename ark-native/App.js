import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store';
import { Provider } from 'react-redux';
import KingdomScreen from './screens/KingdomScreen';
import KingdomsFeed from './screens/KingdomsFeed';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Kingdoms' component={KingdomsFeed} />
                    <Stack.Screen name='Kingdom' component={KingdomScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
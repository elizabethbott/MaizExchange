import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeRoute from './src/routes/HomeRoute';
import SettingsRoute from './src/routes/SettingsRoute';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen name="Home" component={HomeRoute} />
                    <Tab.Screen name="Settings" component={SettingsRoute} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

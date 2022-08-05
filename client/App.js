import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import UpdateFinancesScreen from './screens/UpdateFinancesScreen';
import TagScreen from './screens/TagScreen';
import { HomeIcon, CreditCardIcon, TagIcon } from "react-native-heroicons/solid"
import { HomeIcon as HomeIconOutline, CreditCardIcon as CreditCardIconOutline,
  TagIcon as TagIconOutline } from "react-native-heroicons/outline"

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <TailwindProvider>
          <Tab.Navigator screenOptions={{
            headerShown: false
          }}>
              <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused, color, size}) => {
                  if (focused) return <HomeIcon color="#3B82F6" />
                  else return <HomeIconOutline color="#3B82F6" />
                }
              }} />
              <Tab.Screen name="Update" component={UpdateFinancesScreen} options={{
                tabBarIcon: ({focused, color, size}) => {
                  if (focused) return <CreditCardIcon color="#3B82F6" />
                  else return <CreditCardIconOutline color="#3B82F6" />
                }
              }} />
              <Tab.Screen name="Tags" component={TagScreen} options={{
                tabBarIcon: ({focused, color, size}) => {
                  if (focused) return <TagIcon color="#3B82F6" />
                  else return <TagIconOutline color="#3B82F6" />
                }
              }} />
          </Tab.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
import HomeScreen from '../screens/HomeScreen';
import StatsScreen from '../screens/StatsScreen';
import TagScreen from '../screens/TagScreen';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, ChartPieIcon, TagIcon } from "react-native-heroicons/solid"
import { HomeIcon as HomeIconOutline, ChartPieIcon as ChartPieIconOutline,
  TagIcon as TagIconOutline } from "react-native-heroicons/outline"

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();


const NavigationBar= () =>{
    
    return (
    <NavigationContainer>
      <TailwindProvider>
          <Tab.Navigator  screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
          }}
          >
              <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused, color, size}) => {
                  if (focused) return <HomeIcon color="black" />
                  else return <HomeIconOutline color="#939393" />
                }
              }} />
              <Tab.Screen name="Update" component={StatsScreen} options={{
                tabBarIcon: ({focused, color, size}) => {
                  if (focused) return <ChartPieIcon color="black" />
                  else return <ChartPieIconOutline color="#939393" />
                }
              }} />
              <Tab.Screen name="Tags" component={TagScreen} options={{
                tabBarIcon: ({focused, color, size}) => {
                  if (focused) return <TagIcon color="black" />
                  else return <TagIconOutline color="#939393" />
                }
              }} />
          </Tab.Navigator>
      </TailwindProvider>
    </NavigationContainer>
    );
}



export default NavigationBar
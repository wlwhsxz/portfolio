import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import SplashScreen from 'react-native-splash-screen';

import Home from './Home';
import MyPage from './MyPage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AdBulletinBoard from './AdBulletinBoard';
import WritingPage from './WritingPage';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'checkcircle' : 'checkcircleo';
          } else if (route.name === 'MyPage') {
            iconName = focused ? 'closecircle' : 'closecircleo';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={30} color={'black'} />;
        },
      })}
      // screenOptions={{
      //   tabBarStyle: {
      //     height: responsiveScreenHeight(8),
      //     borderTopWidth: responsiveScreenHeight(1),
      //   },
      // }}
      // screenOptions={{
      //   tabBarActiveTintColor: '#7DD421',
      //   tabBarInactiveTintColor: '#222222',
      //   tabBarStyle: {
      //     height: heightPercentage(56),
      //     borderTopWidth: heightPercentage(0.5),
      //     borderTopColor: '#E9E9E9',
      //     backgroundColor: '#FFFFFF',
      //   },
      //   tabBarIconStyle: {
      //     marginTop: heightPercentage(10),
      //   },
      //   tabBarLabelStyle: {
      //     fontFamily: 'NotoSansKR-Regular',
      //     fontSize: fontPercentage(10),
      //   },
      // }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          title: 'MyPage',
          headerShown: false,
        }}
        // options={{
        //   tabBarLabel: 'MyPage',
        //   taBarIcon: ({focused}) =>
        //     focused ? <ActiveMyPageIcon /> : <InactiveMyPageIcon />,
        // }}
        // listeners={() => ({
        //   tabPress: e => {
        //     e.preventDefault();
        //     navigation.navigate('MyPage');
        //   },
        // })}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000); //스플래시 활성화 시간 2초
    } catch (e) {
      console.log(e.message);
    }
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabNavigator">
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="AdBulletinBoard" component={AdBulletinBoard} />
        <Stack.Screen name="WritingPage" component={WritingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // bottomTab: {
  // height: responsiveScreenHeight(50),
  // },
});

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../splash/Splash';
import Home from '../home/Home';
import Lessons from '../home/Lessons';
import Display from '../home/Display';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Splash'}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Splash"
          options={{
            headerShown: false,
          }}
          component={Splash}
        />
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={Home}
        />
        <Stack.Screen
          name="Lessons"
          options={{
            headerShown: false,
          }}
          component={Lessons}
        />
        <Stack.Screen
          name="Display"
          options={{
            headerShown: false,
          }}
          component={Display}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

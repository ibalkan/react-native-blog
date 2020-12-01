// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Create") }>
                <Feather name="plus" size={25} /> 
              </TouchableOpacity>
            )
          })}
          name="Index"
          component={IndexScreen}
        />
        <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <Provider>
     <App/>
  </Provider>
};
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./component/Home.js";
import Edit from "./component/Edit.js";

const Stack = createStackNavigator();

function App() {
	return (
	  <NavigationContainer>
		<Stack.Navigator>
		  <Stack.Screen name="Home" component={Home} />
		  <Stack.Screen name="Edit" component={Edit} />
		</Stack.Navigator>
	  </NavigationContainer>
	);
  }
  
  export default App;
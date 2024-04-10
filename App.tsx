import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Student from './components/Student';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import Lab1Screen from './components/Home';
import Bai1 from './Lab/Lab1/Bai1';
import Bai2 from './Lab/Lab1/Bai2';
import Bai3Lab1 from './Lab/Lab1/Bai3';
import Main from './componentss/Main';
import Lab2Screen from './Lab/Lab2/lab2_home';

import Bai1Lab3 from './Lab/Lab3/Move';
import Bai2Lab3 from './Lab/Lab3/bai2';






function App() {
  return (

    <Asm navigation={undefined}></Asm>

  );
}

export default App;
// App.js

// lab7
// import React from 'react-native';
// import {Provider} from 'react-redux';
// import {persistor, store} from './Lab/lab56/redux/store';
// import {PersistGate} from 'redux-persist/integration/react';
// import HomeScreen from './Lab/lab56/screen/HomeScreen';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Lab0602 from './Lab/lab56/screen/Lab0602';
// import Lab0603 from './Lab/lab56/screen/Lab0603';

// const Stack = createNativeStackNavigator();

// function App(): React.JSX.Element {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <NavigationContainer>
//           <Stack.Navigator>
//             <Stack.Screen
//               name="Home"
//               component={HomeScreen}
//               options={{
//                 title: 'Lab 05 - 06',
//               }}
//             />

//             <Stack.Screen
//               name="Lab0602"
//               component={Lab0602}
//               options={{
//                 title: 'Lab 06 - 02',
//               }}
//             />

//             <Stack.Screen
//               name="Lab0603"
//               component={Lab0603}
//               options={{
//                 title: 'Lab 06 - 03',
//               }}
//             />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </PersistGate>
//     </Provider>
//   );
// }
// lab8
// export default App;
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import Lab07 from './Lab/lab78/Lab07';
// import Lab0703 from './Lab/lab78/Lab0703';
// import Lab08 from './Lab/lab78/Lab08';

// const Stack = createStackNavigator();

// function App(): React.JSX.Element {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Lab07"
//           component={Lab07}
//           options={{
//             title: 'Lab 07',
//           }}
//         />
//         <Stack.Screen
//           name="Lab0703"
//           component={Lab0703}
//           options={{
//             title: 'Lab 07 - Đăng nhập với Google',
//           }}
//         />

//         {/* <Stack.Screen
//           name="Lab08"
//           component={Lab08}
//           options={{
//             title: 'Lab 08',
//           }}
//         /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;





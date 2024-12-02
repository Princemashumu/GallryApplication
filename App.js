// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './components/DrawerContent'; // Import your custom DrawerContent

// Import your screens
import HomeScreen from './screens/HomeScreen';
import DeletedPhotosScreen from './screens/DeletedPhotosScreen';
import CameraScreen from './screens/CameraScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />} // Pass navigation props to DrawerContent
      >
        <Drawer.Screen name="Camera" component={CameraScreen} />
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="Deleted Photos" component={DeletedPhotosScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

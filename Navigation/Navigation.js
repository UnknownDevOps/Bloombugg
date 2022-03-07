import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screen/LoginScreen';
import OtpScreen from '../screen/OtpScreen';
import HomeScreen from '../screen/HomeScreen/HomeScreen';
import TabNavigator from '../screen/TabNavigator';
import NotificationUser from '../screen/HomeScreen/NotificationUser';
import ProfileEdit from '../screen/ProfileScreens/ProfileEdit';
import Setting from '../screen/ProfileScreens/SettingScreen/Setting';
import NotificationSetting from '../screen/ProfileScreens/SettingScreen/NotificationSetting';
import PrivacySetting from '../screen/ProfileScreens/SettingScreen/PrivacySetting';
import ChalengeScreen from '../screen/ChalengeScreens/ChalengeScreen';
import ChangeNumber from '../screen/ProfileScreens/SettingScreen/ChangeNoSetting';
import OtpSetting from '../screen/ProfileScreens/SettingScreen/OtpSetting';
import DeleteSetting from '../screen/ProfileScreens/SettingScreen/DeleteSetting';
import Deleteacc from '../screen/ProfileScreens/SettingScreen/Deleteacc';
import Logout from '../screen/ProfileScreens/SettingScreen/Logout';
const Stack = createNativeStackNavigator();
const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{headerShown: false}} >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen name="Notification" component={NotificationUser} />
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="NotificationSetting" component={NotificationSetting} />
        <Stack.Screen name="PrivacySetting" component={PrivacySetting} />
        <Stack.Screen name="ChangeNumberSetting" component={ChangeNumber} />
        <Stack.Screen name="OtpSetting" component={OtpSetting} />
        <Stack.Screen name="DeleteSetting" component={DeleteSetting} />
        <Stack.Screen name="Deleteacc" component={Deleteacc} />
        <Stack.Screen name="Logout" component={Logout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;

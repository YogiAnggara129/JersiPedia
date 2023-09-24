import React from 'react';
import {Home, JerseyDetail, ListJersey, Profile, Splash} from '../pages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';
import {
  HomeActive,
  HomeIc,
  JerseyActive,
  JerseyIc,
  ProfileActive,
  ProfileIc,
} from '../assets/icons';
import {IJersey} from '../data/interface/jersey';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import ProfileEdit from '../pages/ProfileEdit';
import ChangePassword from '../pages/ChangePassword';
import History from '../pages/History';
import Login from '../pages/Login';
import Register1 from '../pages/Register/Register1';
import Register2 from '../pages/Register/Register2';

interface ITabItem {
  name: string;
  title: string;
  component: () => JSX.Element;
  icon:
    | ((props: {
        focused: boolean;
        color: string;
        size: number;
      }) => React.ReactNode)
    | undefined;
  isHeaderShown: boolean;
}

export type RootStackParamList = {
  Splash: undefined;
  MainApp: undefined;
  JerseyDetail: {
    data: IJersey;
  };
  Cart: undefined;
  Checkout: undefined;
  ProfileEdit: undefined;
  ChangePassword: undefined;
  History: undefined;
  Login: undefined;
  Register1: undefined;
  Register2: undefined;
};
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const BottomNavInit = (props: any) => <BottomNavigator {...props} />;

const HomeIcon = (props: {focused: boolean; color: string; size: number}) =>
  props.focused ? <HomeActive /> : <HomeIc />;
const JerseyIcon = (props: {focused: boolean; color: string; size: number}) =>
  props.focused ? <JerseyActive /> : <JerseyIc />;
const ProfileIcon = (props: {focused: boolean; color: string; size: number}) =>
  props.focused ? <ProfileActive /> : <ProfileIc />;
const tabItemList: ITabItem[] = [
  {
    name: 'Home',
    title: 'Home',
    component: Home,
    icon: HomeIcon,
    isHeaderShown: false,
  },
  {
    name: 'ListJersey',
    title: 'Jersey',
    component: ListJersey,
    icon: JerseyIcon,
    isHeaderShown: false,
  },
  {
    name: 'Profile',
    title: 'Profile',
    component: Profile,
    icon: ProfileIcon,
    isHeaderShown: false,
  },
];

function MainApp() {
  return (
    <Tab.Navigator tabBar={BottomNavInit}>
      {tabItemList.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            title: item.title,
            tabBarIcon: item.icon,
            headerShown: item.isHeaderShown,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="JerseyDetail"
        component={JerseyDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Register1"
        component={Register1}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Register2"
        component={Register2}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}

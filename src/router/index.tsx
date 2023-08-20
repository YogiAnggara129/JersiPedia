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
  JerseyDetail: undefined;
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
    </Stack.Navigator>
  );
}

import React from 'react';
import {View, StyleSheet} from 'react-native';
import TabItem from '../TabItem';
import {colors} from '../../../utils';

interface IBottomNavigationProps {
  state: any;
  descriptors: any;
  navigation: any;
}

export default function BottomNavigator({
  state,
  descriptors,
  navigation,
}: IBottomNavigationProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
            key={`${index}`}
            isFocused={isFocused}
            options={options}
            onPress={onPress}
            onLongPress={onLongPress}
            label={label}
            icon={isItemFocused =>
              options.tabBarIcon({
                focused: isItemFocused,
                colorr: '',
                size: 10,
              })
            }
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.primary,
    marginHorizontal: 30,
    marginBottom: 30,
    paddingVertical: 8,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

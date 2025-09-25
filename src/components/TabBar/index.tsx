// CustomTabBarLite.tsx

import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '../../styles/theme';

function TabBarItem({
  route,
  index,
  state,
  descriptors,
  navigation,
  fade,
}: {
  route: any;
  index: number;
  state: any;
  descriptors: any;
  navigation: any;
  fade: Animated.Value;
}) {
  const { options } = descriptors[route.key];
  const isFocused = state.index === index;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name as never);
    }
  };

  const Icon = options.tabBarIcon as
    | ((props: {
        focused: boolean;
        color: string;
        size: number;
      }) => React.ReactNode)
    | undefined;

  return (
    <TouchableOpacity
      key={route.key}
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      onPress={onPress}
      activeOpacity={0.8}
      className="items-center justify-center min-w-[80px] max-w-[100px] w-[90px] gap-1"
    >
      {!isFocused && Icon
        ? Icon({
            focused: isFocused,
            color: colors['secondary-pure'],
            size: 24,
          })
        : null}

      <Animated.View
        style={{
          minHeight: 0,
          opacity: fade,
          transform: [
            {
              scale: fade.interpolate({
                inputRange: [0, 1],
                outputRange: [0.95, 1],
              }),
            },
          ],
        }}
      >
        {isFocused && (
          <View className="bg-primary-pure px-3 py-[10px] rounded-3xl w-full flex items-center justify-center">
            <Text className="text-xs font-bold text-secondary-pure text-center">
              {options.tabBarLabel ?? options.title ?? route.name}
            </Text>
          </View>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
}

export default function CustomTabBarLite({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const fades = useRef(
    state.routes.map((_, i) => new Animated.Value(state.index === i ? 1 : 0)),
  ).current;

  useEffect(() => {
    state.routes.forEach((_, i) => {
      Animated.timing(fades[i], {
        toValue: state.index === i ? 1 : 0,
        duration: 400,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start();
    });
  }, [state.index]);

  return (
    <View pointerEvents="box-none" className="absolute inset-0">
      <View
        className="absolute left-4 right-4 flex-row items-center justify-around bg-high-pure rounded-2xl py-3 px-3 shadow"
        style={{
          bottom: Math.max(insets.bottom, 12),
          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 4 },
          elevation: 6,
        }}
      >
        {state.routes.map((route, index) => (
          <TabBarItem
            key={route.key}
            route={route}
            index={index}
            state={state}
            descriptors={descriptors}
            navigation={navigation}
            fade={fades[index]}
          />
        ))}
      </View>
    </View>
  );
}

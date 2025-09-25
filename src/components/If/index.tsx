/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from 'react';

import { Animated } from 'react-native';

interface Props {
  condition: boolean;
  enableFade?: boolean;
  children: React.ReactElement | React.ReactElement[];
}

const If = ({
  condition,
  enableFade = false,
  children,
}: Props): React.ReactElement | null => {
  if (!condition) return null;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (condition) {
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }).start();
    }
  }, [condition, enableFade, fadeAnim]);

  return enableFade ? (
    <Animated.View style={{ opacity: fadeAnim }}>{children}</Animated.View>
  ) : (
    <>{children}</>
  );
};

export default If;

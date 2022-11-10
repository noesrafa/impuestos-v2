import {Animated, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const PressableScale = ({
  flex = false,
  action = () => {},
  scale = 0.65,
  children,
  ...otherProps
}) => {
  const animation = new Animated.Value(1);
  const inputRange = [0, 0.5, 1];
  const outputRange = [1, scale, 1];
  const size = animation.interpolate({inputRange, outputRange});
  const navigation = useNavigation();

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: scale,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onPress = () => {
    Animated.spring(animation, {
      toValue: scale,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 15,
      }).start();
      setTimeout(() => {
        action();
      }, 0);
    }, 90);

    
  };

  return (
    <Animated.View style={{flex: flex ? 1 : 0, transform: [{scale: size}]}}>
      <TouchableOpacity
        activeOpacity={1}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}
        {...otherProps}>
        {children}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default PressableScale;

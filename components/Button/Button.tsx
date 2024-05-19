import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

const AnimatedButton = () => {
  const [scaleValue] = useState(new Animated.Value(1));
  const [circleSize] = useState(new Animated.Value(20));
  const [circleOpacity] = useState(new Animated.Value(0));
  const [textTranslateX] = useState(new Animated.Value(-12));
  const [svgLeftPosition] = useState(new Animated.Value(-25));
  const [svgRightPosition] = useState(new Animated.Value(16));
  const [svgFill] = useState(new Animated.Value(0)); // 0 for greenyellow, 1 for #212121

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    Animated.parallel([
      Animated.timing(circleSize, {
        toValue: 220,
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(circleOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(textTranslateX, {
        toValue: 12,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(svgLeftPosition, {
        toValue: 16,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(svgRightPosition, {
        toValue: -25,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(svgFill, {
        toValue: 1,
        duration: 800,
        useNativeDriver: false,
      }),
    ]).start(() => {
      Animated.parallel([
        Animated.timing(circleSize, {
          toValue: 20,
          duration: 800,
          useNativeDriver: false,
        }),
        Animated.timing(circleOpacity, {
          toValue: 0,
          duration: 800,
          useNativeDriver: false,
        }),
        Animated.timing(textTranslateX, {
          toValue: -12,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(svgLeftPosition, {
          toValue: -25,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(svgRightPosition, {
          toValue: 16,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(svgFill, {
          toValue: 0,
          duration: 800,
          useNativeDriver: false,
        }),
      ]).start();
    });
  };

  const svgFillColor = svgFill.interpolate({
    inputRange: [0, 1],
    outputRange: ['greenyellow', '#212121'],
  });

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
      style={styles.button}
    >
      <Animated.View style={[styles.svgWrapper, { left: svgLeftPosition }]}>
        <Svg viewBox="0 0 24 24" style={styles.svg}>
          <Animated.Path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            fill={svgFillColor}
          />
        </Svg>
      </Animated.View>
      <Animated.Text style={[styles.text, { transform: [{ translateX: textTranslateX }] }]}>
        Modern Button
      </Animated.Text>
      <Animated.View
        style={[
          styles.circle,
          {
            width: circleSize,
            height: circleSize,
            opacity: circleOpacity,
          },
        ]}
      />
      <Animated.View style={[styles.svgWrapper, { right: svgRightPosition }]}>
        <Svg viewBox="0 0 24 24" style={styles.svg}>
          <Animated.Path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            fill={svgFillColor}
          />
        </Svg>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 36,
    borderWidth: 4,
    borderColor: 'transparent',
    borderRadius: 100,
    backgroundColor: 'inherit',
    fontSize: 16,
    fontWeight: '600',
    color: 'greenyellow',
    shadowColor: 'greenyellow',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    overflow: 'hidden',
  },
  svgWrapper: {
    position: 'absolute',
    zIndex: 9,
  },
  svg: {
    width: 24,
    height: 24,
  },
  circle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    backgroundColor: 'greenyellow',
    borderRadius: 50,
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  text: {
    position: 'relative',
    zIndex: 1,
  },
});

export default AnimatedButton;

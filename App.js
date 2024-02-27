import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, SafeAreaView, StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {
  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);

  const moveLeft = () => {
    Animated.timing(translateX, {
      toValue: -100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const moveRight = () => {
    Animated.timing(translateX,{
      toValue: 100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const moveTop = () => {
    Animated.timing(translateY,{
      toValue: -100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  const moveBottom = () => {
    Animated.timing(translateY,{
      toValue: 100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  const reset = () => {
    translateX.setValue(0);
    translateY.setValue(0);
  }
    
  

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          transform: [{ translateX: translateX }, { translateY: translateY }],
        }}
      />
      
      <View style={{  marginVertical: 24 ,marginTop:100}}>
        <Button title="Move Left" onPress={moveLeft} />
        <Button title="Move Right" onPress={moveRight} />
        <Button title="Move Top" onPress={moveTop} />
        <Button title="Move Bottom" onPress={moveBottom} />
        <Button title="Reset" onPress={reset} />
      </View>
    </SafeAreaView>
  );
};

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const CircleProgress = ({value}) => {
  const texto = '#24424D'
  const violeta = '#CEC4F4'

  return (
    <View style={styles.container}>
      <CircularProgress
        radius={35}
        value={value}
        progressValueColor={texto}
        activeStrokeColor={violeta}
        inActiveStrokeOpacity={0.2}
        activeStrokeWidth={8}
        inActiveStrokeWidth={8}
        titleStyle={10}
        duration={1000}
        className="w-[70] h-[70]"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CircleProgress
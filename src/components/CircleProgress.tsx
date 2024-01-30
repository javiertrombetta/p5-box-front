import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

type CircleProgressProps = {
  value: number;
}

const CircleProgress = ({value}:CircleProgressProps ) => {
  const texto = '#24424D'
  const violeta = '#CEC4F4'

  return (
    <View style={styles.container}>
      <CircularProgress
        radius={36}
        value={value}
        progressValueColor={texto}
        activeStrokeColor={violeta}
        inActiveStrokeOpacity={0.2}
        activeStrokeWidth={8}
        inActiveStrokeWidth={8}
        duration={1000}
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
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

type CircleProgressProps = {
	value: number;
	radius?: number;
};

const CircleProgress = ({ value, radius}: CircleProgressProps) => {
	const texto = '#24424D';
	const violeta = '#CEC4F4';
  const valueSuffix = '%'
  const inActiveStrokeOpacity = 0.2;
	const	activeStrokeWidth = 8;
	const	inActiveStrokeWidth = 8;
	const	duration = 1000;

	return (
		<View className="font-robotoBold text-texto" style={styles.container}>
			<CircularProgress
				radius={radius}
				value={value}
				progressValueColor={texto}
				activeStrokeColor={violeta}
				valueSuffix={valueSuffix}
				inActiveStrokeOpacity={inActiveStrokeOpacity}
				activeStrokeWidth={activeStrokeWidth}
				inActiveStrokeWidth={inActiveStrokeWidth}
				duration={duration}
			/>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CircleProgress
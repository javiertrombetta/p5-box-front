import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

interface CircleProgressProps {
	value: number;
	radius: number;
	progressValueColor?: string;
	activeStrokeColor?: string;
	valueSuffix?: string;
	inActiveStrokeOpacity?: number;
	activeStrokeWidth?: number;
	inActiveStrokeWidth?: number;
	duration?: number;
}

const CircleProgress = ({
	value,
	radius,
	progressValueColor = '#24424D',
	activeStrokeColor = '#CEC4F4',
	valueSuffix = '%',
	inActiveStrokeOpacity = 0.2,
	activeStrokeWidth = 8,
	inActiveStrokeWidth = 8,
	duration = 1000,
}: CircleProgressProps) => {
	const isWeb = Platform.OS === 'web';

	return (
		<View className="font-robotoBold text-texto" style={styles.container}>
			{isWeb ? (
				<CircularProgress
					radius={radius}
					value={value}
					progressValueColor={progressValueColor}
					activeStrokeColor={activeStrokeColor}
					inActiveStrokeOpacity={inActiveStrokeOpacity}
					activeStrokeWidth={activeStrokeWidth}
					inActiveStrokeWidth={inActiveStrokeWidth}
					duration={duration}
				/>
			) : (
				<CircularProgress
					radius={radius}
					value={value}
					progressValueColor={progressValueColor}
					activeStrokeColor={activeStrokeColor}
					valueSuffix={valueSuffix}
					inActiveStrokeOpacity={inActiveStrokeOpacity}
					activeStrokeWidth={activeStrokeWidth}
					inActiveStrokeWidth={inActiveStrokeWidth}
					duration={duration}
				/>
			)}
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

export default CircleProgress;

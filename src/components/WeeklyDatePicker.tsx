import { View, Text, Dimensions } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

interface WeeklyDatePickerProps {}

const WeeklyDatePicker = () => {
	return (
		<View>
			<Text>WeeklyDatePicker</Text>
		</View>
	);
};

export default WeeklyDatePicker;

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Progress = () => {
	return (
		<View className="flex flex-row gap-2 w-screen h-screen items-center justify-center">
			<View className="w-4 h-4 rounded-full bg-green-700 animate-bounce" />
			<View className="w-4 h-4 rounded-full bg-green-700 animate-bounce [animation-delay:-.3s]" />
			<View className="w-4 h-4 rounded-full bg-green-700 animate-bounce [animation-delay:-.5s]" />
		</View>
	);
};

export default Progress;

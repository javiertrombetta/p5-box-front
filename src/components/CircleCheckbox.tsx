import { Dimensions, Pressable, Text, View } from 'react-native';
import React, { Key, useEffect, useState } from 'react';

type HandleToggleSetValuesType = (pos: Key, value: boolean) => void;

interface CircleCheckboxProps {
	handleToggleSetValues: HandleToggleSetValuesType;
	position: string;
}

const CircleCheckbox = ({ handleToggleSetValues, position }: CircleCheckboxProps) => {
	const { width, height } = Dimensions.get('window');
	const WScale = width / 360;
	const HScale = height / 640;
	const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

	const [checkTrue, setCheckTrue] = useState(false); //SI
	const [checkFalse, setCheckFalse] = useState(false); //NO

	useEffect(() => {
		handleToggleSetValues(position, checkTrue);
		console.log(checkTrue, 'Real Value');
	}, [checkTrue, checkFalse]);

	const handleCheck = (check: boolean) => {
		check
			? checkTrue
				? setCheckTrue(false)
				: (setCheckTrue(true), setCheckFalse(false))
			: checkFalse
			? setCheckFalse(false)
			: (setCheckFalse(true), setCheckTrue(false));
	};

	return (
		<>
			<View style={{ gap: 10 * WScale }} className="flex flex-row">
				<Pressable
					onPress={() => handleCheck(true)}
					style={{ width: scaledSize(19), height: scaledSize(19) }}
					className="border border-texto rounded-full relative"
				/>
				{checkTrue && (
					<Pressable
						onPress={() => handleCheck(true)}
						style={{
							width: scaledSize(11),
							height: scaledSize(11),
							top: scaledSize(4),
							left: scaledSize(4),
						}}
						className="border border-texto bg-amarilloVerdoso absolute rounded-full"
					/>
				)}

				<Text style={{ fontSize: scaledSize(12) }} className="font-roboto text-texto text-center">
					SI
				</Text>
			</View>

			<View style={{ gap: 10 * WScale }} className="flex flex-row">
				<Pressable
					onPress={() => handleCheck(false)}
					style={{ width: scaledSize(19), height: scaledSize(19) }}
					className="border border-texto rounded-full relative"
				/>
				{checkFalse && (
					<Pressable
						onPress={() => handleCheck(false)}
						style={{
							width: scaledSize(11),
							height: scaledSize(11),
							top: scaledSize(4),
							left: scaledSize(4),
						}}
						className="border border-texto bg-amarilloVerdoso absolute rounded-full"
					/>
				)}
				<Text style={{ fontSize: scaledSize(12) }} className="font-roboto text-texto text-center">
					NO
				</Text>
			</View>
		</>
	);
};

export default CircleCheckbox;

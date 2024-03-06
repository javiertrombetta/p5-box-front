import { Dimensions, Pressable, Text, View } from 'react-native';
import React, { Key, useEffect, useState } from 'react';

type HandleToggleSetValuesType = (pos: Key, value: boolean) => void; // Reemplaza TipoParametro por el tipo real de tus parámetros

interface CircleCheckboxProps {
	handleToggleSetValues: HandleToggleSetValuesType;
	position: string;
}
const CircleCheckbox: React.FC<CircleCheckboxProps> = ({ handleToggleSetValues, position }) => {
	const { width, height } = Dimensions.get('window');
	const WScale = width / 360;
	const HScale = height / 640;
	const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

	const [checkTrue, setCheckTrue] = useState(false); //SI
	const [checkFalse, setCheckFalse] = useState(false); //NO
	const [realValue, setRealValue] = useState(false);

	useEffect(() => {
		handleToggleSetValues(position, realValue);
	}, [checkTrue, checkFalse]);

	const handleCheck = (check: boolean) => {
		check
			? checkTrue
				? setCheckTrue(false)
				: (setCheckTrue(true), setCheckFalse(false))
			: checkFalse
			? setCheckFalse(false)
			: (setCheckFalse(true), setCheckTrue(false));
		checkTrue ? setRealValue(true) : setRealValue(false);
		checkFalse ? setRealValue(false) : setRealValue(true);
	};

	console.log(position, realValue);
	return (
		<>
			<View style={{ gap: 10 * WScale }} className="flex flex-row">
				<Pressable
					style={{ width: 19 * WScale, height: 19 * HScale }}
					className="border border-texto rounded-full relative"
				/>
				{checkTrue ? (
					<Pressable
						onPress={() => handleCheck(true)}
						style={{ width: 11 * WScale, height: 11 * HScale }}
						className="border border-texto top-1 left-1 bg-amarilloVerdoso absolute rounded-full"
					/>
				) : (
					<Pressable
						onPress={() => handleCheck(true)}
						style={{ width: 11 * WScale, height: 11 * HScale }}
						className="top-1 left-1  absolute rounded-full"
					/>
				)}

				<Text style={{ fontSize: scaledSize(12) }} className="font-roboto text-texto text-center">
					SI
				</Text>
			</View>

			<View style={{ gap: 10 * WScale }} className="flex flex-row">
				<Pressable
					style={{ width: 19 * WScale, height: 19 * HScale }}
					className="border border-texto rounded-full relative"
				/>
				{checkFalse ? (
					<Pressable
						onPress={() => handleCheck(false)}
						style={{ width: 11 * WScale, height: 11 * HScale }}
						className="border border-texto top-1 left-1 bg-amarilloVerdoso absolute rounded-full"
					/>
				) : (
					<Pressable
						onPress={() => handleCheck(false)}
						style={{ width: 11 * WScale, height: 11 * HScale }}
						className="top-1 left-1  absolute rounded-full"
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

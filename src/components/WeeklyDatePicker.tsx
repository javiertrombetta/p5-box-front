import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native';
import { startOfWeek, addWeeks, format, addDays, isAfter, isSameDay } from 'date-fns';
import Swiper from 'react-native-swiper';
import ArrowLeftBox from '../assets/ArrowLeftBox.svg';
import ArrowRightBox from '../assets/ArrowRightBox.svg';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

const WeeklyDatePicker = ({ handleSelect }: { handleSelect: (date: Date) => void }) => {
	const [offset, setOffset] = useState<number>(0);
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());
	useEffect(() => {
		handleSelect(selectedDate);
	}, [selectedDate]);
	const today = new Date();

	const days = useMemo(() => {
		const start = addDays(today, offset - 2);

		return Array.from({ length: 5 }).map((_, index) => {
			const date = addDays(start, index);

			return {
				weekday: format(date, 'EEE'),
				date: format(date, 'd'),
				disabled: isAfter(date, today),
				selected: isSameDay(date, selectedDate),
			};
		});
	}, [offset, selectedDate]);

	const handleNext = () => {
		setOffset((prevOffset) => prevOffset + 5);
	};

	const handlePrev = () => {
		setOffset((prevOffset) => prevOffset - 5);
	};

	const handleDatePress = (index: number) => {
		const selectedDay = addDays(addDays(today, offset - 2), index);
		setSelectedDate(selectedDay);
	};

	return (
		<View className="flex flex-row w-full items-center justify-between bg-white mt-[7]">
			<View className="flex flex-row items-center justify-between">
				<Pressable
					style={{ paddingHorizontal: 8 * WScale, paddingVertical: 8 * HScale }}
					onPress={handlePrev}
				>
					<ArrowLeftBox height={scaledSize(21)} width={scaledSize(19)} />
				</Pressable>
			</View>

			<View className="flex flex-row items-center justify-between px-1">
				{days.map((day, index) => (
					<Pressable
						style={
							day.selected
								? {
										width: 38 * WScale,
										height: 38 * HScale,
										marginHorizontal: 4 * WScale,
								  }
								: {
										width: 34 * WScale,
										height: 34 * HScale,
										marginHorizontal: 4 * WScale,
								  }
						}
						className={
							day.selected
								? 'rounded-md bg-amarilloVerdoso flex justify-center items-center'
								: 'rounded-md flex items-center justify-center'
						}
						onPress={() => handleDatePress(index)}
						disabled={day.disabled}
						key={index}
					>
						<Text
							style={{ fontSize: scaledSize(12) }}
							className={
								day.disabled ? 'font-saira flex text-end opacity-50' : 'font-saira flex text-end'
							}
						>
							{day.weekday}
						</Text>
						<Text
							style={{ marginTop: -8 * HScale, fontSize: scaledSize(16) }}
							className={
								day.disabled
									? 'font-sairaBold flex items-start justify-start text-start opacity-50'
									: 'font-sairaBold flex items-start justify-start text-start'
							}
						>
							{day.date}
						</Text>
					</Pressable>
				))}
			</View>

			<View className="flex flex-row items-center">
				<Pressable
					style={{ paddingHorizontal: 8 * WScale, paddingVertical: 8 * HScale }}
					onPress={handleNext}
				>
					<ArrowRightBox height={scaledSize(21)} width={scaledSize(19)} />
				</Pressable>
			</View>
		</View>
	);
};

export default WeeklyDatePicker;

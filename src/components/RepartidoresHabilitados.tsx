import React, { useEffect } from 'react';
import { handleActiveDeliveryman } from '../services/reports.service';
import { View } from 'react-native';
import { store } from '../state/user';

type propsDeliverys = {
	activeUsers: number;
	totalUsers: number;
};

const RepartidoresHabilitados = ({
	setearRepartidores,
	selectedDate,
}: {
	setearRepartidores: (circleValue: number, cantidadHab: number, cantidad: number) => void;
	selectedDate: Date;
}) => {
	let indexNavigation = store.getState().indexNavigation;
	let dateString = selectedDate.toString();
	let year = dateString.slice(11, 15);
	let day = dateString.slice(8, 10);
	const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
	let percentage: number;
	useEffect(() => {
		handleActiveDeliveryman(year, month, day).then((res: propsDeliverys) => {
			res.activeUsers > 0 && res.totalUsers > 0
				? ((percentage = (res.activeUsers * 100) / res.totalUsers),
				  setearRepartidores(percentage, res.activeUsers, res.totalUsers))
				: ((percentage = 0), setearRepartidores(0, 0, 0));
		});
	}, [day, indexNavigation]);

	return <View />;
};

export default RepartidoresHabilitados;

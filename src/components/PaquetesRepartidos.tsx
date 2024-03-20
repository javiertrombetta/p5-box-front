import React, { useEffect } from 'react';
import { handleActiveDeliveryman, handlePackagesTotal } from '../services/reports.service';
import { View } from 'react-native';

type propsPackages = {
	state: string;
};

const PaquetesRepartidos = ({
	setearPaquetes,
	selectedDate,
}: {
	setearPaquetes: (circleValue: number, cantidadEntregados: number, cantidad: number) => void;
	selectedDate: Date;
}) => {
	let dateString = selectedDate.toString();
	let year = dateString.slice(11, 15);
	let day: string | number = dateString.slice(8, 10);
	const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
	useEffect(() => {
		handlePackagesTotal(year, month, day)
			.then((res: []) => {
				let cantidad = res.length;
				let entregados = 0;
				res.map((obj: propsPackages) => {
					obj.state === 'entregado' && (entregados = entregados + 1);
				});
				let percentage = (entregados * 100) / cantidad;
				setearPaquetes(percentage, entregados, cantidad);
			})
			.catch(() => {
				setearPaquetes(0, 0, 0);
			});
	}, [selectedDate]);

	return <View />;
};

export default PaquetesRepartidos;

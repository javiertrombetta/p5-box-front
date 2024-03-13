import { View, Text, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { login, store } from '../state/user';
import { handleDetailsPackage } from '../services/package.service';

const PackageDetail = () => {
	//{ selectPackage }: { selectPackage: (data: string) => void }
	const { width, height } = Dimensions.get('window');
	const WScale = width / 360;
	const HScale = height / 640;
	const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));
	const [selectPackage, setPackageSelect] = useState({
		_id: '',
		deliveryFullname: '',
		deliveryAddress: '',
	});
	let user2 = store.getState();
	useEffect(() => {
		if (user2.back !== undefined) {
			handleDetailsPackage(user2.packageSelect).then((data) => {
				store.dispatch(login({ ...user2, packageSelect: data._id }));
				setPackageSelect(data);
			});
		} else {
			handleDetailsPackage(user2.packageSelect, true).then((data) => {
				store.dispatch(login({ ...user2, packageSelect: data._id }));
				setPackageSelect(data);
			});
		}
	}, []);

	return (
		<View
			style={{
				height: 75 * HScale,
				width: 270 * WScale,
				padding: 16 * WScale,
			}}
			className="bg-violeta object-cover justify-center items-start rounded-2xl"
		>
			<View style={{ gap: 4 * WScale }} className="flex flex-row">
				<Text
					style={{ fontSize: scaledSize(12) }}
					className="font-robotoBold text-texto text-center"
				>
					Destino:
				</Text>
				<Text style={{ fontSize: scaledSize(12) }} className="font-roboto text-texto text-center">
					{selectPackage.deliveryAddress}
				</Text>
			</View>
			<View style={{ gap: 4 * WScale }} className="flex flex-row">
				<Text style={{ fontSize: scaledSize(12) }} className="font-robotoBold text-texto">
					Número de paquete:
				</Text>
				<Text style={{ fontSize: scaledSize(12) }} className="font-roboto text-texto">
					{'#' + selectPackage._id.slice(0, 5).toUpperCase() + '...'}
				</Text>
			</View>
			<View style={{ gap: 4 * WScale }} className="flex flex-row">
				<Text style={{ fontSize: scaledSize(12) }} className="font-robotoBold text-texto">
					Recibe:
				</Text>
				<Text style={{ fontSize: scaledSize(12) }} className="font-roboto text-texto">
					{selectPackage.deliveryFullname}
				</Text>
			</View>
		</View>
	);
};

export default PackageDetail;

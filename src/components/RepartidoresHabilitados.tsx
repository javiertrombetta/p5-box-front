import { handleActiveDeliveryman } from '../services/reports.service';
import { login, store } from '../state/user';

type propsDeliverys = {
	activeUsers: number;
	totalUsers: number;
};

type Props = {
	setearRepartidores: (circleValue: number, cantidadHab: number, cantidad: number) => void;
	selectedDate: Date;
};

const RepartidoresHabilitados = async ({ setearRepartidores, selectedDate }: Props) => {
	let user = store.getState();
	let dateString = selectedDate.toString();
	let year = dateString.slice(11, 15);
	let day = dateString.slice(8, 10);
	const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
	let percentage: number;
	await handleActiveDeliveryman(year, month, day).then((res: propsDeliverys) => {
		res.activeUsers > 0 && res.totalUsers > 0
			? ((percentage = (res.activeUsers * 100) / res.totalUsers),
			  setearRepartidores(percentage, res.activeUsers, res.totalUsers))
			: ((percentage = 0), setearRepartidores(0, 0, 0));
		store.dispatch(login({ ...user, switch: false }));
	});
};

export default RepartidoresHabilitados;

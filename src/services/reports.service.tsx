import axios from 'axios';
axios.defaults.withCredentials = true;

export const handleActiveDeliveryman = async (year: string, month: string, day: string) => {
	const response = await axios.get(
		`http://localhost:3000/api/v1/reports/deliveryman/all/state/totals/${year}/${month}/${day}`,
		{
			withCredentials: true,
		}
	);
	return response.data;
};

export const handlePackagesTotal = async (year: string, month: string, day: string) => {
	const response = await axios.get(
		`http://localhost:3000/api/v1/reports/packages/all/${year}/${month}/${day}`,
		{
			withCredentials: true,
		}
	);
	return response.data;
};

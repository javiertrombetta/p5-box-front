import axios from 'axios';
axios.defaults.withCredentials = true;

export const handleActiveDeliveryman = async (year: string, month: string, day: string) => {
	const response = await axios.get(
		`http://localhost:3000/api/v1/reports/deliveryman/state/totals/${year}/${month}/${day}`,
		{
			withCredentials: true,
		}
	);
	return response.data;
};

export const handleTotalDeliveryman = async (year: string, month: string, day: string) => {
	const response = await axios.get(
		`http://localhost:3000/api/v1/reports/deliveryman/state/details/${year}/${month}/${day}`,
		{
			withCredentials: true,
		}
	);
	return response.data;
};

export const handlePackagesTotal = async (year: string, month: string, day: string | number) => {
	const response = await axios.get(
		`http://localhost:3000/api/v1/reports/packages/all/${year}/${month}/${day}`,
		{
			withCredentials: true,
		}
	);
	return response.data;
};

export const handlePackagesDelivered = async (year: string, month: string, day: string) => {
	const response = await axios.get(
		`http://localhost:3000/api/v1/reports/packages/delivered/${year}/${month}/${day}`,
		{
			withCredentials: true,
		}
	);
	return response.data;
};

export const handlePackagesDeliveredUser = async (userId: string) => {
	const response = await axios.get(
		`http://localhost:3000/api/v1/reports/packages/delivered?userId=${userId}`,
		{
			withCredentials: true,
		}
	);
	return response.data;
};

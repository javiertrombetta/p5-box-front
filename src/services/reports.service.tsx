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

export const handleTotalDeliveryman = async (year: string, month: string, day: string) => {
	console.log(year, month, day);
	const response = await axios.get(
		`http://localhost:3000/api/v1/reports/deliveryman/all/state/details/${year}/${month}/${day}`,
		{
			withCredentials: true,
		}
	);
	console.log(response.data);
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

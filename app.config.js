import 'dotenv/config';

export default ({ config }) => ({
	...config,
	extra: {
		googleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
		backendURL: process.env.EXPO_PUBLIC_BACKEND_URL,
	},
});
import 'dotenv/config';

export default ({ config }) => ({
	...config,
	extra: {
		backendURL: process.env.EXPO_PUBLIC_BACKEND_URL,
		googleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
	},
});
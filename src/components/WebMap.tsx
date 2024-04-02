import Constants from 'expo-constants';

function loadGoogleMapsAPI(callback: any) {
	if (window.google && window.google.maps) {
		callback();
	} else {
		const script = document.createElement('script');
		script.src = `https://maps.googleapis.com/maps/api/js?key=${Constants.expoConfig?.extra?.googleMapsApiKey}`;
		script.async = true;
		script.defer = true;
		script.onload = callback;
		document.head.appendChild(script);
	}
}

export default loadGoogleMapsAPI;

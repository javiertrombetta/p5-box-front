/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			saira: ['SairaRegular'],
			sairaMedium: ['SairaMedium'],
			sairaSemiBold: ['SairaSemiBold'],
			sairaBold: ['SairaBold'],
			roboto: ['RobotoRegular'],
			robotoMedium: ['RobotoMedium'],
			robotoBold: ['RobotoBold'],
		},
		extend: {
			colors: {
				gris: '#EBECEF',
				verde: '#80CF8B',
				amarilloVerdoso: '#CEF169',
				violeta: '#CEC4F4',
				texto: '#24424D',
				blanco: '#FEFEFE',
			},
		},
	},
	plugins: [],
};

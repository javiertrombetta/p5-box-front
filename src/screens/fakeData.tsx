type ListItem = {
	[key: string]: string;
};

export const fakePending = (): ListItem[] => [
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
		state: Math.random() < 0.5 ? 'enCursoTrash' : 'pendienteIniciar',
	},
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
		state: Math.random() < 0.5 ? 'enCursoTrash' : 'pendienteIniciar',
	},
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
		state: Math.random() < 0.5 ? 'enCursoTrash' : 'pendienteIniciar',
	},
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
		state: Math.random() < 0.5 ? 'enCursoTrash' : 'pendienteIniciar',
	},
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
		state: Math.random() < 0.5 ? 'enCursoTrash' : 'pendienteIniciar',
	},
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
		state: Math.random() < 0.5 ? 'enCursoTrash' : 'pendienteIniciar',
	},
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
		state: Math.random() < 0.5 ? 'enCursoTrash' : 'pendienteIniciar',
	},
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
		state: Math.random() < 0.5 ? 'enCursoTrash' : 'pendienteIniciar',
	},
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
		state: Math.random() < 0.5 ? 'enCursoTrash' : 'pendienteIniciar',
	},
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
		state: Math.random() < 0.5 ? 'enCursoTrash' : 'pendienteIniciar',
	},
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
		state: Math.random() < 0.5 ? 'enCursoTrash' : 'pendienteIniciar',
	},
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
		state: Math.random() < 0.5 ? 'enCursoTrash' : 'pendienteIniciar',
	},
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
		state: Math.random() < 0.5 ? 'enCursoTrash' : 'pendienteIniciar',
	},
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
		state: Math.random() < 0.5 ? 'enCursoTrash' : 'pendienteIniciar',
	},
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
		state: Math.random() < 0.5 ? 'enCursoTrash' : 'pendienteIniciar',
	},
];

export const fakeHistory = (): ListItem[] => [
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
	},
	{
		deliveryAddress: '#0A235, Bmenabar 2356, CABA',
	},
	{
		deliveryAddress: '#0A235, Cmenabar 2356, CABA',
	},
	{
		deliveryAddress: '#0A235, Dmenabar 2356, CABA',
	},
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
	},
	{
		deliveryAddress: '#0A235, Bmenabar 2356, CABA',
	},
	{
		deliveryAddress: '#0A235, Cmenabar 2356, CABA',
	},
	{
		deliveryAddress: '#0A235, Dmenabar 2356, CABA',
	},
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
	},
	{
		deliveryAddress: '#0A235, Bmenabar 2356, CABA',
	},
	{
		deliveryAddress: '#0A235, Cmenabar 2356, CABA',
	},
	{
		deliveryAddress: '#0A235, Dmenabar 2356, CABA',
	},
	{
		deliveryAddress: '#0A235, Amenabar 2356, CABA',
	},
	{
		deliveryAddress: '#0A235, Bmenabar 2356, CABA',
	},
	{
		deliveryAddress: '#0A235, Cmenabar 2356, CABA',
	},
];

type ListItemUsers = {
	[key: string]: {
		circleValue: number;
		username: string;
		img: string;
	};
};

export const fakeUsers = (): ListItemUsers[] => [
	{
		'0': {
			circleValue: 52,
			username: 'Javier Trombetta',
			img: 'https://media.licdn.com/dms/image/C4D03AQHrxjH4W8NPaQ/profile-displayphoto-shrink_100_100/0/1595166426988?e=1711584000&v=beta&t=JvYqCohzV0C4YBalxd1OrjXzkdphr-fEAlf1R_yaB2I',
		},
	},
	{
		'1': {
			circleValue: 100,
			username: 'Boris Manzano',
			img: 'https://cdn.discordapp.com/attachments/1153431672264597585/1197245225677107240/imagen_cv.jpg?ex=65c3cb01&is=65b15601&hm=1ef0e9a4d50b227820aedff86a7fc4f32298be71609da5b8caed50a49d4ef5d3&',
		},
	},
	{
		'2': {
			circleValue: 84,
			username: 'Javier Colodro',
			img: 'https://media.licdn.com/dms/image/C4D03AQGdOefz2XaJIA/profile-displayphoto-shrink_100_100/0/1612753310949?e=1711584000&v=beta&t=HW9EJnZysnYHEbMwD2B_XZgzcvt6RI5owIDOtCBwWUc',
		},
	},
	{
		'3': {
			circleValue: 0,
			username: 'Lucas Glave',
			img: 'https://media.licdn.com/dms/image/D4D03AQHbMGou_Pxf1w/profile-displayphoto-shrink_200_200/0/1679951269315?e=1711584000&v=beta&t=tmxoWJKRET9g3XGq5W_-y1HScfPezAPCwXJwrbheKFw',
		},
	},
	{
		'4': {
			circleValue: 75,
			username: 'Ricardo Trombetta',
			img: 'https://media.licdn.com/dms/image/C4D03AQHrxjH4W8NPaQ/profile-displayphoto-shrink_100_100/0/1595166426988?e=1711584000&v=beta&t=JvYqCohzV0C4YBalxd1OrjXzkdphr-fEAlf1R_yaB2I',
		},
	},
	{
		'5': {
			circleValue: 90,
			username: 'Ana Manzano',
			img: 'https://cdn.discordapp.com/attachments/1153431672264597585/1197245225677107240/imagen_cv.jpg?ex=65c3cb01&is=65b15601&hm=1ef0e9a4d50b227820aedff86a7fc4f32298be71609da5b8caed50a49d4ef5d3&',
		},
	},
	{
		'6': {
			circleValue: 45,
			username: 'Elena Colodro',
			img: 'https://media.licdn.com/dms/image/C4D03AQGdOefz2XaJIA/profile-displayphoto-shrink_100_100/0/1612753310949?e=1711584000&v=beta&t=HW9EJnZysnYHEbMwD2B_XZgzcvt6RI5owIDOtCBwWUc',
		},
	},
	{
		'7': {
			circleValue: 30,
			username: 'Marcos Glave',
			img: 'https://media.licdn.com/dms/image/D4D03AQHbMGou_Pxf1w/profile-displayphoto-shrink_200_200/0/1679951269315?e=1711584000&v=beta&t=tmxoWJKRET9g3XGq5W_-y1HScfPezAPCwXJwrbheKFw',
		},
	},
	{
		'8': {
			circleValue: 90,
			username: 'Luisa Trombetta',
			img: 'https://media.licdn.com/dms/image/C4D03AQHrxjH4W8NPaQ/profile-displayphoto-shrink_100_100/0/1595166426988?e=1711584000&v=beta&t=JvYqCohzV0C4YBalxd1OrjXzkdphr-fEAlf1R_yaB2I',
		},
	},
	{
		'9': {
			circleValue: 0,
			username: 'Carla Manzano',
			img: 'https://cdn.discordapp.com/attachments/1153431672264597585/1197245225677107240/imagen_cv.jpg?ex=65c3cb01&is=65b15601&hm=1ef0e9a4d50b227820aedff86a7fc4f32298be71609da5b8caed50a49d4ef5d3&',
		},
	},
	{
		'10': {
			circleValue: 25,
			username: 'Sara Colodro',
			img: 'https://media.licdn.com/dms/image/C4D03AQGdOefz2XaJIA/profile-displayphoto-shrink_100_100/0/1612753310949?e=1711584000&v=beta&t=HW9EJnZysnYHEbMwD2B_XZgzcvt6RI5owIDOtCBwWUc',
		},
	},
	{
		'11': {
			circleValue: 100,
			username: 'Julieta Glave',
			img: 'https://media.licdn.com/dms/image/D4D03AQHbMGou_Pxf1w/profile-displayphoto-shrink_200_200/0/1679951269315?e=1711584000&v=beta&t=tmxoWJKRET9g3XGq5W_-y1HScfPezAPCwXJwrbheKFw',
		},
	},
	{
		'12': {
			circleValue: 70,
			username: 'Marta Trombetta',
			img: 'https://media.licdn.com/dms/image/C4D03AQHrxjH4W8NPaQ/profile-displayphoto-shrink_100_100/0/1595166426988?e=1711584000&v=beta&t=JvYqCohzV0C4YBalxd1OrjXzkdphr-fEAlf1R_yaB2I',
		},
	},
	{
		'13': {
			circleValue: 95,
			username: 'Pedro Manzano',
			img: 'https://cdn.discordapp.com/attachments/1153431672264597585/1197245225677107240/imagen_cv.jpg?ex=65c3cb01&is=65b15601&hm=1ef0e9a4d50b227820aedff86a7fc4f32298be71609da5b8caed50a49d4ef5d3&',
		},
	},
	{
		'14': {
			circleValue: 50,
			username: 'Laura Colodro',
			img: 'https://media.licdn.com/dms/image/C4D03AQGdOefz2XaJIA/profile-displayphoto-shrink_100_100/0/1612753310949?e=1711584000&v=beta&t=HW9EJnZysnYHEbMwD2B_XZgzcvt6RI5owIDOtCBwWUc',
		},
	},
	{
		'15': {
			circleValue: 35,
			username: 'Fernando Glave',
			img: 'https://media.licdn.com/dms/image/D4D03AQHbMGou_Pxf1w/profile-displayphoto-shrink_200_200/0/1679951269315?e=1711584000&v=beta&t=tmxoWJKRET9g3XGq5W_-y1HScfPezAPCwXJwrbheKFw',
		},
	},
	{
		'16': {
			circleValue: 85,
			username: 'Miguel Trombetta',
			img: 'https://media.licdn.com/dms/image/C4D03AQHrxjH4W8NPaQ/profile-displayphoto-shrink_100_100/0/1595166426988?e=1711584000&v=beta&t=JvYqCohzV0C4YBalxd1OrjXzkdphr-fEAlf1R_yaB2I',
		},
	},
	{
		'17': {
			circleValue: 40,
			username: 'Elena Manzano',
			img: 'https://cdn.discordapp.com/attachments/1153431672264597585/1197245225677107240/imagen_cv.jpg?ex=65c3cb01&is=65b15601&hm=1ef0e9a4d50b227820aedff86a7fc4f32298be71609da5b8caed50a49d4ef5d3&',
		},
	},
	{
		'18': {
			circleValue: 65,
			username: 'Carlos Colodro',
			img: 'https://media.licdn.com/dms/image/C4D03AQGdOefz2XaJIA/profile-displayphoto-shrink_100_100/0/1612753310949?e=1711584000&v=beta&t=HW9EJnZysnYHEbMwD2B_XZgzcvt6RI5owIDOtCBwWUc',
		},
	},
	{
		'19': {
			circleValue: 55,
			username: 'Isabel Glave',
			img: 'https://media.licdn.com/dms/image/D4D03AQHbMGou_Pxf1w/profile-displayphoto-shrink_200_200/0/1679951269315?e=1711584000&v=beta&t=tmxoWJKRET9g3XGq5W_-y1HScfPezAPCwXJwrbheKFw',
		},
	},
];
{
	/* <List
    column1="circleProgress"
    circleValue={52}
    column2="stringsImg"
    content2String="Javier Trombetta, green"
    column3="img"
    content3="https://media.licdn.com/dms/image/C4D03AQHrxjH4W8NPaQ/profile-displayphoto-shrink_100_100/0/1595166426988?e=1711584000&v=beta&t=JvYqCohzV0C4YBalxd1OrjXzkdphr-fEAlf1R_yaB2I"
    navigation={navigation}
/> */
}

import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID sEFBEifh1jraAb6ZF6yKLPiJmhHUUdQxVxaz0FMD0Ug',
	},
});

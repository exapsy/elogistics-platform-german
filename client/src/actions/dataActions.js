import axios from 'axios';
import { FETCH_FORM_DATA, POST_SENDER, POST_RECEIVER, POST_COURIER, POST_PRODUCT } from './types';

export const addSender = (name, email) => async dispatch => {
	await axios.post('/api/postsender', {
		name,
		email
	});

	// Reloading the store with the new data
	const res = await axios.get('/api/getsenders');

	dispatch({
		type: POST_SENDER,
		senders: res.data
	});
};

export const addReceiver = (name, email, courier) => async dispatch => {
	await axios.post('/api/postreceiver', {
		name,
		email,
		courier
	});

	// Reloading the store with the new data
	const res = await axios.get('/api/getreceivers');

	dispatch({
		type: POST_RECEIVER,
		receivers: res.data
	});
};

export const addCourier = (name) => async dispatch => {
	await axios.post('/api/postcourier', {
		name
	});

	// Reloading the store with the new data
	const res = await axios.get('/api/getcouriers');

	dispatch({
		type: POST_COURIER,
		couriers: res.data
	});
};

export const addProduct = (id, name) => async dispatch => {
	await axios.post('/api/postproduct', {
		id,
		name
	});

	// Reloading the store with the new data
	const res = await axios.get('/api/getproducts');

	dispatch({
		type: POST_PRODUCT,
		products: res.data
	});
};

export const fetchFormData = () => async dispatch => {
	const res_senders = await axios.get('/api/getsenders');
	const res_receivers = await axios.get('/api/getreceivers');
	const res_couriers = await axios.get('/api/getcouriers');
	const res_products = await axios.get('/api/getproducts');

	dispatch({
		type: FETCH_FORM_DATA,
		payload: {
			senders: res_senders.data,
			receivers: res_receivers.data,
			couriers: res_couriers.data,
			products: res_products.data
		}
	})
};
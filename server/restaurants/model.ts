import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const retaurantSchema = new Schema({
	address: {
		building: String,
		coord: [Number, Number],
		street: String,
		zipcode: String,
	},
	name: String,
	restaurant_id: String,
});

export const Restaurant = model('restaurants', retaurantSchema);

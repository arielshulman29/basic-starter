import { Restaurant } from './model';
import { connect } from 'mongoose';

export class RestaurantsRepository {
	constructor() {}

	#getDbConnection = async () => {
		const dbConnection = await connect(process.env.MONGO_URI!);
		return {
			dbConnection,
			[Symbol.asyncDispose]: async () => {
				await dbConnection.connection.close();
			},
		};
	};

	async get() {
		await using dbConnection = await this.#getDbConnection();
		const restaurants = await Restaurant.find().limit(10);
		return restaurants;
	}
}

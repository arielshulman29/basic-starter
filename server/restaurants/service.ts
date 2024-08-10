import { RestaurantsRepository } from './repository';

export async function getRestaurants() {
	const repository = new RestaurantsRepository();
	const restaurants = await repository.get();
	return restaurants;
}

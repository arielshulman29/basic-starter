import express from 'express';
import cors from 'cors';
import { getRestaurants } from './restaurants/service';

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/api', async (req, res) => {
	const restaurants = await getRestaurants();
	res.status(200).json({ restaurants });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

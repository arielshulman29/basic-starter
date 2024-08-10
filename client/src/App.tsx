import { useEffect } from 'react';

function App() {
	useEffect(() => {
		const get = async () => {
			const restaurantsRes = await fetch('/api', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json; charset=UTF-8',
				},
			});
			console.log(await restaurantsRes.json());
		};
		get();
	}, []);

	return <button>Simple Demo App</button>;
}

export default App;

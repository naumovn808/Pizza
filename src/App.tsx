import { MouseEvent, useState } from 'react';
import Button from './components/Button/Button';

function App() {
	const [counter, setCounter] = useState<number>(0);

	const addCounter = (e: MouseEvent) => {
		console.log(e);
	};


	return (
		<>
			<Button onClick={addCounter}>Применить</Button>
			<Button appearence='big' onClick={addCounter}>Вход</Button>
		</>
	);
}

export default App;

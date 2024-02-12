import { MouseEvent, useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
	const [counter, setCounter] = useState<number>(0);

	const addCounter = (e: MouseEvent) => {
		console.log(e);
	};


	return (
		<>
			<Input placeholder='ваш емаил'></Input>
			<Button onClick={addCounter}>Применить</Button>
			<Button appearence='big' onClick={addCounter}>Вход</Button>
		</>
	);
}

export default App;

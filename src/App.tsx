import { MouseEvent, useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart';
import { Menu } from './pages/Menu/Menu';
import { Error } from './pages/Error/Error';

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Menu />
// 	},
// 	{
// 		path: '/cart',
// 		element: <Cart />
// 	},
// 	{
// 		path: '*',
// 		element: <Error />
// 	}
// ]);

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
			{/* <div>

				<Link to='/'>Меню</Link>
				<Link to='/cart'>Корзина</Link>

				<a href='/'>Меню</a>
				<a href='/cart'>Корзина</a>
			</div> */}

			{/* <RouterProvider router={router} /> */}



			{/* <Routes>
				<Route path='/' element={<Menu/>}/>
				<Route path='/cart' element={<Cart/>}/>
				<Route path='*' element={<Error/>}/>
			</Routes> */}
		</>
	);
}

export default App;

import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import ProductCard from '../../components/ProducrCard/ProductCard';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import { useState } from 'react';
import { useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { MenuList } from './MenuList/MenuList';

export function Menu() {

	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const getMenu = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
			setProducts(data);
			setIsLoading(false);
		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError) setError(e.message);
			setIsLoading(false);
			return;
		}
	};

	useEffect(() => {
		getMenu();
	}, []);


	// const getMenu = async () => {
	// 	try {
	// 		const res = await fetch('/src/JSON/products.json');
	// 		if (!res.ok) {
	// 			return;
	// 		}
	// 		const data = await res.json() as Product[];
	// 		setProducts(data);
	// 	} catch (e) {
	// 		console.error(e);
	// 		return;
	// 	}
	// };




	// const fetchData = async () => {
	// 	try {
	// 		const response = await axios.get('/src/JSON/products.json');
	// 		const data = response.data;
	// 		console.log(data);
	// 		setProducts(data);
	// 	} catch (error) {
	// 		console.error('Ошибка при получении данных:', error);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchData();
	// }, []);



	return (<>
		<div className={styles['head']}>
			<Headling>Меню</Headling>;
			<Search />
		</div>

		<div>
			<div>{error && <>{error}</>}</div>
			{!isLoading && <MenuList products={products} />}
			{isLoading && <>загружаем</>}
		</div>

	</>
	);


	return (<>
		<div className={styles['head']}>
			<Headling>Меню</Headling>;
			<Search />
		</div>

		<div>
			<div>{error && <>{error}</>}</div>
			{!isLoading && products.map(p => (
				<ProductCard
					key={p.id}
					id={p.id}
					name={p.name}
					description={p.ingredients.join(', ')}
					rating={p.rating}
					price={p.price}
					image={p.image}
				/>

			))}
			{isLoading && <>загружаем</>}
		</div>

	</>
	);
}

export default Menu;
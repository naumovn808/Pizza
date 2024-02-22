import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import ProductCard from '../../components/ProducrCard/ProductCard';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export function Menu() {

	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const getMenu = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
			setProducts(data);
			setIsLoading(false);
		} catch (e) {
			console.error(e);
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
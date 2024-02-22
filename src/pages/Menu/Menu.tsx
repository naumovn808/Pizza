import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import ProductCard from '../../components/ProducrCard/ProductCard';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import { useState } from 'react';
import { useEffect } from 'react';

export function Menu() {

	const [products, setProducts] = useState<Product[]>([]);

	const getMenu = async () => {
		try {
			const res = await fetch(`${PREFIX}/products`);

			if (!res.ok) {
				return;
			}
			const data = await res.json() as Product[];
			setProducts(data);
		} catch (e) {
			console.error(e);
			return;
		}
	};

	useEffect(() => {
		getMenu();
	}, []);


	return (<>
		<div className={styles['head']}>
			<Headling>Меню</Headling>;
			<Search />
		</div>

		<div>
			{products.map(p => (
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

		</div>

	</>
	);
}
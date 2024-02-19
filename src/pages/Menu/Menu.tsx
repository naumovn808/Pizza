import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import ProductCard from '../../components/ProducrCard/ProductCard';

export function Menu() {
	return (<>
		<div className={styles['head']}>
			<Headling>Меню</Headling>;
			<Search />
		</div>
		<div>
			<ProductCard
				id={1}
				title='Наслаждение'
				description='Салями, руккола, помидоры, оливки'
				rating={4.5}
				price={300}
				image='/product-demo.png'
			/>
		</div>

	</>
	);
}
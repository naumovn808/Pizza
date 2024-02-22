// // import { useLoaderData, useParams } from 'react-router-dom';
// import { Product } from '../../interfaces/product.interface';
// import { useLoaderData } from 'react-router-dom';

// export function Product() {
// 	// const { id } = useParams();
// 	const data = useLoaderData() as Product;

// 	return <>
// 		{/* Product - {id} */}
// 		Product - {data.name}
// 	</>;
// }

import { Await, useLoaderData } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';
import { Suspense } from 'react';

export function Product() {
	const data = useLoaderData() as { data: Product };

	return <>
		<Suspense fallback={'Загружаю...'}>
			<Await
				resolve={data.data}
			>
				{({ data }: { data: Product }) => (
					<>Product - {data.name}</>
				)}
			</Await>
		</Suspense>
	</>;
}
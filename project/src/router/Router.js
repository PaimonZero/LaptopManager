import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoadingComponent from '../components/common/LoadingComponent';
import Error404 from '../pages/error/Error404';
import { Provider } from 'react-redux';

const HomePage = lazy(() => import('../pages/home/HomePage'));
const AboutPage = lazy(() => import('../pages/about/AboutPage'));
const ProductListPage = lazy(() => import('../pages/products/ProductListPage'));
const AddProductPage = lazy(() => import('../pages/products/AddProductPage'));
const UpdateProductPage = lazy(
	() => import('../pages/products/UpdateProductPage'),
);


export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Suspense fallback={<LoadingComponent />}>
				<HomePage />
			</Suspense>
		),
	},
	
	{
		path: '/hextech/about',
		element: (
			<Suspense fallback={<LoadingComponent />}>
				<AboutPage />
			</Suspense>
		),
	},
	{
		path: '/hextech/products',
		element: (
			<Suspense fallback={<LoadingComponent />}>
				<ProductListPage />
			</Suspense>
		),
	},
	{
		path: '/hextech/add-product',
		element: (
			<Suspense fallback={<LoadingComponent />}>
				<AddProductPage />
			</Suspense>
		),
	},
	{
		path: '/hextech/update-product/:id',
		element: (
			<Suspense fallback={<LoadingComponent />}>
				<UpdateProductPage />
			</Suspense>
		),
	},
	{ path: '/hextech/*', element: <Error404 /> },
]);
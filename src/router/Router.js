import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoadingComponent from '../components/common/LoadingComponent';
import Error404 from '../pages/error/Error404';


const HomePage = lazy(() => import('../pages/home/HomePage'));

const AboutPage = lazy(() => import('../pages/about/AboutPage'));

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
	{ path: '/hextech/*', element: <Error404 /> },
]);
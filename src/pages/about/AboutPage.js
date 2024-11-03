import { Suspense, lazy } from 'react';
import About from '../../components/about/About';
const AboutPage = () => {
	return (
		<>
			<div className="vh-100">
				<Suspense fallback={<div>Loading...</div>}>
					<About/>
				</Suspense>
			</div>
		</>
	);
};

export default AboutPage;
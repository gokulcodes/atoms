/** @format */

import DemoView from '@/core/DemoView';
import Layout from '@/core/Layout';
import getComponent from '@/core/ComponentDictionary';
import { useParams } from 'react-router';

function Demo() {
	const params = useParams();

	return (
		<Layout>
			<DemoView renderView={getComponent(params.id)} />
		</Layout>
	);
}

export default Demo;
